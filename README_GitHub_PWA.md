# BUMP Search PWA v9 STABLE

Стабільна версія після перегляду: повні схеми відкриваються через `sheetCandidates()` з розширеним списком шляхів; якщо файл відсутній, показується повідомлення із шляхами, які перевірялися. Fullscreen реалізовано як CSS pseudo-fullscreen, без ризикованого browser Fullscreen API, тому схема картки не ламається.

ВАЖЛИВО: для повних схем завантаж у репозиторій PNG `AQteck_Bump_01.png ... AQteck_Bump_13.png` у папку `sheets/` або `schemes/`.

Замінити: `index.html`, `sw.js`, `manifest.webmanifest`, `icons/`, `favicon.ico`. Після заміни очистити Service Worker або відкрити `?v=9`.
