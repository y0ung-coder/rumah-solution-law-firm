import React, { useEffect, useRef, useState } from 'react';
import { SiteSettings } from '@/types';

interface StatsProps {
    settings?: SiteSettings;
}

export const Stats: React.FC<StatsProps> = ({ settings }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const statsData = [
        {
            value: settings?.years_experience || '10+',
            label: 'Years of Experience',
            description: 'Pengalaman & dedikasi advokasi hukum',
        },
        {
            value: settings?.cases_handled || '350+',
            label: 'Cases Handled',
            description: 'Perkara litigasi & aksi korporasi',
        },
        {
            value: settings?.practice_areas_count || '08',
            label: 'Practice Areas',
            description: 'Cakupan spesialisasi hukum terpadu',
        },
        {
            value: settings?.client_satisfaction || '99%',
            label: 'Client Satisfaction',
            description: 'Tingkat kepuasan & kepercayaan klien',
        },
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-[#172B3A] text-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(#B89B69_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {statsData.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`pt-6 md:pt-0 ${
                                idx !== 0 ? 'md:pl-10' : ''
                            } transition-all duration-700 delay-${idx * 150} ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                        >
                            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#B89B69] mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white mb-1">
                                {stat.label}
                            </h4>
                            <p className="text-xs text-[#E7E8E5]/70 font-light">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
