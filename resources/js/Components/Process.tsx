import React from 'react';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

export const Process: React.FC = () => {
    const { t } = useLanguage();

    const steps = [
        {
            number: '1',
            title: t.process.step1_title,
            description: t.process.step1_desc,
            image: '/images/real/process-1.jpg',
        },
        {
            number: '2',
            title: t.process.step2_title,
            description: t.process.step2_desc,
            image: '/images/real/process-2.jpg',
        },
        {
            number: '3',
            title: t.process.step3_title,
            description: t.process.step3_desc,
            image: '/images/real/process-3.jpg',
        },
    ];

    return (
        <section id="process" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                {/* Centered Veritas Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
                    <LaurelBadge text={t.process.badge} className="mb-3" />
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-[#1B2942] font-normal leading-[1.13] tracking-tight mb-4">
                        {t.process.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#595959] leading-relaxed">
                        {t.process.desc}
                    </p>
                </div>

                {/* 3 Tall Photo Cards with Overlaid Dark Navy Glass Boxes (Exact Veritas-10 Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative h-[480px] sm:h-[520px] rounded-2xl overflow-hidden group shadow-sm"
                        >
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141B24]/60 via-transparent to-transparent" />

                            {/* Bottom Overlaid Translucent Dark Navy Box */}
                            <div className="absolute bottom-4 left-4 right-4 bg-[#1B2942]/90 backdrop-blur-md rounded-xl p-6 text-white border border-white/10">
                                <div className="w-8 h-8 rounded-full bg-[#D6BC97] text-[#4C4136] text-sm font-medium flex items-center justify-center mb-3.5">
                                    {step.number}
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
