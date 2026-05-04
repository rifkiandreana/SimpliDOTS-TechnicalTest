# SimpliDots - TMDB Cypress BDD Tests

Dokumentasi singkat untuk project automated test berbasis Cypress + Cucumber (Gherkin).

## Ringkasan

Project ini berisi skenario pengujian fitur TMDB, seperti login, menandai favorite, melihat daftar favorite, sorting favorite, dan menghapus favorite. Struktur test menggunakan Gherkin (.feature) dan step definition Cypress.

## Prasyarat

- Node.js (versi LTS disarankan)
- npm

## Instalasi

```bash
npm install
```

## Menjalankan Test

Menjalankan semua skenario yang diberi tag `@automated`:

```bash
npm run cy:run
```

Membuka Cypress Test Runner (hanya tag `@automated`):

```bash
npm run cy:open
```

## Hasil Test (Report)

Project ini menghasilkan report Mochawesome (JSON) lalu digabungkan dan di-render menjadi HTML.

Gabungkan file JSON:

```bash
npx mochawesome-merge "cypress/reports/*.json" -o merged.json
```

Generate report HTML:

```bash
npx marge merged.json --reportDir cypress/reports/html --inline
```

Hasil report HTML dapat dilihat di folder `cypress/reports/html`.

## Struktur Folder

```
.
├─ cypress/
│  ├─ e2e/
│  │  ├─ features/           # File Gherkin
│  │  ├─ pages/              # Page object
│  │  └─ step_definitions/   # Step definitions
│  ├─ fixtures/
│  └─ support/
├─ cypress.config.js
└─ package.json
```

## Daftar Fitur (Gherkin)

- Login TMDB
- Mark as Favorite
- View Favorite Movie List
- Sorting Favorite Movies
- Remove Movie from Favorite
- Ubah Bahasa (file tersedia di folder features)

## Tagging

Project menggunakan tag untuk filter test:

- `@automated` untuk skenario yang dijalankan pada script `cy:run` dan `cy:open`.

## Catatan Penting

- Credensial login ada di file feature (contoh: `login.feature`). Pastikan akun masih valid.
- Test bergantung pada data di TMDB (mis. daftar movie popular dan favorite).

## Dependencies Utama

- cypress
- @badeball/cypress-cucumber-preprocessor
- @bahmutov/cypress-esbuild-preprocessor
- cypress-real-events
