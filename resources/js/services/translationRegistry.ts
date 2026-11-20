/**
 * High-Prestige Bidirectional Legal Translation Registry
 * Rumah Solution Law Firm
 */

// Protected brand names & legal titles that must NEVER be altered or translated
export const PROTECTED_TERMS = [
    'Rumah Solution Law Firm',
    'Adv. Samuel Tambunan, S.Kom., S.H.',
    'Samuel Tambunan',
    'PERADI',
    'BAS',
    'S.H.',
    'S.Kom.',
    'PT',
    'CV',
    'PMA',
    'OSS RBA',
    'KUHPerdata',
    'KUHP',
    'BANI',
    'SIAC',
    'PTUN',
    'PHI',
    'PKPU',
    'BAP',
    'ID',
    'EN',
];

/**
 * English Source -> Indonesian Target Dictionary
 */
export const EN_TO_ID: Record<string, string> = {
    // Navigation
    'Home': 'Beranda',
    'About': 'Tentang Kami',
    'Practice Areas': 'Bidang Praktik',
    'All Practice Areas': 'Semua Bidang Praktik',
    'Blog': 'Artikel',
    'Blogs': 'Artikel & Wawasan',
    'Contact': 'Kontak',
    'Firm': 'Firma Hukum',
    'Team': 'Pimpinan Firma',
    'Resources': 'Informasi',
    'Legal': 'Aspek Legal',
    'Disclaimer': 'Pernyataan Penyangkalan',
    'Privacy Policy': 'Kebijakan Privasi',
    'Admin Portal': 'Portal Admin',

    // Hero Section
    'Trusted Legal Excellence': 'Keunggulan Hukum Terpercaya',
    'Your Legal Matter,': 'Perkara Hukum Anda,',
    'Our Priority': 'Prioritas Kami',
    'Professional legal representation and strategic solutions to protect your rights, interests, and future — every step of the way.':
        'Pendampingan hukum profesional dan solusi strategis untuk melindungi hak, kepentingan, dan masa depan Anda — di setiap langkah.',
    'Book a Free Consultation': 'Konsultasi Gratis',
    'Cases Resolved': 'Perkara Terselesaikan',
    'Talk to an Attorney Today': 'Konsultasi Langsung dengan Advokat',
    'Schedule via WhatsApp': 'Jadwalkan via WhatsApp',
    'Direct consultation with Adv. Samuel Tambunan, S.Kom., S.H.':
        'Konsultasi langsung dengan Adv. Samuel Tambunan, S.Kom., S.H.',

    // About Section
    'About Us': 'Tentang Kami',
    'Experienced Attorneys': 'Advokat Berpengalaman',
    'Who Put You First': 'Yang Mengutamakan Anda',
    'At Rumah Solution Law Firm (SLF), we combine deep legal expertise with a genuine commitment to our clients. Led by Adv. Samuel Tambunan, S.Kom., S.H., every case is handled with care, strategy, and the attention it deserves.':
        'Di Rumah Solution Law Firm (SLF), kami memadukan keahlian hukum mendalam dengan dedikasi nyata bagi klien. Dipimpin oleh Adv. Samuel Tambunan, S.Kom., S.H., setiap perkara ditangani dengan cermat, terukur, dan penuh integritas.',
    'Client-Centered Approach': 'Pendekatan Berorientasi Klien',
    'Your goals drive everything we do. We listen first, then build a legal strategy tailored to your unique situation and objectives.':
        'Tujuan Anda adalah prioritas kami. Kami mendengarkan secara menyeluruh, lalu menyusun strategi hukum yang disesuaikan dengan kebutuhan Anda.',
    'Proven Track Record & Integrity': 'Integritas & Rekam Jejak Teruji',
    'Led by Adv. Samuel Tambunan, S.Kom., S.H., our practice is built on unwavering professional integrity, ethical advocacy, and strategic precision.':
        'Dipimpin oleh Adv. Samuel Tambunan, S.Kom., S.H., praktik kami berlandaskan etika profesi yang kokoh dan presisi analisis yuridis.',
    'Clear & Honest Communication': 'Komunikasi Jelas & Transparan',
    'No confusing legal jargon, no surprises. We keep you informed at every stage so you always know where your case stands.':
        'Tanpa istilah hukum yang membingungkan. Kami memberikan pembaruan berkala di setiap tahapan sehingga Anda selalu memahami posisi perkara.',
    'Years of experience': 'Tahun Pengalaman',
    'Dedicated legal practice across corporate, civil, and criminal law.':
        'Praktik hukum berdedikasi di bidang korporasi, perdata, dan pidana.',
    'Cases resolved': 'Perkara Tertangani',
    'From corporate disputes and commercial contracts to litigation matters.':
        'Mulai dari sengketa korporasi, kontrak komersial, hingga litigasi peradilan.',
    'Client satisfaction': 'Tingkat Kepuasan',
    'Committed to achieving the best possible outcome for every client.':
        'Berkomitmen menghadirkan hasil terbaik bagi setiap klien.',
    'Trusted by Leading Companies & Institutions': 'Dipercaya oleh Berbagai Korporasi & Lembaga Terkemuka',

    // Practice Areas Titles
    'Corporate & Business Law': 'Hukum Korporasi & Bisnis',
    'Civil Law': 'Hukum Perdata',
    'Criminal Law': 'Hukum Pidana',
    'Family Law': 'Hukum Keluarga & Waris',
    'Property & Land Law': 'Hukum Properti & Pertanahan',
    'Litigation & Dispute Resolution': 'Litigasi & Penyelesaian Sengketa',
    'Legal Consultation': 'Konsultasi Hukum',
    'Legal Drafting & Legal Opinion': 'Perancangan Kontrak & Pendapat Hukum',

    // Practice Areas UI
    'Legal Solutions': 'Solusi Hukum Strategis',
    'Tailored To Your Needs': 'Sesuai Kebutuhan Anda',
    'At Rumah Solution Law Firm, we offer comprehensive legal representation across a wide range of practice areas. Whatever your legal challenge, our experienced attorneys are here to guide you every step of the way.':
        'Rumah Solution Law Firm menghadirkan pendampingan hukum terpadu di berbagai bidang perkara perdata, pidana, properti, hingga aksi korporasi strategis.',
    'Learn More': 'Pelajari Selengkapnya',
    'Practice Area': 'Bidang Praktik',
    'Legal Service Scope:': 'Cakupan Layanan Hukum:',
    'Close': 'Tutup',
    'Consult This Practice Area': 'Konsultasikan Layanan Ini',

    // Managing Partner Section
    'Firm Leadership': 'Pimpinan Firma',
    'Meet The Legal Professional': 'Profil Advokat Profesional',
    'Behind Your Case': 'Di Balik Perkara Anda',
    'Our firm brings together analytical precision and comprehensive legal experience across multiple practice areas. Personally committed to delivering the best possible outcome for every client.':
        'Menggabungkan ketajaman analisis hukum dan pemahaman teknologi modern untuk menghadirkan perlindungan terbaik bagi setiap klien.',
    'Certified Advocate PERADI • High Court Sworn (BAS)': 'Advokat Terdaftar PERADI • BAS Pengadilan Tinggi',
    'Corporate Law • Cyber Law • Litigation & Commercial Disputes':
        'Hukum Korporasi • Hukum Siber • Litigasi & Sengketa Komersial',
    'Executive Profile': 'Profil Eksekutif',
    'Education & Degrees': 'Pendidikan & Gelar',
    'Practice & Leadership': 'Praktik & Kepemimpinan',
    'Areas of Legal Expertise': 'Bidang Keahlian Hukum',
    'Consult Now': 'Konsultasi Sekarang',

    // Process Section
    'How It Works': 'Tahapan Kerja',
    'From First Call To Final Resolution': 'Dari Konsultasi Awal Hingga Resolusi Tuntas',
    "We've streamlined the legal process so you always know what to expect. Here's how we work with you, step by step, from day one.":
        'Alur penanganan perkara kami rancang secara terstruktur dan transparan agar Anda senantiasa merasa aman dan terlindungi.',
    'Book a Consultation': 'Jadwalkan Konsultasi',
    'Reach out to schedule your initial consultation. Tell us about your legal matter and we will listen carefully to understand your situation, needs, and goals.':
        'Hubungi kami untuk mengatur sesi konsultasi awal. Ceritakan pokok perkara Anda dan kami akan mendengarkan dengan saksama.',
    'Build Your Strategy': 'Penyusunan Strategi Hukum',
    'Our legal team reviews every detail and develops a clear, personalized legal strategy designed to achieve the best possible outcome for your case.':
        'Tim kami menganalisis fakta yuridis dan menyusun strategi hukum terarah yang paling menguntungkan bagi kepentingan Anda.',
    'We Fight for Your Resolution': 'Advokasi & Resolusi Perkara',
    'From negotiation and mediation to courtroom representation, we handle every legal step with dedication until your matter is resolved.':
        'Dari negosiasi, mediasi non-litigasi, hingga pembelaan di persidangan pengadilan, kami kawal perkara hingga tuntas.',

    // FAQ Section
    'FAQ': 'Tanya Jawab',
    'Answers To Your Most': 'Jawaban Atas Pertanyaan',
    'Common Questions': 'Yang Sering Diajukan',
    'We understand that navigating legal matters can feel overwhelming. Here are answers to the questions we hear most often — so you can feel confident before reaching out.':
        'Kami memahami bahwa menghadapi perkara hukum memerlukan kepastian. Berikut adalah jawaban atas pertanyaan yang paling sering diajukan klien.',

    // Testimonials Section
    'Client Stories': 'Testimoni Klien',
    'What Our Clients': 'Apa Kata Klien',
    'Say About Us': 'Tentang Layanan Kami',
    "Don't just take our word for it. Here's what real clients have to say about their experience working with the Rumah Solution Law Firm legal team.":
        'Bukti nyata komitmen dan dedikasi kami dalam mengawal perkara hukum klien hingga tuntas.',
    'Practice Areas Covered': 'Bidang Praktik Unggulan',
    'Years of Legal Experience': 'Tahun Pengalaman Hukum',
    'Initial Consultation': 'Konsultasi Awal',
    'Average Response Time': 'Waktu Respons Rata-Rata',
    'Cases Successfully Handled': 'Perkara Sukses Ditangani',

    // Articles Section
    'Our Blog': 'Artikel & Wawasan',
    'Legal Insights & Updates': 'Wawasan & Analisis Yuridis',
    'Stay informed with expert articles from the Rumah Solution Law Firm team. From practical legal tips to industry updates, our blog is your resource for navigating the legal landscape with confidence.':
        'Informasi hukum terkini dan analisis mendalam dari tim Rumah Solution Law Firm untuk membantu Anda memahami hak dan regulasi secara jelas.',
    'Read Full Article': 'Baca Artikel Lengkap',

    // Contact Section
    'Contact Us': 'Hubungi Kami',
    'Schedule Your': 'Jadwalkan Sesi',
    'Free Consultation': 'Konsultasi Hukum',
    'Have a legal question or ready to get started? Fill out the form below and a member of our legal team will get back to you within 24 hours.':
        'Punya pertanyaan hukum atau siap memulai penanganan perkara? Isi formulir di bawah ini dan tim hukum kami akan menghubungi Anda dalam waktu 24 jam.',
    'Open in Google Maps': 'Buka di Google Maps',
    'Full Name': 'Nama Lengkap',
    'Email Address': 'Alamat Email',
    'Phone Number': 'Nomor Telepon / WhatsApp',
    'Service': 'Pilihan Layanan',
    'Select a practice area': 'Pilih bidang layanan...',
    'Additional Notes': 'Catatan / Ringkasan Perkara',
    'Tell us about your legal goals, case background, or any questions you have...':
        'Jelaskan secara singkat kebutuhan hukum atau kronologi perkara Anda...',
    'Schedule Free Consultation': 'Kirim Permintaan Konsultasi',
    'Submitting...': 'Sedang Mengirim...',

    // Footer
    'Rumah Solution Law Firm (SLF) is a full-service law firm led by Adv. Samuel Tambunan, S.Kom., S.H., dedicated to protecting your rights and delivering exceptional legal outcomes — with integrity at every step.':
        'Kantor advokat dan konsultan hukum berdedikasi tinggi yang dipimpin oleh Adv. Samuel Tambunan, S.Kom., S.H. Memberikan pendampingan hukum strategis dan terpercaya.',
    'All rights reserved.': 'Hak Cipta Dilindungi.',
};

