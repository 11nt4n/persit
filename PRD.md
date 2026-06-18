# Product Requirements Document (PRD): Sistem Informasi Persit Kartika Chandra Kirana

## 1. Pendahuluan
Sistem Informasi Persit Kartika Chandra Kirana (Persatuan Istri Tentara) adalah platform digital yang dirancang untuk mempermudah administrasi, manajemen keanggotaan, dan transparansi kegiatan organisasi. Sistem ini menjembatani kebutuhan informasi publik dan kebutuhan manajemen internal pengurus.

## 2. Arsitektur Sistem
Sistem ini terbagi menjadi dua bagian utama:
1. **Portal Publik (Front-end):** Antarmuka publik untuk masyarakat dan anggota biasa untuk melihat informasi organisasi.
2. **Dashboard Internal (Back-end/SIM):** Sistem manajemen untuk pengurus dengan hak akses spesifik.

---

## 3. Fitur Portal Publik (Front-end)
Portal ini dapat diakses oleh siapa saja tanpa perlu login.

*   **Beranda (Home):** Menampilkan highlight berita terbaru, kalender kegiatan terdekat, dan sambutan Ketua.
*   **Profil Organisasi:** 
    *   Sejarah berdirinya Persit.
    *   Visi dan Misi.
    *   Struktur Kepengurusan.
*   **Berita & Artikel:** Publikasi liputan kegiatan, artikel informatif, dan pengumuman resmi.
*   **Galeri:** Dokumentasi foto dan video dari berbagai acara dan kegiatan.
*   **Kontak & Bantuan:** Informasi sekretariat, formulir kontak, dan tautan media sosial.

---

## 4. Fitur Dashboard Internal (Admin & Anggota)
Membutuhkan otentikasi (login) dengan pembatasan hak akses (Role-Based Access Control) antara Pengurus dan Anggota.

### 4.1. Manajemen Keanggotaan (E-KTA)
*   **Database Anggota:** Pencatatan detail anggota (Nama, Pangkat/NRP Suami, Jabatan, dll).
*   **Mutasi Anggota:** Fitur untuk mengelola anggota yang masuk atau keluar mengikuti mutasi dinas suami.
*   **Kartu Anggota Elektronik (E-KTA):** Cetak atau unduh KTA digital yang dilengkapi dengan QR Code/Barcode unik.

### 4.2. Laporan Bidang/Seksi
Pengarsipan laporan kegiatan secara terstruktur berdasarkan seksi:
*   **Seksi Organisasi:** Personalia, urusan dalam.
*   **Seksi Ekonomi:** Koperasi, UMKM, perkreditan.
*   **Seksi Kebudayaan:** Posyandu, Bina Keluarga Balita (BKB), pendidikan anak, kesenian.
*   **Seksi Sosial:** Bakti sosial, donor darah, santunan.

### 4.3. Administrasi & Keuangan
*   **Arsip Surat:** Manajemen Surat Masuk dan Surat Keluar.
*   **Notulensi Rapat:** Pencatatan hasil pertemuan.
*   **Manajemen Keuangan:** Laporan kas (pemasukan/pengeluaran) dan pelacakan iuran anggota.

---

## 5. Fitur Unggulan: Session-Based Attendance (Absensi Berbasis Sesi)
Sistem absensi yang dirancang secara spesifik untuk mencegah kecurangan (titip absen/absen dari rumah) dan memastikan anggota hanya absen di lokasi saat acara berlangsung.

### 5.1. Hak Akses Admin (Pengurus)
*   **Manajemen Acara:** Membuat jadwal acara baru.
*   **Kontrol Sesi Absen:** Tombol "Buka Absensi" untuk memulai sesi, dan "Tutup Absensi" untuk mengakhiri sesi.
*   **Validasi Kehadiran:** Menampilkan QR Code dinamis (berubah setiap X detik) di layar/proyektor atau menghasilkan PIN/Token Acara 4-6 digit yang harus dimasukkan anggota.
*   **Live Dashboard:** Memantau secara real-time status kehadiran peserta saat acara berlangsung.

### 5.2. Hak Akses Anggota
*   **Status Menunggu:** Tombol absensi non-aktif (abu-abu) sebelum admin membuka sesi.
*   **Proses Absensi:** Saat sesi dibuka, anggota dapat:
    *   Melakukan *Scan QR Code* menggunakan kamera HP.
    *   Memasukkan PIN rahasia acara.
*   **Bukti Kehadiran:** Mendapatkan resi digital dengan timestamp (waktu kehadiran).
*   **Pengajuan Izin/Sakit:** Tombol khusus untuk mengajukan ketidakhadiran dengan wajib melampirkan foto bukti (surat dokter/keterangan) yang membutuhkan persetujuan (approval) dari admin.

### 5.3. Keamanan Tambahan
*   **Pembatasan Geolocation:** Absensi hanya valid jika koordinat GPS anggota berada dalam radius tertentu (misal: 100 meter) dari lokasi acara.
*   **Device ID Lock:** Mencegah satu perangkat (HP) digunakan untuk melakukan absensi banyak akun secara bergantian.

### 5.4. Laporan Kehadiran (Reporting)
*   **Export Data:** Fitur unduh laporan kehadiran dalam format Excel atau PDF.
*   **Rapor Individu:** Menampilkan persentase kehadiran bulanan pada profil masing-masing anggota.
