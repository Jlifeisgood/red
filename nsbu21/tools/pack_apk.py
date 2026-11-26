"""Build an unsigned, 4-byte-aligned APK from an unpacked APK directory and a new assets/index.html.
usage: pack_apk.py <unpacked_dir> <index.html> <out_unsigned.apk>"""
import os, sys, zipfile, zlib, struct

src, index_html, out = sys.argv[1:4]
# keep the original order of entries; drop the old signature
order = ['AndroidManifest.xml', 'res/drawable/ic_launcher_background.xml', 'res/drawable/ic_launcher_foreground.xml',
         'res/drawable/ic_launcher_monochrome.xml', 'res/mipmap-anydpi-v26/ic_launcher.xml', 'resources.arsc',
         'assets/index.html', 'classes.dex']
STORED = {'resources.arsc'}
present = sorted(os.path.relpath(os.path.join(d, f), src).replace(os.sep, '/') for d, _, fs in os.walk(src) for f in fs)
extra = [p for p in present if p not in order and not p.startswith('META-INF/')]
assert not extra, extra

with open(out, 'wb') as fo:
    z = zipfile.ZipFile(fo, 'w')
    for name in order:
        data = open(index_html if name == 'assets/index.html' else os.path.join(src, name), 'rb').read()
        zi = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
        zi.create_system = 0
        if name in STORED:
            zi.compress_type = zipfile.ZIP_STORED
            # pad the local header's extra field so the data starts on a 4-byte boundary
            hdr_end = fo.tell() + 30 + len(name.encode())
            zi.extra = b'\0' * ((4 - hdr_end % 4) % 4)
        else:
            zi.compress_type = zipfile.ZIP_DEFLATED
        z.writestr(zi, data, compress_type=zi.compress_type, compresslevel=9 if name not in STORED else None)
    z.close()

# check alignment of stored entries
b = open(out, 'rb').read()
for zi in zipfile.ZipFile(out).infolist():
    if zi.compress_type == zipfile.ZIP_STORED:
        nl, el = struct.unpack_from('<HH', b, zi.header_offset + 26)
        print(zi.filename, 'data offset % 4 =', (zi.header_offset + 30 + nl + el) % 4)
print('unsigned', out, len(b))
