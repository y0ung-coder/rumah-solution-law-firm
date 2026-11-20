import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

export const FAQ: React.FC = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const faqs = t.faq.items;

    return (
        <section id="faq" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Tall Editorial Consultation Photograph (Exact Veritas-11 & 12) */}
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="/images/real/faq-consultation.jpg"
                                alt="Legal Consultation FAQ Rumah Solution Law Firm"
                                className="w-full h-[460px] sm:h-[640px] object-cover object-center rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Column: Laurel Badge, Heading, Subtitle & Gray Accordion Cards */}
                    <div className="lg:col-span-7">
                        <LaurelBadge text={t.faq.badge} className="mb-3" />

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-[#1B2942] font-normal leading-[1.13] tracking-tight mb-4">
                            {t.faq.title_1}
                            <br />
                            {t.faq.title_2}
                        </h2>

                        <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-10 max-w-xl">
                            {t.faq.desc}
                        </p>

                        <div className="space-y-3.5">
                            {faqs.map((faq, idx) => {
                                const isOpen = openIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-[#EDEDED] rounded-xl overflow-hidden transition-all duration-200"
                                    >
                                        <button
                                            onClick={() => toggle(idx)}
                                            className="w-full py-5 px-6 text-left flex items-center justify-between gap-4"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-base font-medium text-[#1B2942]">
                                                {faq.q}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-[#1B2942] shrink-0 transition-transform duration-200 ${
                                                    isOpen ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="px-6 pb-6 text-sm text-[#595959] leading-relaxed">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
