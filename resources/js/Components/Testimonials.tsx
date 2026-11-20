import React from 'react';
import { Testimonial } from '@/types';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface TestimonialsProps {
    testimonials?: Testimonial[];
}

const DEFAULT_AVATARS = [
    '/images/real/client-1.jpg',
    '/images/real/client-2.jpg',
    '/images/real/client-3.jpg',
    '/images/real/client-4.jpg',
];

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials = [] }) => {
    const { t, translate } = useLanguage();

    if (!Array.isArray(testimonials) || testimonials.length === 0) {
        return null;
    }

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Sticky Heading, Subtitle, and Unboxed Stats Grid (Exact Veritas-8) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <LaurelBadge text={t.testimonials.badge} className="mb-3" />

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-[#1B2942] font-normal leading-[1.13] tracking-tight mb-5">
                            {t.testimonials.title_1}
                            <br />
                            {t.testimonials.title_2}
                        </h2>

                        <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-14 max-w-md">
                            {t.testimonials.desc}
                        </p>

                        {/* 2x2 Clean Stats Grid */}
                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 max-w-md">
                            <div>
                                <div className="text-4xl sm:text-5xl font-semibold text-[#1B2942] tracking-tight">
                                    8<span className="text-[#D6BC97] font-normal text-3xl align-top ml-0.5">+</span>
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-[#1B2942] mt-2">
                                    {t.testimonials.stat_areas}
                                </div>
                            </div>

                            <div>
                                <div className="text-4xl sm:text-5xl font-semibold text-[#1B2942] tracking-tight">
                                    30 <span className="text-lg font-normal text-[#1B2942]">min</span>
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-[#1B2942] mt-2">
                                    {t.testimonials.stat_years}
                                </div>
                            </div>

                            <div>
                                <div className="text-4xl sm:text-5xl font-semibold text-[#1B2942] tracking-tight">
                                    24 <span className="text-lg font-normal text-[#1B2942]">hr</span>
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-[#1B2942] mt-2">
                                    {t.testimonials.stat_satisfaction}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical Stack of Soft Gray Testimonial Cards (Exact Veritas-8) */}
                    <div className="lg:col-span-7 space-y-6">
                        {testimonials.map((item, idx) => (
                            <div
                                key={item.id || idx}
                                className="bg-[#EDEDED] rounded-2xl p-7 sm:p-9 transition-all duration-200"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <img
                                        src={
                                            item.avatar_url ||
                                            DEFAULT_AVATARS[idx % DEFAULT_AVATARS.length]
                                        }
                                        alt={item.client_name}
                                        className="w-14 h-14 rounded-full object-cover shrink-0"
                                    />
                                    <div>
                                        <h3 className="text-lg font-medium text-[#1B2942]">
                                            {item.client_name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#595959]">
                                            {translate(item.service_category)}
                                            {item.client_role ? ` • ${translate(item.client_role)}` : ''}
                                        </p>
                                    </div>
                                </div>

                                {/* Gold Double Quote Icon */}
                                <div className="text-[#D6BC97] font-serif text-4xl leading-none select-none mb-2">
                                    &rdquo;
                                </div>

                                <p className="text-sm sm:text-base text-[#1B2942] leading-relaxed italic">
                                    &ldquo;{translate(item.quote)}&rdquo;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
