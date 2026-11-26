import com.android.apksig.ApkSigner;
import com.android.apksig.ApkVerifier;

import java.io.File;
import java.io.FileInputStream;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.cert.X509Certificate;
import java.util.Collections;

/** usage: SignApk <keystore.p12> <storepass> <alias> <in.apk> <out.apk> <minSdk> */
public class SignApk {
    public static void main(String[] a) throws Exception {
        KeyStore ks = KeyStore.getInstance("PKCS12");
        try (FileInputStream in = new FileInputStream(a[0])) { ks.load(in, a[1].toCharArray()); }
        PrivateKey key = (PrivateKey) ks.getKey(a[2], a[1].toCharArray());
        X509Certificate cert = (X509Certificate) ks.getCertificate(a[2]);
        ApkSigner.SignerConfig sc = new ApkSigner.SignerConfig.Builder("NSBU21", key, Collections.singletonList(cert)).build();
        new ApkSigner.Builder(Collections.singletonList(sc))
            .setInputApk(new File(a[3])).setOutputApk(new File(a[4]))
            .setMinSdkVersion(Integer.parseInt(a[5]))
            .setV1SigningEnabled(false).setV2SigningEnabled(true)
            .build().sign();
        ApkVerifier.Result r = new ApkVerifier.Builder(new File(a[4])).build().verify();
        System.out.println("verified=" + r.isVerified() + " v1=" + r.isVerifiedUsingV1Scheme() + " v2=" + r.isVerifiedUsingV2Scheme());
        for (ApkVerifier.IssueWithParams e : r.getErrors()) System.out.println("ERROR " + e);
        for (ApkVerifier.IssueWithParams w : r.getWarnings()) System.out.println("WARN " + w);
        if (!r.isVerified()) System.exit(1);
    }
}
