import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { SiteSettings } from '@/types';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
    settings?: SiteSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            className="relative min-h-[94vh] w-full flex flex-col justify-between pt-32 pb-14 overflow-hidden bg-[#161E29]"
        >
            {/* Full-Bleed Dramatic Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/real/hero-justice.jpg"
                    alt="Lady Justice - Rumah Solution Law Firm"
                    className="w-full h-full object-cover object-center scale-105 filter brightness-[0.80] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141B24]/90 via-[#1B2430]/60 to-[#141B24]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141B24]/85 via-transparent to-[#141B24]/40" />
            </div>

            {/* Main Hero Container */}
            <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 md:px-12 my-auto pt-8">
                <div className="max-w-3xl">
                    {/* Signature Legal Insignia Badge */}
                    <LaurelBadge text={t.hero.badge} light className="mb-5" />

                    {/* Monumental Headline */}
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-normal text-white leading-[1.06] tracking-tight mb-6">
                        {t.hero.title_1}
                        <br />
                        {t.hero.title_2}
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base sm:text-lg md:text-[19px] text-white/85 max-w-xl font-normal leading-relaxed mb-9">
                        {t.hero.subheadline}
                    </p>

                    {/* Primary Gold Pill CTA */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2.5 bg-[#D6BC97] text-[#4C4136] text-base font-medium px-8 py-4 rounded-full hover:bg-[#e3caa7] transition-all duration-300 shadow-lg group"
                        >
                            <span>{t.hero.cta}</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Social Proof on Left + Spacer for Floating WhatsApp Capsule on Right */}
            <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 md:px-12 mt-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    {/* Bottom-Left Rating & Cases Resolved */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <img
                                src="/images/real/client-1.jpg"
                                alt="Klien SLF"
                                className="w-11 h-11 rounded-full object-cover border-2 border-[#1B2942]"
                            />
                            <img
                                src="/images/real/client-2.jpg"
                                alt="Klien SLF"
                                className="w-11 h-11 rounded-full object-cover border-2 border-[#1B2942]"
                            />
                            <img
                                src="/images/real/client-3.jpg"
                                alt="Klien SLF"
                                className="w-11 h-11 rounded-full object-cover border-2 border-[#1B2942]"
                            />
                            <img
                                src="/images/real/client-4.jpg"
                                alt="Klien SLF"
                                className="w-11 h-11 rounded-full object-cover border-2 border-[#1B2942]"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5 text-white">
                                <div className="flex items-center text-white">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium ml-1">4.9 / 5</span>
                            </div>
                            <div className="text-sm text-white/80">
                                {settings?.cases_handled || '350+'} {t.hero.cases_resolved}
                            </div>
                        </div>
                    </div>

                    {/* Spacer placeholder on desktop to perfectly balance the floating WhatsApp capsule */}
                    <div className="hidden lg:block w-[420px] h-24 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
