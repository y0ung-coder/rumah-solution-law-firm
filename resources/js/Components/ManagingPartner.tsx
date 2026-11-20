import React from 'react';
import { GraduationCap, Briefcase, Award, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PartnerProfile, SiteSettings } from '@/types';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface ManagingPartnerProps {
    partner: PartnerProfile | null;
    settings?: SiteSettings;
}

export const ManagingPartner: React.FC<ManagingPartnerProps> = ({ partner }) => {
    const { t, translate } = useLanguage();
    if (!partner) return null;

    const educationList = Array.isArray(partner.education) ? partner.education : [];
    const experienceList = Array.isArray(partner.experience) ? partner.experience : [];
    const expertiseList = Array.isArray(partner.expertise) ? partner.expertise : [];

    return (
        <section id="partner" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                {/* Centered Section Header with Signature Insignia */}
                <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
                    <LaurelBadge text={t.partner.badge} className="mb-3" />
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-[#1B2942] font-normal leading-[1.13] tracking-tight mb-4">
                        {t.partner.title_1}
                        <br />
                        {t.partner.title_2}
                    </h2>
                    <p className="text-sm sm:text-base text-[#595959] leading-relaxed">
                        {t.partner.desc}
                    </p>
                </div>

                {/* Main Layout: Architectural Slate & Gold Frame Portrait + Verified Profile Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: Architectural Slate & Gold Frame Portrait */}
                    <div className="lg:col-span-5 flex flex-col items-center">
                        <div className="w-full max-w-[420px]">
                            {/* Modern Architectural Slate Frame */}
                            <div className="relative p-3 bg-[#1C2532] rounded-3xl shadow-[0_25px_50px_-12px_rgba(27,41,66,0.25)] border border-[#D6BC97]/30">
                                {/* Gold Corner Accents */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D6BC97] rounded-tl-lg pointer-events-none" />
                                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D6BC97] rounded-tr-lg pointer-events-none" />
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D6BC97] rounded-bl-lg pointer-events-none" />
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D6BC97] rounded-br-lg pointer-events-none" />

                                <div className="overflow-hidden rounded-2xl aspect-[4/5] relative bg-[#2A3A57]">
                                    <img
                                        src={
                                            partner.image_url ||
                                            '/images/real/partner-samuel.jpg'
                                        }
                                        alt={partner.name}
                                        className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                                    />

                                    {/* Verified Advocate Pill Overlaid at Bottom */}
                                    <div className="absolute bottom-3 left-3 right-3 bg-[#1C2532]/90 backdrop-blur-md rounded-xl py-2 px-3 border border-white/10 flex items-center justify-center gap-2 text-white">
                                        <ShieldCheck className="w-4 h-4 text-[#D6BC97] shrink-0" />
                                        <span className="text-[11px] font-medium tracking-wide text-white/90">
                                            {t.partner.badge_peradi}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Centered Caption Below Frame */}
                            <div className="text-center mt-6">
                                <h3 className="text-xl sm:text-2xl font-serif text-[#1B2942] tracking-tight">
                                    {partner.name}
                                </h3>
                                <p className="text-sm font-medium text-[#8C6D3B] mt-1">
                                    {partner.title || 'Managing Partner & Founder'}
                                </p>
                                <p className="text-xs text-[#595959] mt-1 tracking-wide">
                                    {t.partner.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Executive Biography & Credentials in Soft Gray Cards */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-[#EDEDED] rounded-2xl p-8">
                            <h4 className="font-serif text-2xl text-[#1B2942] font-normal mb-3">
                                {t.partner.exec_profile}
                            </h4>
                            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-4">
                                {translate(partner.bio)}
                            </p>
                            {partner.philosophy && (
                                <p className="text-sm italic text-[#1B2942] border-l-2 border-[#D6BC97] pl-4 py-1 mt-4">
                                    &ldquo;{translate(partner.philosophy)}&rdquo;
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Academic Credentials */}
                            <div className="bg-[#EDEDED] rounded-2xl p-7">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-full bg-[#D6BC97] text-white flex items-center justify-center">
                                        <GraduationCap className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-base font-medium text-[#1B2942]">
                                        {t.partner.edu_heading}
                                    </h4>
                                </div>
                                <ul className="space-y-2.5 text-sm text-[#595959]">
                                    {educationList.map((edu, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D6BC97] mt-2 shrink-0" />
                                            <span>{translate(edu)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Professional Experience */}
                            <div className="bg-[#EDEDED] rounded-2xl p-7">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-full bg-[#D6BC97] text-white flex items-center justify-center">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-base font-medium text-[#1B2942]">
                                        {t.partner.exp_heading}
                                    </h4>
                                </div>
                                <ul className="space-y-2.5 text-sm text-[#595959]">
                                    {experienceList.map((exp, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D6BC97] mt-2 shrink-0" />
                                            <span>{translate(exp)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Legal Expertise Pills */}
                        {expertiseList.length > 0 && (
                            <div className="bg-[#2A3A57] text-white rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#D6BC97]/20">
                                <div>
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D6BC97] mb-3">
                                        <Award className="w-4 h-4" />
                                        <span>{t.partner.expertise_heading}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {expertiseList.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-3.5 py-1.5 rounded-full bg-[#435678] text-white/95 text-xs"
                                            >
                                                {translate(item)}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 bg-[#D6BC97] text-[#4C4136] hover:bg-[#e3caa7] px-6 py-3 rounded-full text-sm font-medium shrink-0 transition-colors shadow-sm"
                                >
                                    <span>{t.partner.consult_now}</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
