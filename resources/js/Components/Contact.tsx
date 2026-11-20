import React from 'react';
import { useForm } from '@inertiajs/react';
import { MapPin, Phone, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PracticeArea, SiteSettings } from '@/types';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface ContactProps {
    practiceAreas?: PracticeArea[];
    settings?: SiteSettings;
    flash?: {
        success?: string | null;
        error?: string | null;
    };
}

export const Contact: React.FC<ContactProps> = ({ practiceAreas = [], settings, flash }) => {
    const { t, translate } = useLanguage();
    const safePracticeAreas = Array.isArray(practiceAreas) ? practiceAreas : [];
    const defaultService = safePracticeAreas[0]?.title || 'Corporate & Business Law';

    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        service: defaultService,
        notes: '',
        bot_check: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/consultation', {
            preserveScroll: true,
            onSuccess: () => {
                reset('name', 'email', 'phone', 'notes');
            },
        });
    };

    const rawWhatsapp = settings?.whatsapp ? String(settings.whatsapp) : '';
    const whatsappNumber = rawWhatsapp.replace(/\D/g, '') || '6281288889911';

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#1B2942] text-white relative overflow-hidden">
            {/* Subtle Dark Courtroom / Architectural Background Image Overlay (Exact Veritas-13) */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src="/images/real/practice-litigation.jpg"
                    alt="Courtroom Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 z-0 bg-[#1B2942]/85" />

            <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
                {/* Top Row: Heading on Left, Description on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-14">
                    <div className="lg:col-span-6">
                        <LaurelBadge text={t.contact.badge} light className="mb-3" />
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-white font-normal leading-[1.13] tracking-tight">
                            {t.contact.title_1}
                            <br />
                            {t.contact.title_2}
                        </h2>
                    </div>

                    <div className="lg:col-span-6">
                        <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-md">
                            {t.contact.desc}
                        </p>
                    </div>
                </div>

                {/* Bottom Row: Address + Map on Left, Form directly on Dark Navy on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Address, Phone & Embedded Google Map */}
                    <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-start gap-3.5 text-white/90">
                            <MapPin className="w-5 h-5 text-[#D6BC97] shrink-0 mt-0.5" />
                            <div className="space-y-1">
                                <span className="text-sm sm:text-base leading-relaxed block">
                                    {settings?.office_address ||
                                        'Rumah Solution Law Firm, MP6H+6R8, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417'}
                                </span>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Rumah+Solution+Law+Firm,+MP6H%2B6R8,+Pamulang+Bar.,+Kec.+Pamulang,+Kota+Tangerang+Selatan,+Banten+15417"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-[#D6BC97] hover:underline pt-0.5 font-medium"
                                >
                                    <span>{t.contact.open_maps}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3.5 text-white/90">
                            <Phone className="w-5 h-5 text-[#D6BC97] shrink-0" />
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm sm:text-base hover:text-[#D6BC97] transition-colors"
                            >
                                {settings?.whatsapp_display || '+62 812-8888-9911'}
                            </a>
                        </div>

                        {/* Embedded Google Maps Pinpoint */}
                        <div className="pt-2">
                            <div className="rounded-2xl overflow-hidden h-[300px] w-full shadow-lg border border-white/10 bg-[#2A3A57] relative">
                                <iframe
                                    title="Lokasi Kantor Rumah Solution Law Firm Pamulang"
                                    src="https://maps.google.com/maps?q=Rumah%20Solution%20Law%20Firm%2C%20MP6H%2B6R8%2C%20Pamulang%20Bar.%2C%20Kec.%20Pamulang%2C%20Kota%20Tangerang%20Selatan%2C%20Banten%2015417&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clean Form Inputs on Dark Navy Backdrop */}
                    <div className="lg:col-span-7">
                        {flash?.success && (
                            <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-start gap-3 text-white">
                                <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                                <div className="text-xs sm:text-sm leading-relaxed">
                                    {flash.success}
                                </div>
                            </div>
                        )}

                        {recentlySuccessful && !flash?.success && (
                            <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-start gap-3 text-white">
                                <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                                <div className="text-xs sm:text-sm leading-relaxed">
                                    Permintaan konsultasi Anda berhasil dikirim. Tim Rumah Solution Law Firm akan segera menghubungi Anda.
                                </div>
                            </div>
                        )}

                        {flash?.error && (
                            <div className="mb-6 p-4 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-start gap-3 text-white">
                                <AlertCircle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
                                <div className="text-xs sm:text-sm leading-relaxed">
                                    {flash.error}
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Honeypot */}
                            <div className="hidden" aria-hidden="true">
                                <input
                                    type="text"
                                    name="bot_check"
                                    value={data.bot_check}
                                    onChange={(e) => setData('bot_check', e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Row 1: Full Name + Email Address */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs text-white/80 mb-2">
                                        {t.contact.full_name}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Jane Smith"
                                        className="w-full px-4 py-3.5 rounded-xl bg-white text-[#1B2942] placeholder-[#999999] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D6BC97]"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-xs text-rose-300">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs text-white/80 mb-2">
                                        {t.contact.email}
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="jane@company.com"
                                        className="w-full px-4 py-3.5 rounded-xl bg-white text-[#1B2942] placeholder-[#999999] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D6BC97]"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-rose-300">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Row 2: Phone Number + Service */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs text-white/80 mb-2">
                                        {t.contact.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        placeholder="+62 812-0000-0000"
                                        className="w-full px-4 py-3.5 rounded-xl bg-white text-[#1B2942] placeholder-[#999999] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D6BC97]"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-xs text-rose-300">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs text-white/80 mb-2">
                                        {t.contact.service}
                                    </label>
                                    <select
                                        name="service"
                                        value={data.service}
                                        onChange={(e) => setData('service', e.target.value)}
                                        className="w-full px-4 py-3.5 rounded-xl bg-white text-[#1B2942] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D6BC97]"
                                    >
                                        {safePracticeAreas.length > 0 ? (
                                            safePracticeAreas.map((area) => (
                                                <option key={area.id} value={area.title}>
                                                    {translate(area.title)}
                                                </option>
                                            ))
                                        ) : (
                                            <>
                                                <option value="Corporate & Business Law">{translate('Corporate & Business Law')}</option>
                                                <option value="Civil Law">{translate('Civil Law')}</option>
                                                <option value="Criminal Law">{translate('Criminal Law')}</option>
                                                <option value="Family Law">{translate('Family Law')}</option>
                                                <option value="Property & Land Law">{translate('Property & Land Law')}</option>
                                                <option value="Litigation & Dispute Resolution">{translate('Litigation & Dispute Resolution')}</option>
                                                <option value="Legal Consultation">{translate('Legal Consultation')}</option>
                                                <option value="Legal Drafting & Legal Opinion">{translate('Legal Drafting & Legal Opinion')}</option>
                                            </>
                                        )}
                                    </select>
                                    {errors.service && (
                                        <p className="mt-1 text-xs text-rose-300">{errors.service}</p>
                                    )}
                                </div>
                            </div>

                            {/* Row 3: Additional Notes */}
                            <div>
                                <label className="block text-xs text-white/80 mb-2">
                                    {t.contact.notes}
                                </label>
                                <textarea
                                    rows={5}
                                    value={data.notes}
                                    onChange={(e) => setData('notes', e.target.value)}
                                    placeholder={t.contact.notes_placeholder}
                                    className="w-full px-4 py-3.5 rounded-xl bg-white text-[#1B2942] placeholder-[#999999] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D6BC97]"
                                />
                                {errors.notes && (
                                    <p className="mt-1 text-xs text-rose-300">{errors.notes}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full py-4 px-8 bg-[#D6BC97] text-[#4C4136] hover:bg-[#e3caa7] text-sm font-medium rounded-full transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <span>{processing ? t.contact.submitting : t.contact.submit}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
