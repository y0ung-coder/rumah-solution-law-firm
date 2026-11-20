import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { Settings, Save, Phone, MapPin, Globe, Award } from 'lucide-react';
import { SiteSettings } from '@/types';

interface EditSettingsProps {
    settings: SiteSettings;
}

export default function Edit({ settings }: EditSettingsProps) {
    const [formData, setFormData] = useState<Record<string, string>>({
        site_name: settings.site_name || 'Rumah Solution Law Firm',
        firm_abbreviation: settings.firm_abbreviation || 'SLF',
        tagline: settings.tagline || 'Your Legal Matter, Our Priority.',
        managing_partner: settings.managing_partner || 'Adv. Samuel Tambunan, S.Kom., S.H.',
        office_address: settings.office_address || '',
        email: settings.email || '',
        phone: settings.phone || '',
        whatsapp: settings.whatsapp || '',
        whatsapp_display: settings.whatsapp_display || '',
        office_hours: settings.office_hours || '',
        hero_headline: settings.hero_headline || 'YOUR LEGAL MATTER, OUR PRIORITY.',
        hero_subheadline: settings.hero_subheadline || '',
        years_experience: settings.years_experience || '10+',
        cases_handled: settings.cases_handled || '350+',
        practice_areas_count: settings.practice_areas_count || '08',
        client_satisfaction: settings.client_satisfaction || '99%',
        instagram: settings.instagram || '',
        linkedin: settings.linkedin || '',
    });

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/admin/settings', formData);
    };

    return (
        <AdminLayout title="Konfigurasi & Pengaturan Website">
            <Head title="Website Settings — Admin Rumah Solution Law Firm" />

            <div className="bg-white rounded-sm border border-[#E7E8E5] shadow-xs p-6 md:p-8 max-w-4xl">
                <div className="flex items-center gap-3 pb-6 border-b border-[#E7E8E5] mb-6">
                    <div className="w-10 h-10 rounded-sm bg-[#172B3A] text-white flex items-center justify-center font-serif text-lg font-bold">
                        <Settings className="w-5 h-5 text-[#B89B69]" />
                    </div>
                    <div>
                        <h2 className="font-serif text-lg font-bold text-[#172B3A]">
                            Pengaturan Umum Rumah Solution Law Firm
                        </h2>
                        <p className="text-xs text-[#777D82]">
                            Kelola identitas, alamat kantor SCBD, saluran kontak, dan metrik statistik tanpa mengubah source code
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Section 1: Identitas Firma */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-[#B89B69] mb-4 pb-2 border-b border-[#E7E8E5]">
                            1. Identitas & Brand
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Nama Firma Hukum
                                </label>
                                <input
                                    type="text"
                                    value={formData.site_name}
                                    onChange={(e) => handleChange('site_name', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Singkatan Resmi
                                </label>
                                <input
                                    type="text"
                                    value={formData.firm_abbreviation}
                                    onChange={(e) => handleChange('firm_abbreviation', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Tagline Resmi
                                </label>
                                <input
                                    type="text"
                                    value={formData.tagline}
                                    onChange={(e) => handleChange('tagline', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Headline & Hero */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-[#B89B69] mb-4 pb-2 border-b border-[#E7E8E5]">
                            2. Teks Hero Section
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Headline Utama Hero
                                </label>
                                <input
                                    type="text"
                                    value={formData.hero_headline}
                                    onChange={(e) => handleChange('hero_headline', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Subheadline Hero
                                </label>
                                <textarea
                                    rows={2}
                                    value={formData.hero_subheadline}
                                    onChange={(e) => handleChange('hero_subheadline', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Kontak & Lokasi Kantor */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-[#B89B69] mb-4 pb-2 border-b border-[#E7E8E5]">
                            3. Kontak & Alamat Kantor
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="sm:col-span-2">
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Alamat Kantor Pusat SCBD
                                </label>
                                <textarea
                                    rows={2}
                                    value={formData.office_address}
                                    onChange={(e) => handleChange('office_address', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Nomor WhatsApp (Format: +628...)
                                </label>
                                <input
                                    type="text"
                                    value={formData.whatsapp}
                                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Teks Tampilan WhatsApp
                                </label>
                                <input
                                    type="text"
                                    value={formData.whatsapp_display}
                                    onChange={(e) => handleChange('whatsapp_display', e.target.value)}
                                    placeholder="Contoh: 0812-8888-9911"
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Telepon Kantor
                                </label>
                                <input
                                    type="text"
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Email Resmi
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1.5">
                                    Jam Operasional Kantor
                                </label>
                                <input
                                    type="text"
                                    value={formData.office_hours}
                                    onChange={(e) => handleChange('office_hours', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Angka Statistik */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-[#B89B69] mb-4 pb-2 border-b border-[#E7E8E5]">
                            4. Angka Statistik (Konfigurasi Tampilan)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Years Experience
                                </label>
                                <input
                                    type="text"
                                    value={formData.years_experience}
                                    onChange={(e) => handleChange('years_experience', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs font-serif font-bold text-[#172B3A]"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Cases Handled
                                </label>
                                <input
                                    type="text"
                                    value={formData.cases_handled}
                                    onChange={(e) => handleChange('cases_handled', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs font-serif font-bold text-[#172B3A]"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Practice Areas
                                </label>
                                <input
                                    type="text"
                                    value={formData.practice_areas_count}
                                    onChange={(e) => handleChange('practice_areas_count', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs font-serif font-bold text-[#172B3A]"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Client Satisfaction
                                </label>
                                <input
                                    type="text"
                                    value={formData.client_satisfaction}
                                    onChange={(e) => handleChange('client_satisfaction', e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs font-serif font-bold text-[#172B3A]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-[#172B3A] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-sm hover:bg-[#B89B69] transition-colors"
                        >
                            <Save className="w-4 h-4" />
                            <span>Simpan Seluruh Pengaturan</span>
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