/**
 * Indonesian Source -> English Target Dictionary
 * Comprehensive coverage including all 40 Practice Area Scope Items,
 * Practice Descriptions, Articles, Testimonials, and Partner Credentials.
 */
export const ID_TO_EN: Record<string, string> = {
    // Navigation
    'Beranda': 'Home',
    'Tentang Kami': 'About Us',
    'Bidang Praktik': 'Practice Areas',
    'Semua Bidang Praktik': 'All Practice Areas',
    'Artikel': 'Blog',
    'Artikel & Wawasan': 'Our Blog',
    'Kontak': 'Contact',
    'Firma Hukum': 'Firm',
    'Pimpinan Firma': 'Firm Leadership',
    'Informasi': 'Resources',
    'Aspek Legal': 'Legal',
    'Pernyataan Penyangkalan': 'Disclaimer',
    'Kebijakan Privasi': 'Privacy Policy',
    'Portal Admin': 'Admin Portal',

    // Hero Section
    'Keunggulan Hukum Terpercaya': 'Trusted Legal Excellence',
    'Perkara Hukum Anda,': 'Your Legal Matter,',
    'Prioritas Kami': 'Our Priority',
    'Pendampingan hukum profesional dan solusi strategis untuk melindungi hak, kepentingan, dan masa depan Anda — di setiap langkah.':
        'Professional legal representation and strategic solutions to protect your rights, interests, and future — every step of the way.',
    'Konsultasi Gratis': 'Book a Free Consultation',
    'Perkara Terselesaikan': 'Cases Resolved',
    'Konsultasi Langsung dengan Advokat': 'Talk to an Attorney Today',
    'Jadwalkan via WhatsApp': 'Schedule via WhatsApp',
    'Konsultasi langsung dengan Adv. Samuel Tambunan, S.Kom., S.H.':
        'Direct consultation with Adv. Samuel Tambunan, S.Kom., S.H.',

    // About Section
    'Advokat Berpengalaman': 'Experienced Attorneys',
    'Yang Mengutamakan Anda': 'Who Put You First',
    'Di Rumah Solution Law Firm (SLF), kami memadukan keahlian hukum mendalam dengan dedikasi nyata bagi klien. Dipimpin oleh Adv. Samuel Tambunan, S.Kom., S.H., setiap perkara ditangani dengan cermat, terukur, dan penuh integritas.':
        'At Rumah Solution Law Firm (SLF), we combine deep legal expertise with a genuine commitment to our clients. Led by Adv. Samuel Tambunan, S.Kom., S.H., every case is handled with care, strategy, and the attention it deserves.',
    'Pendekatan Berorientasi Klien': 'Client-Centered Approach',
    'Tujuan Anda adalah prioritas kami. Kami mendengarkan secara menyeluruh, lalu menyusun strategi hukum yang disesuaikan dengan kebutuhan Anda.':
        'Your goals drive everything we do. We listen first, then build a legal strategy tailored to your unique situation and objectives.',
    'Integritas & Rekam Jejak Teruji': 'Proven Track Record & Integrity',
    'Dipimpin oleh Adv. Samuel Tambunan, S.Kom., S.H., praktik kami berlandaskan etika profesi yang kokoh dan presisi analisis yuridis.':
        'Led by Adv. Samuel Tambunan, S.Kom., S.H., our practice is built on unwavering professional integrity, ethical advocacy, and strategic precision.',
    'Komunikasi Jelas & Transparan': 'Clear & Honest Communication',
    'Tanpa istilah hukum yang membingungkan. Kami memberikan pembaruan berkala di setiap tahapan sehingga Anda selalu memahami posisi perkara.':
        'No confusing legal jargon, no surprises. We keep you informed at every stage so you always know where your case stands.',
    'Tahun Pengalaman': 'Years of experience',
    'Praktik hukum berdedikasi di bidang korporasi, perdata, dan pidana.':
        'Dedicated legal practice across corporate, civil, and criminal law.',
    'Perkara Tertangani': 'Cases resolved',
    'Mulai dari sengketa korporasi, kontrak komersial, hingga litigasi peradilan.':
        'From corporate disputes and commercial contracts to litigation matters.',
    'Tingkat Kepuasan': 'Client satisfaction',
    'Berkomitmen menghadirkan hasil terbaik bagi setiap klien.':
        'Committed to achieving the best possible outcome for every client.',
    'Dipercaya oleh Berbagai Korporasi & Lembaga Terkemuka': 'Trusted by Leading Companies & Institutions',

    // Practice Areas Titles
    'Hukum Korporasi & Bisnis': 'Corporate & Business Law',
    'Hukum Perdata': 'Civil Law',
    'Hukum Pidana': 'Criminal Law',
    'Hukum Keluarga & Waris': 'Family Law',
    'Hukum Properti & Pertanahan': 'Property & Land Law',
    'Litigasi & Penyelesaian Sengketa': 'Litigation & Dispute Resolution',
    'Konsultasi Hukum': 'Legal Consultation',
    'Perancangan Kontrak & Pendapat Hukum': 'Legal Drafting & Legal Opinion',

    // Practice Areas UI
    'Solusi Hukum Strategis': 'Legal Solutions',
    'Sesuai Kebutuhan Anda': 'Tailored To Your Needs',
    'Rumah Solution Law Firm menghadirkan pendampingan hukum terpadu di berbagai bidang perkara perdata, pidana, properti, hingga aksi korporasi strategis.':
        'At Rumah Solution Law Firm, we offer comprehensive legal representation across a wide range of practice areas. Whatever your legal challenge, our experienced attorneys are here to guide you every step of the way.',
    'Pelajari Selengkapnya': 'Learn More',
    'Cakupan Layanan Hukum:': 'Legal Service Scope:',
    'Tutup': 'Close',
    'Konsultasikan Layanan Ini': 'Consult This Practice Area',

    // 8 Practice Area Descriptions (Database)
    'Pendampingan hukum komprehensif untuk entitas bisnis mulai dari pendirian badan usaha, kepatuhan regulasi, perizinan, restrukturisasi perusahaan, hingga aksi korporasi strategis.':
        'Comprehensive legal counsel for corporate entities covering entity formation, regulatory compliance, licensing, corporate restructuring, and strategic business transactions.',
    'Perlindungan hak-hak perdata klien atas kerugian materiil maupun immateriil, penyelesaian wanprestasi kontrak, perbuatan melawan hukum (PMH), dan klaim ganti rugi.':
        'Protection of client civil rights against material and non-material damages, breach of contract resolution, unlawful act (tort) litigation, and damage claims.',
    'Pendampingan dan pembelaan hukum tindak pidana umum maupun khusus (white-collar crime) di tingkat Kepolisian, Kejaksaan, hingga persidangan Pengadilan Negeri.':
        'Legal defense and representation for general and white-collar criminal offenses across Police investigation, Prosecution, and District Court proceedings.',
    'Pendekatan hukum yang bijaksana, empatik, dan menjaga kerahasiaan penuh dalam menangani persoalan perkawinan, hak asuh anak, harta bersama, dan sengketa waris.':
        'Discreet, empathetic, and strictly confidential legal representation in marital dissolution, child custody, marital property division, and inheritance disputes.',
    'Pemeriksaan yuridis (legal due diligence) transaksi tanah/properti, penyelesaian sengketa kepemilikan, sertifikasi ganda, tumpang tindih lahan, dan pengadaan tanah.':
        'Comprehensive legal due diligence for property transactions, resolution of land ownership disputes, overlapping titles, and commercial land acquisitions.',
    'Advokasi persidangan tangguh dan taktis di seluruh tingkatan peradilan di Indonesia serta forum alternatif penyelesaian sengketa arbitrase (BANI).':
        'Tactical courtroom advocacy across all judicial court tiers in Indonesia and commercial dispute arbitration forums (BANI / SIAC).',
    'Sesi konsultasi hukum mendalam dan terarah bersama Managing Partner untuk membedah posisi hukum, memetakan risiko, dan menentukan langkah strategis terbaik.':
        'In-depth strategic legal consultation with the Managing Partner to assess legal standing, map out risks, and chart the most effective legal course.',
    'Penyusunan dan review dokumen legal formal, kontrak bisnis bernilai tinggi, perjanjian kerja bersama, serta kajian pendapat hukum (Legal Opinion) berkekuatan analisis tajam.':
        'Drafting and review of formal commercial contracts, high-value transaction agreements, and rigorous formal Legal Opinions (LO).',

    // 40 PRACTICE AREA SCOPE ITEMS (PILLS)
    // 01. Corporate & Business Law
    'Pendirian PT, CV, PMA & Perizinan Berusaha (OSS RBA)':
        'Establishment of PT, CV, Foreign Investment (PMA) & Business Licensing (OSS RBA)',
    'Penyusunan Anggaran Dasar & Perubahan Pemegang Saham':
        'Drafting Articles of Association & Shareholder Restructuring',
    'Merger, Akuisisi, Konsolidasi, dan Restrukturisasi Bisnis':
        'Mergers, Acquisitions, Consolidations & Corporate Restructuring',
    'Audit Kepatuhan Hukum Korporasi (Legal Compliance)':
        'Corporate Legal Compliance Audit',
    'Penyelesaian Sengketa Pemegang Saham & Kemitraan':
        'Shareholder & Commercial Partnership Dispute Resolution',

    // 02. Civil Law
    'Penanganan Perkara Wanprestasi / Ingkar Janji Kontrak':
        'Breach of Contract & Default Dispute Representation',
    'Gugatan Perbuatan Melawan Hukum (PMH Pasal 1365 KUHPerdata)':
        'Unlawful Act / Tort Claims (Article 1365 Civil Code)',
    'Sengketa Hutang-Piutang dan Penagihan Piutang Macet':
        'Debt Settlement & Non-Performing Loan Recovery',
    'Eksekusi Jaminan Fidusia dan Hak Tanggungan':
        'Execution of Fiduciary Guarantees & Mortgage Rights',
    'Mediasi dan Negosiasi Perdamaian Perdata':
        'Civil Mediation & Out-of-Court Settlement Negotiation',

    // 03. Criminal Law
    'Pendampingan Saksi / Korban / Tersangka di Kepolisian (BAP)':
        'Legal Counsel for Witnesses, Victims & Suspects at Police (BAP)',
    'Penanganan Perkara Pidana Bisnis, Penipuan & Penggelapan':
        'Business Crime, Fraud & Embezzlement Defense',
    'Pembelaan Perkara Tindak Pidana Korupsi (Tipikor) & ITE':
        'Anti-Corruption (Tipikor) & Cyber Law / Electronic Information Defense',
    'Penyusunan Memori Praperadilan, Eksepsi, Pleidoi, Banding & Kasasi':
        'Pre-Trial Petitions, Demurrers, Pleas, Appeals & Supreme Court Cassation',
    'Pendampingan Penangguhan Penahanan & Restorative Justice':
        'Bail Application, Suspension of Detention & Restorative Justice',

    // 04. Family Law
    'Perceraian di Pengadilan Negeri & Pengadilan Agama':
        'Divorce Proceedings at District Court & Religious Court',
    'Gugatan Pembagian Harta Bersama (Gono-Gini)':
        'Marital Asset & Community Property Division (Gono-Gini)',
    'Sengketa Hak Asuh Anak & Nafkah Anak/Istri':
        'Child Custody, Child Support & Alimony Disputes',
    'Sengketa Pembagian Waris & Fatwa Waris':
        'Inheritance Distribution & Formal Estate Determination',
    'Penyusunan Perjanjian Pranikah (Prenuptial) & Pascanikah':
        'Prenuptial & Postnuptial Agreement Drafting',

    // 05. Property & Land Law
    'Pemeriksaan Legalitas Tanah (Due Diligence Sertifikat)':
        'Land Title Legal Due Diligence & Certificate Validation',
    'Sengketa Kepemilikan, Girik, SHM, SHGB & Hak Pakai':
        'Land Title Ownership Disputes (Girik, SHM, SHGB & Right to Use)',
    'Gugatan Pembatalan Sertifikat di Pengadilan Tata Usaha Negara (PTUN)':
        'Certificate Revocation Lawsuits at Administrative Court (PTUN)',
    'Penyelesaian Sengketa Sewa-Menyewa & Pengosongan Lahan':
        'Lease Agreement Disputes & Land Eviction Representation',
    'Pendampingan Jual-Beli Tanah Skala Besar & Pembebasan Lahan':
        'Large-Scale Land Acquisition & Commercial Real Estate Transactions',

    // 06. Litigation & Dispute Resolution
    'Litigasi Pengadilan Negeri, Tinggi, hingga Mahkamah Agung':
        'Litigation at District Court, High Court & Supreme Court',
    'Arbitrase Komersial Nasional & Internasional (BANI / SIAC)':
        'National & International Commercial Arbitration (BANI / SIAC)',
    'Gugatan di Pengadilan Hubungan Industrial (PHI)':
        'Industrial Relations Court (PHI) Labor Lawsuits',
    'Sengketa di Pengadilan Tata Usaha Negara (PTUN)':
        'State Administrative Court (PTUN) Dispute Resolution',
    'Permohonan Kepailitan & PKPU di Pengadilan Niaga':
        'Bankruptcy Petitions & Suspension of Debt Payments (PKPU) at Commercial Court',

    // 07. Legal Consultation
    'Konsultasi Hukum Perorangan & Korporasi (Online & Offline)':
        'Individual & Corporate Legal Consultation (Online & In-Person)',
    'Legal Risk Assessment & Pemetaan Solusi Masalah':
        'Legal Risk Assessment & Strategic Problem Mapping',
    'Analisis Pra-Litigasi & Rekomendasi Non-Litigasi':
        'Pre-Litigation Analysis & Alternative Dispute Resolution Strategy',
    'Retainer Legal Advisor untuk Usaha Kecil, Menengah & Startup':
        'Retained Legal Counsel for SMEs & High-Growth Startups',
    'Konsultasi Tata Kelola Kepatuhan Regulasi Bisnis Modern':
        'Modern Business Regulatory Compliance & Governance Advisory',

    // 08. Legal Drafting & Legal Opinion
    'Penyusunan Kontrak Bisnis, MoU, NDA, dan Perjanjian Kerjasama':
        'Commercial Contracts, MoU, NDA & Partnership Agreement Drafting',
    'Review & Revisi Klausul Kontrak (Risk Mitigation Review)':
        'Contract Clause Review & Risk Mitigation Assessment',
    'Penyusunan Pendapat Hukum Resmi (Legal Opinion / LO)':
        'Formal Legal Opinion (LO) Drafting',
    'Penyusunan Surat Somasi (Teguran Hukum) & Tanggapan Somasi':
        'Legal Notice (Somasi) Drafting & Formal Response Representation',
    'Perancangan Standar Operasional Prosedur (SOP) & Peraturan Perusahaan':
        'Corporate SOP & Company Regulation (Peraturan Perusahaan) Drafting',

    // Managing Partner Section
    'Profil Advokat Profesional': 'Meet The Legal Professional',
    'Di Balik Perkara Anda': 'Behind Your Case',
    'Menggabungkan ketajaman analisis hukum dan pemahaman teknologi modern untuk menghadirkan perlindungan terbaik bagi setiap klien.':
        'Our firm brings together analytical precision and comprehensive legal experience across multiple practice areas. Personally committed to delivering the best possible outcome for every client.',
    'Hukum Korporasi • Hukum Siber • Litigasi & Sengketa Komersial':
        'Corporate Law • Cyber Law • Litigation & Commercial Disputes',
    'Profil Eksekutif': 'Executive Profile',
    'Pendidikan & Gelar': 'Education & Degrees',
    'Praktik & Kepemimpinan': 'Practice & Leadership',
    'Bidang Keahlian Hukum': 'Areas of Legal Expertise',
    'Konsultasi Sekarang': 'Consult Now',

    // Partner Profile Details
    'Adv. Samuel Tambunan, S.Kom., S.H. adalah pendiri sekaligus Managing Partner Rumah Solution Law Firm (SLF). Memadukan latar belakang pendidikan ganda di bidang Teknologi Informasi dan Ilmu Hukum, beliau menghadirkan perspektif analitis yang tajam, strategis, dan adaptif terhadap dinamika hukum modern. Berkomitmen kuat pada integritas profesi dan kepuasan klien, beliau memimpin setiap pendampingan perkara dengan pendekatan holistik dan berorientasi pada solusi nyata.':
        'Adv. Samuel Tambunan, S.Kom., S.H. is the Founder & Managing Partner of Rumah Solution Law Firm (SLF). Combining dual degrees in Computer Science and Law, he brings a sharp analytical perspective, strategic foresight, and deep adaptability to modern legal challenges. With unwavering professional integrity, he leads each case with a holistic, outcome-driven methodology.',
    'Hukum bukan sekadar pasal dan teks undang-undang, melainkan instrumen perlindungan hak asasi, keadilan, dan stabilitas masa depan klien yang harus diperjuangkan dengan keahlian serta etika tertinggi.':
        'The law is not merely statutory text, but a vital instrument to safeguard human rights, justice, and client future stability, upheld with the highest caliber of skill and ethical conviction.',
    'Sarjana Hukum (S.H.) — Fakultas Hukum':
        'Bachelor of Laws (S.H.) — Faculty of Law',
    'Sarjana Komputer (S.Kom.) — Fakultas Ilmu Komputer':
        'Bachelor of Computer Science (S.Kom.) — Faculty of Computer Science',
    'Pendidikan Khusus Profesi Advokat (PKPA)':
        'Special Advocate Professional Education (PKPA)',
    'Ujian Profesi Advokat (UPA) & Pengangkatan Berita Acara Sumpah (BAS) Pengadilan Tinggi':
        'Bar Examination (UPA) & Sworn Advocate of the High Court (BAS)',
    'Founder & Managing Partner — Rumah Solution Law Firm (SLF)':
        'Founder & Managing Partner — Rumah Solution Law Firm (SLF)',
    'Konsultan Hukum Perusahaan untuk berbagai korporasi nasional dan swasta':
        'Corporate Legal Counsel for major national and private corporations',
    'Advokat litigasi sengketa bisnis, perdata umum, ketenagakerjaan, dan tindak pidana':
        'Litigation Advocate for commercial, civil, employment, and criminal defense disputes',
    'Spesialis perancangan dan audit kontrak komersial lintas industri':
        'Specialist in commercial contract drafting and cross-industry legal audits',

    // Process Section
    'Tahapan Kerja': 'How It Works',
    'Dari Konsultasi Awal Hingga Resolusi Tuntas': 'From First Call To Final Resolution',
    'Alur penanganan perkara kami rancang secara terstruktur dan transparan agar Anda senantiasa merasa aman dan terlindungi.':
        "We've streamlined the legal process so you always know what to expect. Here's how we work with you, step by step, from day one.",
    'Jadwalkan Konsultasi': 'Book a Consultation',
    'Hubungi kami untuk mengatur sesi konsultasi awal. Ceritakan pokok perkara Anda dan kami akan mendengarkan dengan saksama.':
        'Reach out to schedule your initial consultation. Tell us about your legal matter and we will listen carefully to understand your situation, needs, and goals.',
    'Penyusunan Strategi Hukum': 'Build Your Strategy',
    'Tim kami menganalisis fakta yuridis dan menyusun strategi hukum terarah yang paling menguntungkan bagi kepentingan Anda.':
        'Our legal team reviews every detail and develops a clear, personalized legal strategy designed to achieve the best possible outcome for your case.',
    'Advokasi & Resolusi Perkara': 'We Fight for Your Resolution',
    'Dari negosiasi, mediasi non-litigasi, hingga pembelaan di persidangan pengadilan, kami kawal perkara hingga tuntas.':
        'From negotiation and mediation to courtroom representation, we handle every legal step with dedication until your matter is resolved.',

    // FAQ Section
    'Tanya Jawab': 'FAQ',
    'Jawaban Atas Pertanyaan': 'Answers To Your Most',
    'Yang Sering Diajukan': 'Common Questions',
    'Kami memahami bahwa menghadapi perkara hukum memerlukan kepastian. Berikut adalah jawaban atas pertanyaan yang paling sering diajukan klien.':
        'We understand that navigating legal matters can feel overwhelming. Here are answers to the questions we hear most often — so you can feel confident before reaching out.',
    'Kapan saya membutuhkan bantuan pengacara?':
        'When should I seek legal counsel?',
    'Jika Anda menghadapi potensi sengketa hukum, menerima somasi atau panggilan instansi berwenang, maupun sedang merencanakan transaksi bisnis atau properti bernilai penting, sangat disarankan berkonsultasi sejak awal. Konsultasi awal membantu memetakan posisi hukum Anda dan mencegah risiko kerugian yang lebih besar.':
        'If you are facing potential legal disputes, received a legal notice or formal summons, or are planning significant corporate or real estate transactions, early consultation is strongly recommended to safeguard your legal standing and prevent liabilities.',
    'Bagaimana cara melakukan konsultasi di Rumah Solution Law Firm?':
        'How do I schedule a consultation with Rumah Solution Law Firm?',
    'Anda dapat mengisi formulir penjadwalan konsultasi di bawah ini atau menghubungi nomor telepon dan WhatsApp resmi kami. Tim kami akan mengatur jadwal sesi konsultasi langsung dengan Adv. Samuel Tambunan, S.Kom., S.H. baik secara tatap muka di kantor maupun daring.':
        'You can submit the consultation booking form below or contact our official WhatsApp/phone line. Our team will arrange a direct consultation with Adv. Samuel Tambunan, S.Kom., S.H., either in-person at our office or via online conference.',
    'Apa saja dokumen yang perlu disiapkan untuk pertemuan pertama?':
        'What documents should I prepare for the first meeting?',
    'Bawa dokumen apa pun yang berkaitan dengan perkara Anda — seperti kontrak, perjanjian, surat menyurat, email, bukti transaksi, laporan kepolisian, atau dokumen kepemilikan. Jika Anda belum yakin, tidak perlu khawatir; kami akan memandu Anda saat sesi konsultasi.':
        'Bring any documents relevant to your legal matter — such as contracts, correspondence, agreements, payment records, or police reports. If you are unsure, our team will guide you during the initial intake.',
    'Bagaimana proses penanganan perkara berlangsung?':
        'How does the legal handling process work?',
    'Setiap perkara dimulai dari penelaahan fakta dan bukti secara menyeluruh (Legal Assessment), dilanjutkan penyusunan strategi hukum yang disepakati bersama. Kami memberikan pembaruan berkala di setiap tahapan, baik melalui jalur negosiasi non-litigasi maupun pendampingan penuh di pengadilan.':
        'Every case begins with an in-depth legal assessment and factual analysis, followed by an agreed strategic roadmap. We provide structured milestone updates across negotiations, alternative dispute resolution, or courtroom litigation.',
    'Apakah saya akan ditangani langsung oleh advokat berpengalaman?':
        'Will my matter be handled directly by senior counsel?',
    'Ya. Setiap perkara di Rumah Solution Law Firm ditangani dan diawasi secara langsung oleh Managing Partner kami, Adv. Samuel Tambunan, S.Kom., S.H., untuk memastikan kualitas analisis yuridis dan perlindungan hak klien yang maksimal.':
        'Yes. Every client case at Rumah Solution Law Firm is directly supervised and handled by our Managing Partner, Adv. Samuel Tambunan, S.Kom., S.H., ensuring rigorous legal quality and dedicated advocacy.',
    'Bagaimana biaya layanan hukum ditentukan?':
        'How are legal fees structured?',
    'Biaya layanan hukum dijelaskan secara transparan di awal berdasarkan tingkat kompleksitas perkara, ruang lingkup pekerjaan, dan estimasi waktu penanganan — tanpa biaya tersembunyi.':
        'We operate with full fee transparency. Pricing and retainers are structured in advance based on matter complexity, scope of representation, and milestones — with no hidden costs.',

    // Testimonials
    'Testimoni Klien': 'Client Stories',
    'Apa Kata Klien': 'What Our Clients',
    'Tentang Layanan Kami': 'Say About Us',
    'Bukti nyata komitmen dan dedikasi kami dalam mengawal perkara hukum klien hingga tuntas.':
        "Don't just take our word for it. Here's what real clients have to say about their experience working with the Rumah Solution Law Firm legal team.",
    'Bidang Praktik Unggulan': 'Practice Areas Covered',
    'Tahun Pengalaman Hukum': 'Years of Legal Experience',
    'Tingkat Kepuasan Klien': 'Client Satisfaction',
    'Perkara Sukses Ditangani': 'Cases Successfully Handled',
    'Direktur Utama, PT Nusantara Multi Sarana':
        'President Director, PT Nusantara Multi Sarana',
    'Pengembang Properti & Investor':
        'Property Developer & Investor',
    'Managing Director, Logistik Global Mandiri':
        'Managing Director, Logistik Global Mandiri',
    'Rumah Solution Law Firm memberikan pendampingan hukum korporasi yang sangat berharga dalam proses restrukturisasi modal dan akuisisi unit usaha kami. Analisis tajam Adv. Samuel Tambunan memberikan kepastian langkah dan perlindungan maksimal bagi investasi perusahaan.':
        'Rumah Solution Law Firm provided invaluable corporate legal counsel during our capital restructuring and business unit acquisition. The sharp analysis of Adv. Samuel Tambunan provided clarity, strategic confidence, and maximum protection for our corporate investments.',
    'Penanganan sengketa tumpang tindih lahan yang kami percayakan kepada SLF diselesaikan dengan taktik litigasi yang sangat cermat dan terukur. Tim SLF senantiasa komunikatif, profesional, dan berdedikasi tinggi hingga putusan inkracht tercapai.':
        'The land title dispute entrusted to SLF was resolved with exceptional litigation tactics and tactical precision. The SLF team was consistently communicative, highly professional, and dedicated until a final and binding (inkracht) court judgment was achieved.',
    'Sengketa wanprestasi kontrak senilai miliaran rupiah berhasil diselesaikan lewat negosiasi dan mediasi strategis tanpa perlu berlarut-larut di pengadilan. SLF benar-benar menempatkan kepentingan klien sebagai prioritas utama sebagaimana semboyan mereka.':
        'A multi-billion rupiah contractual breach dispute was successfully resolved through strategic negotiation and mediation without prolonged courtroom battles. SLF truly puts client interests as their foremost priority, living up to their motto.',

    // Articles
    'Wawasan & Analisis Yuridis': 'Legal Insights & Updates',
    'Informasi hukum terkini dan analisis mendalam dari tim Rumah Solution Law Firm untuk membantu Anda memahami hak dan regulasi secara jelas.':
        'Stay informed with expert articles from the Rumah Solution Law Firm team. From practical legal tips to industry updates, our blog is your resource for navigating the legal landscape with confidence.',
    'Baca Artikel Lengkap': 'Read Full Article',
    'Tutup Artikel': 'Close Article',
    'Strategi Perlindungan Hukum Aset Perusahaan Menghadapi Sengketa Bisnis di Era Digital':
        'Legal Asset Protection Strategies for Corporate Entities Facing Digital-Era Business Disputes',
    'Kajian mendalam mengenai mitigasi risiko sengketa pemegang saham, perlindungan hak kekayaan intelektual korporasi, dan audit kepatuhan kontrak komersial.':
        'In-depth analysis of shareholder dispute risk mitigation, corporate intellectual property protection, and commercial contract compliance audits.',
    'Memahami Tahapan Litigasi Perdata: Dari Gugatan Wanprestasi Hingga Eksekusi Putusan':
        'Understanding Civil Litigation Stages: From Breach of Contract Lawsuits to Verdict Execution',
    'Panduan komprehensif bagi pelaku bisnis dan individu yang menghadapi wanprestasi mitra kerja serta langkah strategis menuntut hak di meja hijau.':
        'Comprehensive guide for businesses and individuals facing partner contractual default and strategic litigation steps in court.',
    'Pentingnya Due Diligence Sebelum Transaksi Pembelian Properti dan Tanah di Jakarta':
        'The Importance of Legal Due Diligence Before Real Estate and Land Acquisitions in Jakarta',
    'Menghindari jebakan mafia tanah dan sertifikat ganda melalui pemeriksaan riwayat yuridis serta keabsahan warkah di Kantor Pertanahan.':
        'Avoiding land mafia traps and overlapping titles through rigorous historical examination and title deed validation at the Land Office.',
    'Perlindungan Data Pribadi dan Aspek Hukum Siber bagi Pelaku Bisnis Digital':
        'Personal Data Protection and Cyber Law Aspects for Digital Business Operators',
    'Kajian praktis kepatuhan terhadap UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) dan sanksi hukum yang mengintai korporasi yang abai.':
        'Practical compliance roadmap under Personal Data Protection Law (UU PDP) and statutory liabilities facing non-compliant corporations.',
    'Panduan praktis kepatuhan terhadap UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) dan sanksi hukum yang mengintai korporasi yang abai.':
        'Practical compliance roadmap under Personal Data Protection Law (UU PDP) and statutory liabilities facing non-compliant corporations.',

    // Contact Section
    'Hubungi Kami': 'Contact Us',
    'Jadwalkan Sesi': 'Schedule Your',
    'Punya pertanyaan hukum atau siap memulai penanganan perkara? Isi formulir di bawah ini dan tim hukum kami akan menghubungi Anda dalam waktu 24 jam.':
        'Have a legal question or ready to get started? Fill out the form below and a member of our legal team will get back to you within 24 hours.',
    'Buka di Google Maps': 'Open in Google Maps',
    'Nama Lengkap': 'Full Name',
    'Alamat Email': 'Email Address',
    'Nomor Telepon / WhatsApp': 'Phone Number',
    'Pilihan Layanan': 'Service',
    'Pilih bidang layanan...': 'Select a practice area',
    'Catatan / Ringkasan Perkara': 'Additional Notes',
    'Jelaskan secara singkat kebutuhan hukum atau kronologi perkara Anda...':
        'Tell us about your legal goals, case background, or any questions you have...',
    'Kirim Permintaan Konsultasi': 'Schedule Free Consultation',
    'Sedang Mengirim...': 'Submitting...',

    // Footer
    'Kantor advokat dan konsultan hukum berdedikasi tinggi yang dipimpin oleh Adv. Samuel Tambunan, S.Kom., S.H. Memberikan pendampingan hukum strategis dan terpercaya.':
        'Rumah Solution Law Firm (SLF) is a full-service law firm led by Adv. Samuel Tambunan, S.Kom., S.H., dedicated to protecting your rights and delivering exceptional legal outcomes — with integrity at every step.',
    'Hak Cipta Dilindungi.': 'All rights reserved.',
    'Senin – Jumat: 08.30 – 17.30 WIB | Sabtu: Dengan Perjanjian':
        'Monday – Friday: 08:30 – 17:30 WIB | Saturday: By Appointment',
};
