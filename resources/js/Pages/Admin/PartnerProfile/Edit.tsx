import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { UserCheck, Save, Image, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PartnerProfile } from '@/types';

interface EditPartnerProfileProps {
    partner: PartnerProfile;
}

export default function Edit({ partner }: EditPartnerProfileProps) {
    const [name, setName] = useState(partner.name || 'Adv. Samuel Tambunan, S.Kom., S.H.');
    const [title, setTitle] = useState(partner.title || 'Managing Partner & Founder');
    const [bio, setBio] = useState(partner.bio || '');
    const [philosophy, setPhilosophy] = useState(partner.philosophy || '');
    const [educationText, setEducationText] = useState((partner.education || []).join('\n'));
    const [experienceText, setExperienceText] = useState((partner.experience || []).join('\n'));
    const [expertiseText, setExpertiseText] = useState((partner.expertise || []).join('\n'));
    const [image_url, setImageUrl] = useState(partner.image_url || '');
    const [email, setEmail] = useState(partner.email || '');
    const [phone, setPhone] = useState(partner.phone || '');
    const [linkedin, setLinkedin] = useState(partner.linkedin || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const education = educationText
            .split('\n')
            .map((s) => s.trim())
            .filter((s) => s.length > 0);

        const experience = experienceText
            .split('\n')
            .map((s) => s.trim())
            .filter((s) => s.length > 0);

        const expertise = expertiseText
            .split('\n')
            .map((s) => s.trim())
            .filter((s) => s.length > 0);

        router.put('/admin/partner-profile', {
            name,
            title,
            bio,
            philosophy,
            education,
            experience,
            expertise,
            image_url,
            email,
            phone,
            linkedin,
        });
    };

    return (
        <AdminLayout title="Kelola Profil Managing Partner">
            <Head title="Managing Partner Profile — Admin Rumah Solution Law Firm" />

            <div className="bg-white rounded-sm border border-[#E7E8E5] shadow-xs p-6 md:p-8 max-w-4xl">
                <div className="flex items-center gap-3 pb-6 border-b border-[#E7E8E5] mb-6">
                    <div className="w-10 h-10 rounded-sm bg-[#172B3A] text-white flex items-center justify-center font-serif text-lg font-bold">
                        ST
                    </div>
                    <div>
                        <h2 className="font-serif text-lg font-bold text-[#172B3A]">
                            Profil Pimpinan Firma: {partner.name}
                        </h2>
                        <p className="text-xs text-[#777D82]">
                            Pastikan data riwayat pendidikan, sertifikasi advokat, dan pengalaman sesuai fakta resmi
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Title */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                Nama Lengkap & Gelar Akademik *
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                Jabatan Resmi *
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                            URL Foto Portrait Resmi
                        </label>
                        <input
                            type="url"
                            value={image_url}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                        />
                    </div>

                    {/* Biography */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                            Biografi Eksekutif *
                        </label>
                        <textarea
                            rows={4}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                            className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] leading-relaxed focus:border-[#B89B69] focus:outline-none"
                        />
                    </div>

                    {/* Philosophy */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                            Filosofi Hukum (Quote)
                        </label>
                        <textarea
                            rows={2}
                            value={philosophy}
                            onChange={(e) => setPhilosophy(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] leading-relaxed focus:border-[#B89B69] focus:outline-none"
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                            Pendidikan & Sertifikasi Advokat (Satu baris per entri)
                        </label>
                        <textarea
                            rows={4}
                            value={educationText}
                            onChange={(e) => setEducationText(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] font-mono leading-relaxed focus:border-[#B89B69] focus:outline-none"
                        />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                            Pengalaman Profesional (Satu baris per entri)
                        </label>
                        <textarea
                            rows={4}
                            value={experienceText}
                            onChange={(e) => setExperienceText(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] font-mono leading-relaxed focus:border-[#B89B69] focus:outline-none"
                        />
                    </div>

                    {/* Expertise */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                            Keahlian Hukum Utama (Satu baris per bidang keahlian)
                        </label>
                        <textarea
                            rows={4}
                            value={expertiseText}
                            onChange={(e) => setExpertiseText(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] font-mono leading-relaxed focus:border-[#B89B69] focus:outline-none"
                        />
                    </div>

                    {/* Contact Channels */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#E7E8E5]">
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                Email Advokat
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                Nomor Telepon / WA
                            </label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                LinkedIn URL
                            </label>
                            <input
                                type="url"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                className="w-full px-3 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-[#172B3A] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-sm hover:bg-[#B89B69] transition-colors"
                        >
                            <Save className="w-4 h-4" />
                            <span>Simpan Profil Partner</span>
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
