# Web Intro — Edwin Kurniawan Eka Julianda

Halaman intro personal, dibangun dengan Next.js (App Router) + TypeScript.

## Cara menjalankan

1. Extract folder ini, lalu buka terminal di dalamnya.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan development server:

   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur project

```
app/
  layout.tsx     -> root layout, load font (Plus Jakarta Sans, Inter, JetBrains Mono)
  page.tsx        -> isi halaman intro (hero, projek, stack, kontak)
  globals.css     -> semua styling
```

## Yang masih perlu diisi

- Email, GitHub, dan LinkedIn di `app/page.tsx` (bagian kontak) masih placeholder.
- Daftar stack di bagian "STACK" bisa disesuaikan lagi kalau ada tools baru yang dipakai.

## Build untuk production

```bash
npm run build
npm run start
```
