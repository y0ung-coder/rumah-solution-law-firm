# SOLUTION LAW FIRM (SLF)
### Premium Modern Law Firm Website & Content Management System
**Managing Partner:** Adv. Samuel Tambunan, S.Kom., S.H.  
**Tagline:** *"Your Legal Matter, Our Priority."*

---

## 1. Overview & Primary Design Philosophy

Website **Solution Law Firm (SLF)** dirancang dengan karakter visual editorial kelas dunia yang mengacu pada referensi desain premium [Veritas Framer Template](https://veritas-template.framer.website/#hero). 

Sistem ini dibangun di atas arsitektur full-stack modern menggunakan **Laravel + Inertia.js + React (TypeScript) + Tailwind CSS**, dilengkapi sistem animasi halus (**Lenis Smooth Scroll, GSAP, Lucide Icons**) serta **Admin Management Portal** mandiri untuk mengelola permohonan konsultasi klien, artikel hukum, profil pimpinan, layanan hukum, dan konfigurasi website.

---

## 2. Brand Identity & Visual Aesthetic

- **Primary Color:** Deep Navy (`#172B3A`)
- **Secondary Color:** Dark Charcoal (`#20252A`)
- **Warm Canvas:** Warm White (`#F8F8F5`)
- **Surface Card:** White (`#FFFFFF`)
- **Accents:** Muted Gold (`#B89B69`)
- **Typography:**
  - *Headings:* `DM Serif Display` & `Playfair Display` (Editorial Serif)
  - *Body & Nav:* `Inter` (Geometric Sans)
- **Smooth Scrolling:** Lenis Smooth Scroll Engine (dengan dukungan `prefers-reduced-motion`)

---

## 3. Komposisi Halaman Utama (Homepage Sections)

1. **Sticky Glass Navbar:** Monogram SLF, navigasi anchor halus, tombol direct call & WhatsApp, serta CTA *"Book Consultation"*.
2. **Editorial Hero Section:** Headline monumental *"YOUR LEGAL MATTER, OUR PRIORITY."*, badge otoritas, subheadline proteksi hukum, dual CTA, floating credibility card pimpinan firma, dan fotografi arsitektur kantor modern.
3. **About Us Section:** Komposisi editorial dua kolom, narasi filosofi hukum, kartu pengalaman bertahun-tahun, serta 3 *Value Cards*:
   - *Client-Centered Approach*
   - *Professional Integrity*
   - *Clear Communication*
4. **Animated Statistics Grid:** Counter angka responsif berbasis viewport (10+ Years Experience, 350+ Cases Handled, 08 Practice Areas, 99% Client Satisfaction).
5. **Practice Areas (8 Kategori Lengkap):**
   - `01. Corporate & Business Law`
   - `02. Civil Law`
   - `03. Criminal Law`
   - `04. Family Law`
   - `05. Property & Land Law`
   - `06. Litigation & Dispute Resolution`
   - `07. Legal Consultation`
   - `08. Legal Drafting & Legal Opinion`
   *Setiap kartu dilengkapi banner visual, nomor urut, deskripsi, daftar cakupan layanan dengan checklist, tombol detail modal, dan pemicu konsultasi langsung.*
6. **Managing Partner Spotlight:**
   - **Adv. Samuel Tambunan, S.Kom., S.H.**
   - Portrait fotografi editorial besar.
   - Kualifikasi ganda (Ilmu Komputer & Ilmu Hukum, PKPA, UPA, BAS Pengadilan Tinggi).
   - Biografi eksekutif, filosofi penanganan perkara, tonggak pengalaman, dan tag keahlian hukum utama.
7. **Methodical Workflow (Our Process):**
   - `01 — Initial Consultation`
   - `02 — Legal Strategy`
   - `03 — Legal Representation`
8. **Client Testimonials Carousel:** Testimoni berbasis kutipan elegan dari perwakilan korporasi dan klien perdata dengan rating bintang dan kontrol navigasi.
9. **FAQ Accordion:** 6 tanya-jawab hukum esensial dalam bahasa Indonesia profesional.
10. **Confidential Contact & Consultation Booking Form:**
    - Alamat SCBD Treasury Tower Lantai 28, Jakarta Selatan.
    - Saluran komunikasi WhatsApp dan email.
    - Formulir reservasi konsultasi interaktif dengan validasi Laravel, anti-spam honeypot, dan notifikasi konfirmasi langsung.
11. **Legal Insights & Updates:** Artikel analisis yuridis terbitan tim riset SLF dengan modal reader interaktif.
12. **Editorial Footer:** Logo SLF, ringkasan firma, tautan navigasi, klausul disclaimer hukum resmi, dan tombol *back-to-top*.
13. **Floating WhatsApp Button:** Tombol floating sudut kanan bawah dengan tooltip konsultasi instan.

---

## 4. Admin Management Portal

Portal administrasi mandiri untuk memelihara seluruh konten website tanpa perlu mengubah kode sumber:

- **URL Login:** `http://127.0.0.1:8000/admin/login`
- **Email Default:** `admin@solutionlawfirm.com`
- **Password Default:** `admin12345`

### Modul Admin:
- **Dashboard:** Statistik ringkasan permohonan konsultasi masuk, status pending, jumlah artikel, dan layanan aktif.
- **Consultations Manager:** Meninjau pesan klien, memperbarui status (`pending`, `reviewed`, `contacted`, `closed`), mencatat memo internal admin, atau menghapus permohonan.
- **Practice Areas Manager:** Menyunting judul, deskripsi, cakupan layanan (bullet points), dan foto untuk 8 bidang praktik hukum.
- **Articles & Insights Manager:** Membuat, menyunting, dan menerbitkan artikel analisis hukum baru (dilengkapi slug otomatis dan rich excerpt).
- **Managing Partner Profile Manager:** Mengelola riwayat pendidikan, pengalaman profesional, keahlian hukum, foto, dan bio Adv. Samuel Tambunan, S.Kom., S.H.
- **Website Settings Manager:** Mengonfigurasi nomor WhatsApp, telepon kantor, alamat kantor SCBD, jam buka, hero text, dan angka statistik secara real-time.

---

## 5. Cara Menjalankan Aplikasi

### Opsi Cepat (Windows):
Cukup jalankan file batch:
```cmd
start.bat
```

### Opsi Manual via Terminal:
1. Pastikan environment PHP 8.3 & Node.js aktif di path:
```powershell
$env:Path = "C:\laragon\bin\php\php-8.3.30-Win32-vs16-x64;C:\laragon\bin\composer;C:\laragon\bin\nodejs\node-v24.19.0;C:\Program Files\nodejs;" + $env:Path
```

2. Jalankan migrasi dan seeder database (SQLite sudah terkonfigurasi otomatis):
```powershell
php artisan migrate --seed
```

3. Jalankan web server:
```powershell
php artisan serve --port=8000
```

4. Akses melalui browser:
- Website: `http://127.0.0.1:8000`
- Admin: `http://127.0.0.1:8000/admin/login`
