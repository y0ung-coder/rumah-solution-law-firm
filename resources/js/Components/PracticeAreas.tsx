import React, { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { PracticeArea } from '@/types';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface PracticeAreasProps {
    practiceAreas: PracticeArea[];
}

const DEFAULT_IMAGES = [
    '/images/real/practice-corporate.jpg',
    '/images/real/practice-civil.jpg',
    '/images/real/practice-criminal.jpg',
    '/images/real/practice-family.jpg',
    '/images/real/practice-property.jpg',
    '/images/real/practice-litigation.jpg',
    '/images/real/practice-consultation.jpg',
    '/images/real/practice-drafting.jpg',
];

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ practiceAreas = [] }) => {
    const { t, translate } = useLanguage();
    const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

    const handleConsultClick = (serviceTitle: string) => {
        setSelectedArea(null);
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            const selectEl = document.querySelector('select[name="service"]') as HTMLSelectElement;
            if (selectEl) {
                selectEl.value = serviceTitle;
                selectEl.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    };

    if (!Array.isArray(practiceAreas) || practiceAreas.length === 0) {
        return null;
    }

    return (
        <section id="practice-areas" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                {/* Veritas Split Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div>
                        <LaurelBadge text={t.practice.badge} className="mb-3" />
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-[#1B2942] font-normal leading-[1.13] tracking-tight">
                            {t.practice.title_1}
                            <br />
                            {t.practice.title_2}
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#595959] max-w-md leading-relaxed">
                        {t.practice.desc}
                    </p>
                </div>

                {/* Full-Width Horizontal Stack of Practice Area Cards (Exact Veritas-3 & Veritas-4 Layout) */}
                <div className="space-y-6">
                    {practiceAreas.map((area, idx) => {
                        const scopeItems = Array.isArray(area.scope_items) ? area.scope_items : [];
                        const isDark = idx % 2 === 0;
                        const displayNum = `${idx + 1}/`;
                        const imgSrc = area.image_url || DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length];

                        return (
                            <div
                                key={area.id}
                                className={`rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 ${
                                    isDark
                                        ? 'bg-[#2A3A57] text-white'
                                        : 'bg-[#EDEDED] text-[#1B2942]'
                                }`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                                    {/* Left Column: Number + Title on top, Description on bottom */}
                                    <div className="lg:col-span-4 flex flex-col justify-between">
                                        <div className="flex items-baseline gap-3">
                                            <span
                                                className={`font-serif text-xl sm:text-2xl ${
                                                    isDark ? 'text-white/80' : 'text-[#1B2942]/80'
                                                }`}
                                            >
                                                {displayNum}
                                            </span>
                                            <h3
                                                className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${
                                                    isDark ? 'text-white' : 'text-[#1B2942]'
                                                }`}
                                            >
                                                {translate(area.title)}
                                            </h3>
                                        </div>

                                        <p
                                            className={`text-sm leading-relaxed mt-8 lg:mt-16 max-w-sm ${
                                                isDark ? 'text-white/80' : 'text-[#595959]'
                                            }`}
                                        >
                                            {translate(area.description)}
                                        </p>
                                    </div>

                                    {/* Middle Column: Real Stock Photograph */}
                                    <div className="lg:col-span-4">
                                        <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden">
                                            <img
                                                src={imgSrc}
                                                alt={area.title}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Column: Scope Pill Tags on top, Gold Learn More Button on bottom */}
                                    <div className="lg:col-span-4 flex flex-col justify-between items-start lg:pl-4">
                                        <div className="flex flex-wrap gap-2">
                                            {scopeItems.map((item, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-4 py-1.5 rounded-full text-xs font-normal ${
                                                        isDark
                                                            ? 'bg-[#435678] text-white/95'
                                                            : 'bg-white text-[#1B2942]'
                                                    }`}
                                                >
                                                    {translate(item)}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-2">
                                            <button
                                                onClick={() => setSelectedArea(area)}
                                                className="inline-flex items-center gap-2 bg-[#D6BC97] text-[#4C4136] hover:bg-[#e3caa7] px-6 py-3 rounded-full text-sm font-medium transition-colors"
                                            >
                                                <span>{t.practice.learn_more}</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Detail Practice Area */}
            {selectedArea && (
                <div className="fixed inset-0 z-50 bg-[#1B2942]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedArea(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#EDEDED] flex items-center justify-center text-[#1B2942] hover:bg-[#1B2942] hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <LaurelBadge text={`${t.practice.modal_badge} ${selectedArea.number || ''}`} className="mb-3" />

                        <h3 className="font-serif text-3xl text-[#1B2942] font-normal mb-4">
                            {translate(selectedArea.title)}
                        </h3>

                        <p className="text-sm text-[#595959] leading-relaxed mb-6">
                            {translate(selectedArea.description)}
                        </p>

                        {Array.isArray(selectedArea.scope_items) && selectedArea.scope_items.length > 0 && (
                            <div className="bg-[#FBFBFA] rounded-2xl p-6 border border-[#EDEDED] mb-8">
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1B2942] mb-4">
                                    {t.practice.scope_heading}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {selectedArea.scope_items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#1B2942]">
                                            <Check className="w-4 h-4 text-[#D6BC97] shrink-0 mt-0.5" />
                                            <span>{translate(item)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-end gap-3">
                            <button
                                onClick={() => setSelectedArea(null)}
                                className="px-6 py-3 rounded-full text-sm text-[#595959] hover:text-[#1B2942]"
                            >
                                {t.practice.close}
                            </button>
                            <button
                                onClick={() => handleConsultClick(selectedArea.title)}
                                className="inline-flex items-center gap-2 bg-[#D6BC97] text-[#4C4136] px-7 py-3 rounded-full text-sm font-medium hover:bg-[#e3caa7] transition-colors"
                            >
                                <span>{t.practice.consult_this}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
