import React from 'react';
import { Users, Award, MessageCircle } from 'lucide-react';
import { SiteSettings } from '@/types';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface AboutProps {
    settings?: SiteSettings;
}

export const About: React.FC<AboutProps> = ({ settings }) => {
    const { t } = useLanguage();

    const values = [
        {
            icon: Users,
            title: t.about.val1_title,
            description: t.about.val1_desc,
        },
        {
            icon: Award,
            title: t.about.val2_title,
            description: t.about.val2_desc,
        },
        {
            icon: MessageCircle,
            title: t.about.val3_title,
            description: t.about.val3_desc,
        },
    ];

    const stats = [
        {
            number: settings?.years_experience ? String(settings.years_experience).replace(/\+$/, '') : '10',
            suffix: '+',
            label: t.about.stat_years,
            description: t.about.stat_years_desc,
        },
        {
            number: settings?.cases_handled ? String(settings.cases_handled).replace(/\+$/, '') : '350',
            suffix: '+',
            label: t.about.stat_cases,
            description: t.about.stat_cases_desc,
        },
        {
            number: settings?.client_satisfaction ? String(settings.client_satisfaction).replace(/%$/, '') : '98',
            suffix: '%',
            label: t.about.stat_satisfaction,
            description: t.about.stat_satisfaction_desc,
        },
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Heading, Intro, 3 Clean Value Items */}
                    <div className="lg:col-span-6">
                        <LaurelBadge text={t.about.badge} className="mb-3" />

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-[#1B2942] font-normal leading-[1.13] tracking-tight mb-6">
                            {t.about.title_1}
                            <br />
                            {t.about.title_2}
                        </h2>

                        <p className="text-base text-[#595959] leading-relaxed mb-14 max-w-xl">
                            {t.about.intro_p1}
                        </p>

                        {/* 3 Clean Value Items */}
                        <div className="space-y-9">
                            {values.map((v, i) => {
                                const Icon = v.icon;
                                return (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-full bg-[#D6BC97] text-white flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="max-w-md">
                                            <h3 className="text-lg sm:text-xl font-medium text-[#1B2942] mb-1.5">
                                                {v.title}
                                            </h3>
                                            <p className="text-sm text-[#595959] leading-relaxed">
                                                {v.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Real Team Meeting Photo on Top + 3 Stacked Soft Gray Stat Cards Below */}
                    <div className="lg:col-span-6 space-y-4">
                        <div className="rounded-2xl overflow-hidden mb-5">
                            <img
                                src="/images/real/about-team.jpg"
                                alt="Rumah Solution Law Firm Legal Consultation"
                                className="w-full h-[320px] sm:h-[370px] object-cover object-center rounded-2xl"
                            />
                        </div>

                        {stats.map((st, idx) => (
                            <div
                                key={idx}
                                className="bg-[#EDEDED] rounded-2xl px-7 py-6 transition-all duration-200 hover:bg-[#e4e4e4]"
                            >
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-3xl sm:text-4xl font-semibold text-[#1B2942] tracking-tight">
                                        {st.number}
                                        <span className="text-[#D6BC97] font-normal ml-0.5">{st.suffix}</span>
                                    </span>
                                    <span className="text-base font-medium text-[#1B2942]">
                                        {st.label}
                                    </span>
                                </div>
                                <p className="text-sm text-[#595959]">
                                    {st.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trusted by Leading Companies Divider Strip */}
                <div className="mt-24 pt-4">
                    <div className="flex items-center gap-6 mb-10">
                        <div className="h-[1px] flex-1 bg-[#D6BC97]/50" />
                        <span className="text-sm font-medium text-[#1B2942] tracking-wide">
                            {t.about.trusted_by}
                        </span>
                        <div className="h-[1px] flex-1 bg-[#D6BC97]/50" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-55">
                        <div className="text-xl font-bold tracking-tight text-[#1B2942] font-serif">NUSANTARA CORP</div>
                        <div className="text-lg font-semibold tracking-widest text-[#1B2942]">GARUDA VENTURES</div>
                        <div className="text-xl font-serif italic font-bold text-[#1B2942]">Merdeka Capital</div>
                        <div className="text-lg font-bold tracking-wider text-[#1B2942]">PACIFIC HOLDINGS</div>
                        <div className="text-xl font-serif font-bold text-[#1B2942]">SENTOSA GROUP</div>
                        <div className="text-lg font-semibold tracking-widest text-[#1B2942]">PRIMA LOGISTICS</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
