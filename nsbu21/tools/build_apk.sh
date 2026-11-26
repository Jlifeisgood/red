#!/usr/bin/env bash
# Builds the APK from nsbu21/index.html and signs it with APK Signature Scheme v2.
# usage: nsbu21/tools/build_apk.sh <keystore.p12> <password> <alias> [out.apk]
# needs: python3, a JDK (javac, java), curl
set -euo pipefail
abs() { case "$1" in /*) echo "$1" ;; *) echo "$PWD/$1" ;; esac; }
ks="$(abs "$1")"; pass="$2"; alias="$3"; out="$(abs "${4:-NSBU21.apk}")"
cd "$(dirname "$0")/.."
build="$(mktemp -d)"
jar="$build/apksig-2.3.0.jar"
curl -fsSL -o "$jar" https://repo1.maven.org/maven2/com/android/tools/build/apksig/2.3.0/apksig-2.3.0.jar
echo "9637078c0016244e4be0941836295365a7e2e5b164c59cb7885783c40460bfee  $jar" | sha256sum -c -
javac -cp "$jar" -d "$build" tools/SignApk.java
python3 -I tools/pack_apk.py apk index.html "$build/unsigned.apk"
# apksig 2.3.0 touches JDK internals while loading; only the v2 scheme is used (minSdk 26)
java --add-exports java.base/sun.security.x509=ALL-UNNAMED --add-exports java.base/sun.security.pkcs=ALL-UNNAMED \
  --add-exports java.base/sun.security.util=ALL-UNNAMED -cp "$jar:$build" \
  SignApk "$ks" "$pass" "$alias" "$build/unsigned.apk" "$out" 26
echo "built $out"
