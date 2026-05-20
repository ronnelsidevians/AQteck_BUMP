# BUMP Search PWA v7

v7 додає псевдо-fullscreen fallback для iPhone/iOS і Telegram in-app browser. Якщо реальний Fullscreen API не спрацьовує, кнопка `⛶ На весь екран` переводить модалку у fixed 100vw × 100dvh режим без навігації сторінок.

Кнопка доступна тільки для повного листа `AQteck_Bump_XX.png`, після `Показати всю схему`.

Після оновлення заміни `index.html`, `sw.js`, `manifest.webmanifest`, `icons/`, `favicon.ico` і очисти Service Worker/кеш.
