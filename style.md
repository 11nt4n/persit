# Persit Web App UI/UX Design System

## 1. Konsep & Identitas (Identity)
Tema desain aplikasi web ini dirancang agar selaras dengan identitas **Persit Kartika Chandra Kirana (Persatuan Istri Tentara)**. Desain ini mengedepankan kesan profesional, elegan, modern, dan keibuan dengan sentuhan warna hijau khas Persit.

Desain akan menggunakan konsep **Clean & Modern dengan sentuhan Glassmorphism**, memberikan kesan aplikasi yang ringan, rapi, dan mudah digunakan (user-friendly).

## 2. Palet Warna (Color Palette)
Warna utama diambil dari referensi seragam resmi Persit, yang terdiri dari kombinasi Hijau Muda (kebaya) dan Hijau Tua (rok/jas).

### Warna Utama (Primary Colors)
- **Persit Apple Green (Hijau Muda)**
  - **HEX:** `#85A825` (Estimasi warna kebaya hijau muda)
  - **Penggunaan:** Call-to-Action (CTA) buttons, aksen aktif, ikon utama, dan elemen penyorot (highlight).
- **Persit Olive Dark (Hijau Tua)**
  - **HEX:** `#2E4018` (Estimasi warna rok/jas hijau tua)
  - **Penggunaan:** Sidebar background, navbar, header utama, dan teks penekanan yang kuat.

### Warna Netral (Neutral Colors)
- **Background White:** `#F8FAF5` (Putih dengan sedikit rona hijau agar tidak menyilaukan mata)
- **Surface White:** `#FFFFFF` (Untuk card dan kontainer utama)
- **Text Dark:** `#1A1F16` (Hitam kehijauan untuk teks paragraf dan judul, lebih lembut dari hitam pekat)
- **Text Muted:** `#6B7262` (Abu-abu untuk teks sekunder, placeholder, dan caption)
- **Border:** `#E2E8DC` (Abu-abu terang kehijauan untuk garis pembatas)

### Warna Sistem (Semantic Colors)
- **Success:** `#10B981` (Hijau terang untuk notifikasi berhasil)
- **Warning:** `#F59E0B` (Kuning/Oranye untuk peringatan)
- **Danger:** `#EF4444` (Merah untuk error atau tindakan destruktif)
- **Info:** `#3B82F6` (Biru untuk informasi tambahan)

## 3. Tipografi (Typography)
Untuk menonjolkan kesan modern dan rapi, kita menggunakan kombinasi font sans-serif dari Google Fonts.

- **Heading (Judul): `Outfit` atau `Inter`**
  - Bersih, geometris, dan memberikan kesan modern serta profesional.
  - Font-weight: Semi-Bold (600), Bold (700)
- **Body Text (Teks Konten): `Inter` atau `Roboto`**
  - Keterbacaan (readability) sangat tinggi pada layar digital, baik untuk teks panjang maupun data di dalam tabel.
  - Font-weight: Regular (400), Medium (500)

## 4. Gaya Komponen (Component Styles)

### Buttons (Tombol)
- **Primary Button:** Background *Persit Apple Green* (`#85A825`), teks putih, sudut melengkung (rounded `8px` atau `12px`), bayangan lembut saat hover (hover: transform scale 1.02 & shadow-md).
- **Secondary Button:** Outline border *Persit Apple Green*, teks *Persit Apple Green*, background transparan. Hover effect menjadi background *Persit Apple Green* dengan opacity 10%.
- **Ghost/Text Button:** Teks *Persit Olive Dark* tanpa background, dengan garis bawah tipis saat hover.

### Cards & Containers
- Menggunakan warna dasar *Surface White* (`#FFFFFF`).
- **Shadows:** Bayangan sangat lembut dan merata (Drop shadow soft: `0 4px 6px -1px rgba(0, 0, 0, 0.05)`).
- **Border-radius (Sudut Melengkung):** `16px` untuk memberikan kesan ramah dan tidak kaku.
- **Glassmorphism (Opsional):** Digunakan untuk elemen mengambang seperti dropdown, modal, atau sidebar mini, dengan kombinasi *blur backdrop* dan border putih transparan.

### Form Inputs
- Background input abu-abu sangat terang atau putih dengan border abu-abu kehijauan (`#E2E8DC`).
- Saat aktif (focus): Border berubah menjadi *Persit Apple Green* (`#85A825`) dengan ring (halo/cincin) tipis di luarnya.
- Padding yang luas dan lega agar mudah ditekan di perangkat mobile maupun desktop.

## 5. Tata Letak & Navigasi (Layout & Navigation)
- **Sidebar (Navigasi Kiri):** Warna dasar *Persit Olive Dark* (`#2E4018`) dengan teks menu putih. Ikon menu yang aktif ditandai dengan latar belakang *Persit Apple Green* (`#85A825`) untuk visibilitas yang tinggi.
- **Top Navigation (Header):** Bersih, dengan warna putih atau transparan, berisi informasi profil pengguna, notifikasi, dan breadcrumb.
- **Dashboard Layout:** Konsep card-based (berbasis kartu) dengan jarak (spacing) yang lega antar elemen (whitespace-rich) agar informasi mudah dicerna.

## 6. Animasi & Interaksi (Micro-interactions)
- **Hover effects:** Setiap elemen interaktif (tombol, link, kartu data) memiliki transisi warna atau bayangan yang halus (`transition: all 0.2s ease-in-out`).
- **Loading state:** Menggunakan *skeleton loader* yang berkedip lembut dengan warna abu-abu terang, bukan sekadar spinner.
- **Feedback:** Animasi *toast notification* yang muncul dari bawah atau sudut kanan atas layar saat tindakan berhasil atau gagal.

---

### Lampiran: Konsep Visual Antarmuka
Berikut adalah referensi visual AI-generated untuk tema yang selaras dengan panduan di atas:

![Mockup UI Persit Theme](C:/Users/mumta/.gemini/antigravity-ide/brain/ed6e9b0f-5ca6-4b92-9e65-7492a2c3d9f4/persit_theme_mockup_1781750487094.png)
