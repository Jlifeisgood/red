"""Minimal binary AndroidManifest reader/patcher: prints manifest attributes, optionally bumps versionCode/versionName in place."""
import struct, sys

ATTR_VERSION_CODE = 0x0101021b
ATTR_VERSION_NAME = 0x0101021c


def parse(b):
    assert struct.unpack_from('<HHI', b, 0)[0] == 0x0003
    off = 8
    strings, res_ids, sp = [], [], None
    attrs = []
    while off < len(b):
        typ, hsz, sz = struct.unpack_from('<HHI', b, off)
        if typ == 0x0001:  # string pool
            n, styles, flags, s_start, _ = struct.unpack_from('<IIIII', b, off + 8)
            utf8 = bool(flags & 0x100)
            offs = struct.unpack_from('<%dI' % n, b, off + hsz)
            base = off + s_start
            sp = (off, n, utf8, base, offs)
            for o in offs:
                p = base + o
                if utf8:
                    l1 = b[p]; p += 2 if l1 & 0x80 else 1
                    l2 = b[p]; p += 1
                    if l2 & 0x80:
                        l2 = ((l2 & 0x7f) << 8) | b[p]; p += 1
                    strings.append((b[p:p + l2].decode('utf-8'), p, l2))
                else:
                    l = struct.unpack_from('<H', b, p)[0]; p += 2
                    strings.append((b[p:p + 2 * l].decode('utf-16le'), p, l))
        elif typ == 0x0180:
            res_ids = list(struct.unpack_from('<%dI' % ((sz - 8) // 4), b, off + 8))
        elif typ == 0x0102:  # start element
            ns, name, a_start, a_size, a_count = struct.unpack_from('<iiHHH', b, off + 16)
            for i in range(a_count):
                ap = off + 16 + a_start + i * a_size
                ans, aname, araw, vsize, _, vtype, vdata = struct.unpack_from('<iiiHBBI', b, ap)
                rid = res_ids[aname] if aname < len(res_ids) else None
                attrs.append((strings[name][0], strings[aname][0], rid, araw, vtype, vdata, ap))
        off += sz
    return strings, attrs


def main():
    path = sys.argv[1]
    b = bytearray(open(path, 'rb').read())
    strings, attrs = parse(b)
    for el, an, rid, raw, vt, vd, ap in attrs:
        if el in ('manifest', 'uses-sdk', 'application'):
            val = strings[raw][0] if raw >= 0 else (vd if vt == 0x10 else hex(vd))
            print(el, an, val)
    if len(sys.argv) > 2:
        new_code, new_name = int(sys.argv[2]), sys.argv[3]
        for el, an, rid, raw, vt, vd, ap in attrs:
            if el == 'manifest' and rid == ATTR_VERSION_CODE:
                struct.pack_into('<I', b, ap + 16, new_code)
            if el == 'manifest' and rid == ATTR_VERSION_NAME:
                s, p, l = strings[raw]
                assert len(new_name) == len(s), 'versionName must keep its length'
                enc = new_name.encode('utf-8' if b[p - 1:p] and False else 'utf-16le')
                # detect encoding by comparing the stored bytes
                if bytes(b[p:p + len(s)]) == s.encode('utf-8'):
                    b[p:p + len(s)] = new_name.encode('utf-8')
                else:
                    b[p:p + 2 * len(s)] = new_name.encode('utf-16le')
        open(path, 'wb').write(b)
        print('patched ->', new_code, new_name)


main()
