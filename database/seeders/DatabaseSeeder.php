<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\PracticeArea;
use App\Models\Article;
use App\Models\Testimonial;
use App\Models\PartnerProfile;
use App\Models\SiteSetting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Admin User
        User::updateOrCreate(
            ['email' => 'admin@solutionlawfirm.com'],
            [
                'name' => 'Admin Rumah Solution Law Firm',
                'password' => Hash::make('admin12345'),
            ]
        );

        // 2. Managing Partner Profile
        PartnerProfile::updateOrCreate(
            ['name' => 'Adv. Samuel Tambunan, S.Kom., S.H.'],
            [
                'title' => 'Managing Partner & Founder',
                'bio' => 'Adv. Samuel Tambunan, S.Kom., S.H. adalah pendiri sekaligus Managing Partner Rumah Solution Law Firm (SLF). Memadukan latar belakang pendidikan ganda di bidang Teknologi Informasi dan Ilmu Hukum, beliau menghadirkan perspektif analitis yang tajam, strategis, dan adaptif terhadap dinamika hukum modern. Berkomitmen kuat pada integritas profesi dan kepuasan klien, beliau memimpin setiap pendampingan perkara dengan pendekatan holistik dan berorientasi pada solusi nyata.',
                'philosophy' => 'Hukum bukan sekadar pasal dan teks undang-undang, melainkan instrumen perlindungan hak asasi, keadilan, dan stabilitas masa depan klien yang harus diperjuangkan dengan keahlian serta etika tertinggi.',
                'education' => [
                    'Sarjana Hukum (S.H.) — Fakultas Hukum',
                    'Sarjana Komputer (S.Kom.) — Fakultas Ilmu Komputer',
                    'Pendidikan Khusus Profesi Advokat (PKPA)',
                    'Ujian Profesi Advokat (UPA) & Pengangkatan Berita Acara Sumpah (BAS) Pengadilan Tinggi',
                ],
                'experience' => [
                    'Founder & Managing Partner — Rumah Solution Law Firm (SLF)',
                    'Konsultan Hukum Perusahaan untuk berbagai korporasi nasional dan swasta',
                    'Advokat litigasi sengketa bisnis, perdata umum, ketenagakerjaan, dan tindak pidana',
                    'Spesialis perancangan dan audit kontrak komersial lintas industri',
                ],
                'expertise' => [
                    'Corporate & Commercial Law',
                    'Civil & Commercial Litigation',
                    'Property & Land Acquisition Law',
                    'Cyber Law & Digital Assets Legal Compliance',
                    'Legal Due Diligence & Contract Drafting',
                ],
                'image_url' => '/images/real/partner-samuel.jpg',
                'email' => 'samuel.tambunan@solutionlawfirm.com',
                'phone' => '+62 812-3456-7890',
                'linkedin' => 'https://linkedin.com/in/samuel-tambunan',
            ]
        );

        // 3. Practice Areas (8 categories with real stock photos)
        $practiceAreas = [
            [
                'number' => '01',
                'title' => 'Corporate & Business Law',
                'slug' => 'corporate-business-law',
                'description' => 'Pendampingan hukum komprehensif untuk entitas bisnis mulai dari pendirian badan usaha, kepatuhan regulasi, perizinan, restrukturisasi perusahaan, hingga aksi korporasi strategis.',
                'scope_items' => [
                    'Pendirian PT, CV, PMA & Perizinan Berusaha (OSS RBA)',
                    'Penyusunan Anggaran Dasar & Perubahan Pemegang Saham',
                    'Merger, Akuisisi, Konsolidasi, dan Restrukturisasi Bisnis',
                    'Audit Kepatuhan Hukum Korporasi (Legal Compliance)',
                    'Penyelesaian Sengketa Pemegang Saham & Kemitraan',
                ],
                'image_url' => '/images/real/practice-corporate.jpg',
                'order' => 1,
            ],
            [
                'number' => '02',
                'title' => 'Civil Law',
                'slug' => 'civil-law',
                'description' => 'Perlindungan hak-hak perdata klien atas kerugian materiil maupun immateriil, penyelesaian wanprestasi kontrak, perbuatan melawan hukum (PMH), dan klaim ganti rugi.',
                'scope_items' => [
                    'Penanganan Perkara Wanprestasi / Ingkar Janji Kontrak',
                    'Gugatan Perbuatan Melawan Hukum (PMH Pasal 1365 KUHPerdata)',
                    'Sengketa Hutang-Piutang dan Penagihan Piutang Macet',
                    'Eksekusi Jaminan Fidusia dan Hak Tanggungan',
                    'Mediasi dan Negosiasi Perdamaian Perdata',
                ],
                'image_url' => '/images/real/practice-civil.jpg',
                'order' => 2,
            ],
            [
                'number' => '03',
                'title' => 'Criminal Law',
                'slug' => 'criminal-law',
                'description' => 'Pendampingan dan pembelaan hukum tindak pidana umum maupun khusus (white-collar crime) di tingkat Kepolisian, Kejaksaan, hingga persidangan Pengadilan Negeri.',
                'scope_items' => [
                    'Pendampingan Saksi / Korban / Tersangka di Kepolisian (BAP)',
                    'Penanganan Perkara Pidana Bisnis, Penipuan & Penggelapan',
                    'Pembelaan Perkara Tindak Pidana Korupsi (Tipikor) & ITE',
                    'Penyusunan Memori Praperadilan, Eksepsi, Pleidoi, Banding & Kasasi',
                    'Pendampingan Penangguhan Penahanan & Restorative Justice',
                ],
                'image_url' => '/images/real/practice-criminal.jpg',
                'order' => 3,
            ],
            [
                'number' => '04',
                'title' => 'Family Law',
                'slug' => 'family-law',
                'description' => 'Pendekatan hukum yang bijaksana, empatik, dan menjaga kerahasiaan penuh dalam menangani persoalan perkawinan, hak asuh anak, harta bersama, dan sengketa waris.',
                'scope_items' => [
                    'Perceraian di Pengadilan Negeri & Pengadilan Agama',
                    'Gugatan Pembagian Harta Bersama (Gono-Gini)',
                    'Sengketa Hak Asuh Anak & Nafkah Anak/Istri',
                    'Sengketa Pembagian Waris & Fatwa Waris',
                    'Penyusunan Perjanjian Pranikah (Prenuptial) & Pascanikah',
                ],
                'image_url' => '/images/real/practice-family.jpg',
                'order' => 4,
            ],
            [
                'number' => '05',
                'title' => 'Property & Land Law',
                'slug' => 'property-land-law',
                'description' => 'Pemeriksaan yuridis (legal due diligence) transaksi tanah/properti, penyelesaian sengketa kepemilikan, sertifikasi ganda, tumpang tindih lahan, dan pengadaan tanah.',
                'scope_items' => [
                    'Pemeriksaan Legalitas Tanah (Due Diligence Sertifikat)',
                    'Sengketa Kepemilikan, Girik, SHM, SHGB & Hak Pakai',
                    'Gugatan Pembatalan Sertifikat di Pengadilan Tata Usaha Negara (PTUN)',
                    'Penyelesaian Sengketa Sewa-Menyewa & Pengosongan Lahan',
                    'Pendampingan Jual-Beli Tanah Skala Besar & Pembebasan Lahan',
                ],
                'image_url' => '/images/real/practice-property.jpg',
                'order' => 5,
            ],
            [
                'number' => '06',
                'title' => 'Litigation & Dispute Resolution',
                'slug' => 'litigation-dispute-resolution',
                'description' => 'Advokasi persidangan tangguh dan taktis di seluruh tingkatan peradilan di Indonesia serta forum alternatif penyelesaian sengketa arbitrase (BANI).',
                'scope_items' => [
                    'Litigasi Pengadilan Negeri, Tinggi, hingga Mahkamah Agung',
                    'Arbitrase Komersial Nasional & Internasional (BANI / SIAC)',
                    'Gugatan di Pengadilan Hubungan Industrial (PHI)',
                    'Sengketa di Pengadilan Tata Usaha Negara (PTUN)',
                    'Permohonan Kepailitan & PKPU di Pengadilan Niaga',
                ],
                'image_url' => '/images/real/practice-litigation.jpg',
                'order' => 6,
            ],
            [
                'number' => '07',
                'title' => 'Legal Consultation',
                'slug' => 'legal-consultation',
                'description' => 'Sesi konsultasi hukum mendalam dan terarah bersama Managing Partner untuk membedah posisi hukum, memetakan risiko, dan menentukan langkah strategis terbaik.',
                'scope_items' => [
                    'Konsultasi Hukum Perorangan & Korporasi (Online & Offline)',
                    'Legal Risk Assessment & Pemetaan Solusi Masalah',
                    'Analisis Pra-Litigasi & Rekomendasi Non-Litigasi',
                    'Retainer Legal Advisor untuk Usaha Kecil, Menengah & Startup',
                    'Konsultasi Tata Kelola Kepatuhan Regulasi Bisnis Modern',
                ],
                'image_url' => '/images/real/practice-consultation.jpg',
                'order' => 7,
            ],
            [
                'number' => '08',
                'title' => 'Legal Drafting & Legal Opinion',
                'slug' => 'legal-drafting-legal-opinion',
                'description' => 'Penyusunan dan review dokumen legal formal, kontrak bisnis bernilai tinggi, perjanjian kerja bersama, serta kajian pendapat hukum (Legal Opinion) berkekuatan analisis tajam.',
                'scope_items' => [
                    'Penyusunan Kontrak Bisnis, MoU, NDA, dan Perjanjian Kerjasama',
                    'Review & Revisi Klausul Kontrak (Risk Mitigation Review)',
                    'Penyusunan Pendapat Hukum Resmi (Legal Opinion / LO)',
                    'Penyusunan Surat Somasi (Teguran Hukum) & Tanggapan Somasi',
                    'Perancangan Standar Operasional Prosedur (SOP) & Peraturan Perusahaan',
                ],
                'image_url' => '/images/real/practice-drafting.jpg',
                'order' => 8,
            ],
        ];

        foreach ($practiceAreas as $area) {
            PracticeArea::updateOrCreate(
                ['slug' => $area['slug']],
                array_merge($area, ['is_active' => true])
            );
        }

        // 4. Articles
        $articles = [
            [
                'title' => 'Strategi Perlindungan Hukum Aset Perusahaan Menghadapi Sengketa Bisnis di Era Digital',
                'slug' => 'strategi-perlindungan-hukum-aset-perusahaan-era-digital',
                'category' => 'Corporate Law',
                'excerpt' => 'Kajian mendalam mengenai mitigasi risiko sengketa pemegang saham, perlindungan hak kekayaan intelektual korporasi, dan audit kepatuhan kontrak komersial.',
                'content' => '<p>Di tengah pesatnya akselerasi bisnis di Indonesia, entitas usaha dihadapkan pada ragam risiko hukum yang kian kompleks. Ketidakjelasan klausul dalam perjanjian kerjasama, kelalaian dalam pendaftaran hak cipta dan merek, serta pengabaian audit kepatuhan anggaran dasar kerap berujung pada gugatan bernilai miliaran rupiah.</p><p>Rumah Solution Law Firm (SLF) menekankan pentingnya langkah preventif melalui Legal Due Diligence berkala. Melalui penataan kontrak yang cermat dan perlindungan data aset digital, korporasi dapat menjalankan ekspansi dengan rasa aman tanpa bayang-bayang tuntutan perdata atau pembekuan aset.</p><p>Konsultasikan kebutuhan mitigasi hukum perusahaan Anda bersama Managing Partner kami untuk memastikan stabilitas dan keberlanjutan bisnis jangka panjang.</p>',
                'image_url' => '/images/real/practice-corporate.jpg',
                'read_time' => '5 min read',
                'published_at' => now()->subDays(2),
                'is_featured' => true,
            ],
            [
                'title' => 'Memahami Tahapan Litigasi Perdata: Dari Gugatan Wanprestasi Hingga Eksekusi Putusan',
                'slug' => 'memahami-tahapan-litigasi-perdata-wanprestasi-hingga-eksekusi',
                'category' => 'Litigation',
                'excerpt' => 'Panduan komprehensif bagi pelaku bisnis dan individu yang menghadapi wanprestasi mitra kerja serta langkah strategis menuntut hak di meja hijau.',
                'content' => '<p>Perkara wanprestasi sering kali bermula dari itikad tidak baik atau kegagalan mitra dalam memenuhi kewajiban kontraktual tepat waktu. Sebelum melayangkan gugatan ke Pengadilan Negeri, langkah formal pengiriman somasi (teguran hukum) merupakan tahapan krusial untuk membuktikan adanya kelalaian debitur.</p><p>Jika jalur musyawarah atau mediasi menemui jalan buntu, persidangan perdata menjadi arena perjuangan hak. SLF memandu klien mulai dari perumusan posita dan petitum yang terukur, pengumpulan alat bukti otentik, hingga pengawalan proses eksekusi pasca putusan berkekuatan hukum tetap (inkracht van gewijsde).</p>',
                'image_url' => '/images/real/practice-litigation.jpg',
                'read_time' => '6 min read',
                'published_at' => now()->subDays(5),
                'is_featured' => true,
            ],
            [
                'title' => 'Pentingnya Due Diligence Sebelum Transaksi Pembelian Properti dan Tanah di Jakarta',
                'slug' => 'pentingnya-due-diligence-transaksi-properti-tanah-jakarta',
                'category' => 'Property Law',
                'excerpt' => 'Menghindari jebakan mafia tanah dan sertifikat ganda melalui pemeriksaan riwayat yuridis serta keabsahan warkah di Kantor Pertanahan.',
                'content' => '<p>Investasi properti bernilai tinggi di wilayah Jabodetabek menuntut kehati-hatian luar biasa. Kasus tumpang tindih sertifikat, sengketa hak waris yang belum tuntas, dan perizinan zonasi yang bermasalah dapat menyebabkan pembeli kehilangan kepemilikan sah.</p><p>Pemeriksaan menyeluruh terhadap riwayat tanah, validasi status di Badan Pertanahan Nasional (BPN), serta verifikasi batas fisik menjadi pilar utama layanan pendampingan properti Rumah Solution Law Firm.</p>',
                'image_url' => '/images/real/practice-property.jpg',
                'read_time' => '4 min read',
                'published_at' => now()->subDays(8),
                'is_featured' => false,
            ],
            [
                'title' => 'Perlindungan Data Pribadi dan Aspek Hukum Siber bagi Pelaku Bisnis Digital',
                'slug' => 'perlindungan-data-pribadi-aspek-hukum-siber-bisnis-digital',
                'category' => 'Legal Education',
                'excerpt' => 'Panduan praktis kepatuhan terhadap UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) dan sanksi hukum yang mengintai korporasi yang abai.',
                'content' => '<p>Pengesahan Undang-Undang Perlindungan Data Pribadi (UU PDP) menandai babak baru penegakan privasi digital di Indonesia. Pelaku bisnis digital, platform fintech, e-commerce, hingga perusahaan rintisan kini diwajibkan menerapkan standar kepatuhan ketat terkait pengelolaan data pengguna.</p><p>Kewajiban pengendali data mencakup penunjukan Data Protection Officer (DPO), penyusunan Privacy Policy yang transparan, pembaruan formulir persetujuan (consent), serta enkripsi data yang memadai. Pelanggaran terhadap kepatuhan ini tidak hanya berisiko sanksi denda administratif hingga 2% dari pendapatan tahunan, namun juga sanksi pidana penjara bagi pengurus.</p><p>SLF menyediakan layanan audit kesiapan UU PDP guna memastikan infrastruktur operasional korporasi Anda selaras dengan standar regulasi nasional.</p>',
                'image_url' => '/images/real/practice-civil.jpg',
                'read_time' => '4 min read',
                'published_at' => now()->subDays(10),
                'is_featured' => false,
            ],
        ];

        foreach ($articles as $art) {
            Article::updateOrCreate(['slug' => $art['slug']], $art);
        }

        // 5. Testimonials
        $testimonials = [
            [
                'client_name' => 'Bambang Kusumo',
                'client_role' => 'Direktur Utama, PT Nusantara Multi Sarana',
                'service_category' => 'Corporate & Business Law',
                'quote' => 'Rumah Solution Law Firm memberikan pendampingan hukum korporasi yang sangat berharga dalam proses restrukturisasi modal dan akuisisi unit usaha kami. Analisis tajam Adv. Samuel Tambunan memberikan kepastian langkah dan perlindungan maksimal bagi investasi perusahaan.',
                'rating' => 5,
                'is_active' => true,
            ],
            [
                'client_name' => 'Ir. Hendra Gunawan',
                'client_role' => 'Pengembang Properti & Investor',
                'service_category' => 'Property & Land Law',
                'quote' => 'Penanganan sengketa tumpang tindih lahan yang kami percayakan kepada SLF diselesaikan dengan taktik litigasi yang sangat cermat dan terukur. Tim SLF senantiasa komunikatif, profesional, dan berdedikasi tinggi hingga putusan inkracht tercapai.',
                'rating' => 5,
                'is_active' => true,
            ],
            [
                'client_name' => 'Maria Jessica, S.E.',
                'client_role' => 'Managing Director, Logistik Global Mandiri',
                'service_category' => 'Litigation & Dispute Resolution',
                'quote' => 'Sengketa wanprestasi kontrak senilai miliaran rupiah berhasil diselesaikan lewat negosiasi dan mediasi strategis tanpa perlu berlarut-larut di pengadilan. SLF benar-benar menempatkan kepentingan klien sebagai prioritas utama sebagaimana semboyan mereka.',
                'rating' => 5,
                'is_active' => true,
            ],
        ];

        foreach ($testimonials as $t) {
            Testimonial::updateOrCreate(
                ['client_name' => $t['client_name']],
                $t
            );
        }

        // 6. Site Settings
        $settings = [
            'site_name' => 'Rumah Solution Law Firm',
            'firm_abbreviation' => 'SLF',
            'tagline' => 'Your Legal Matter, Our Priority.',
            'managing_partner' => 'Adv. Samuel Tambunan, S.Kom., S.H.',
            'office_address' => 'Rumah Solution Law Firm, MP6H+6R8, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417',
            'email' => 'contact@solutionlawfirm.com',
            'phone' => '+62 21 5088 9800',
            'whatsapp' => '+62 812 8888 9911',
            'whatsapp_display' => '0812-8888-9911',
            'office_hours' => 'Senin – Jumat: 08.30 – 17.30 WIB | Sabtu: Dengan Perjanjian',
            'hero_headline' => 'YOUR LEGAL MATTER, OUR PRIORITY.',
            'hero_subheadline' => 'Professional legal representation and strategic solutions to protect your rights, interests, and future.',
            'years_experience' => '10+',
            'cases_handled' => '350+',
            'practice_areas_count' => '08',
            'client_satisfaction' => '99%',
            'instagram' => 'https://instagram.com/solutionlawfirm',
            'linkedin' => 'https://linkedin.com/company/solutionlawfirm',
        ];

        foreach ($settings as $key => $val) {
            SiteSetting::set($key, $val);
        }
    }
}
