import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiteSettings } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface FloatingWhatsAppProps {
    settings?: SiteSettings;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ settings }) => {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rawWhatsapp = settings?.whatsapp ? String(settings.whatsapp) : '';
    const waNum = rawWhatsapp.replace(/\D/g, '') || '6281288889911';
    const waUrl = `https://wa.me/${waNum}?text=${encodeURIComponent(
        'Halo Rumah Solution Law Firm, saya ingin berkonsultasi langsung dengan Adv. Samuel Tambunan, S.Kom., S.H.'
    )}`;

    return (
        <aside 
            aria-label="Kontak Cepat WhatsApp Adv. Samuel Tambunan"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-10 z-50 pointer-events-auto"
        >
            <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                title="Chat WhatsApp dengan Adv. Samuel Tambunan, S.Kom., S.H."
                className={`group relative flex items-center shadow-2xl transition-all duration-500 ease-out rounded-full ${
                    scrolled
                        ? 'p-1 bg-[#1C2532] border-2 border-[#D6BC97] hover:scale-105'
                        : 'pl-2 pr-6 py-2 bg-white/95 backdrop-blur-md border border-white/60 hover:shadow-2xl hover:scale-[1.02]'
                }`}
            >
                {/* Avatar Container: TANPA overflow-hidden di parent agar badge tidak terpotong! */}
                <div className="relative shrink-0">
                    {/* Lingkaran Foto Advokat (Hanya bagian ini yang overflow-hidden) */}
                    <div
                        className={`overflow-hidden rounded-full border-2 border-[#D6BC97]/60 transition-all duration-500 ${
                            scrolled
                                ? 'w-14 h-14 sm:w-16 sm:h-16'
                                : 'w-12 h-12 sm:w-14 sm:h-14'
                        }`}
                    >
                        <img
                            src="/images/real/partner-samuel.jpg"
                            alt="Adv. Samuel Tambunan"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* WhatsApp Green Phone Badge: Ditempatkan rapi di pojok bawah-kanan TANPA TERPOTONG! */}
                    <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md ring-2 ring-white z-20">
                        <WhatsAppIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </span>
                </div>

                {/* Teks di dalam Kapsul (Tampil saat di Hero, mengecil saat di-scroll) */}
                {!scrolled && (
                    <div className="min-w-0 pl-3 flex flex-col justify-center">
                        <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <h4 className="text-xs sm:text-sm font-medium text-[#1B2942] leading-snug whitespace-nowrap">
                                {t.hero.talk_title}
                            </h4>
                        </div>

                        <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#8C6D3B] font-semibold group-hover:text-[#1B2942] transition-colors whitespace-nowrap">
                            <span className="border-b border-[#8C6D3B]/60 group-hover:border-[#1B2942] pb-0.5">
                                {t.hero.schedule_wa}
                            </span>
                            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                        </div>
                    </div>
                )}

                {/* Tooltip saat dalam mode lingkaran kecil */}
                {scrolled && (
                    <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1C2532] text-white text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                        Chat WhatsApp Advokat
                    </span>
                )}
            </a>
        </aside>
    );
};
