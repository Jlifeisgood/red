# Башня

Пошаговая игра на выживание (HTML/JS) в обёртке Capacitor для Android.

## Запуск в браузере
Откройте `www/index.html`.

## Сборка APK
Нужны Node 18+, JDK 17+/21 и Android SDK.

    npm install
    npm run apk
    # APK: android/app/build/outputs/apk/debug/app-debug.apk

Либо запушьте проект на GitHub: workflow `Build Android APK` соберёт APK и приложит его как artifact.

Игровой код: `www/game.js`. После правок выполните `npx cap sync android`.
