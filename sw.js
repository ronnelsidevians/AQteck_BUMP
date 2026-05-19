# BUMP Search PWA — GitHub Pages

## Що завантажити у репозиторій

Обов'язково:
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- папку `icons/`
- `.nojekyll`

Для повного офлайн-доступу до схем також поклади поруч папки зі схемами:
- `schemes/`
- `sheets/`

Шляхи у HTML вже відносні, наприклад `./schemes/...png` та `./sheets/AQteck_Bump_01.png`.

## GitHub Pages

### Варіант 1 — простий

1. Створи репозиторій GitHub.
2. Завантаж файли з цього ZIP у корінь репозиторію.
3. Repository → Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: `main`, folder: `/root`.
6. Відкрий URL, який покаже GitHub Pages.

### Варіант 2 — через GitHub Actions

У ZIP вже є `.github/workflows/pages.yml`. Якщо хочеш деплой через Actions:

1. Repository → Settings → Pages.
2. Source: GitHub Actions.
3. Push у `main` запустить workflow автоматично.

## Встановлення PWA

- Android / Chrome / Edge: кнопка `⬇️` або меню браузера → Install app.
- iPhone / iPad: Safari → Share → Add to Home Screen.
- Windows / macOS Chrome/Edge: адресний рядок або кнопка `⬇️`.

## Офлайн

Після першого відкриття онлайн service worker кешує HTML, manifest, іконки та доступні PNG-схеми. Якщо якісь PNG відсутні в репозиторії, кешування їх пропускає без помилки.
