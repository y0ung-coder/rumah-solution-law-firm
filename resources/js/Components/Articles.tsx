import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Article } from '@/types';
import { LaurelBadge } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface ArticlesProps {
    articles?: Article[];
}

export const Articles: React.FC<ArticlesProps> = ({ articles = [] }) => {
    const { t, translate } = useLanguage();
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    if (!Array.isArray(articles) || articles.length === 0) return null;

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return '';
        try {
            const d = new Date(dateStr);
            return d.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
        } catch (e) {
            return String(dateStr);
        }
    };

    return (
        <section id="insights" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                {/* Centered Veritas Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
                    <LaurelBadge text={t.articles.badge} className="mb-3" />
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-[#1B2942] font-normal leading-[1.13] tracking-tight mb-4">
                        {t.articles.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#595959] leading-relaxed">
                        {t.articles.desc}
                    </p>
                </div>

                {/* 3-Column Unbordered Editorial Cards Grid (Exact Veritas-15 Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {articles.slice(0, 6).map((article) => (
                        <div
                            key={article.id}
                            onClick={() => setSelectedArticle(article)}
                            className="cursor-pointer group flex flex-col"
                        >
                            {/* Top Rounded-2xl Cover Image */}
                            <div className="h-60 sm:h-64 w-full rounded-2xl overflow-hidden mb-4 bg-[#EDEDED]">
                                <img
                                    src={
                                        article.image_url ||
                                        '/images/real/practice-corporate.jpg'
                                    }
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Category Pill on Left, Date on Right */}
                            <div className="flex items-center justify-between gap-4 mb-2.5">
                                <span className="bg-[#EDEDED] text-[#1B2942] px-3.5 py-1 rounded-full text-xs font-normal">
                                    {translate(article.category)}
                                </span>
                                <span className="text-xs text-[#595959]">
                                    {formatDate(article.published_at)}
                                </span>
                            </div>

                            {/* Article Title */}
                            <h3 className="text-base sm:text-lg font-medium text-[#1B2942] leading-snug group-hover:text-[#435678] transition-colors">
                                {translate(article.title)}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Article Reader Modal */}
            {selectedArticle && (
                <div className="fixed inset-0 z-50 bg-[#1B2942]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 border border-[#EDEDED] flex items-center justify-center text-[#1B2942] hover:bg-[#1B2942] hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {selectedArticle.image_url && (
                            <div className="relative h-64 md:h-80 w-full overflow-hidden bg-[#1B2942]">
                                <img
                                    src={selectedArticle.image_url}
                                    alt={selectedArticle.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-3 text-xs mb-4">
                                <span className="px-3.5 py-1 rounded-full bg-[#EDEDED] text-[#1B2942]">
                                    {translate(selectedArticle.category)}
                                </span>
                                {selectedArticle.published_at && (
                                    <span className="text-[#595959]">
                                        {formatDate(selectedArticle.published_at)}
                                    </span>
                                )}
                                {selectedArticle.read_time && (
                                    <span className="text-[#595959]">
                                        • {selectedArticle.read_time}
                                    </span>
                                )}
                            </div>

                            <h2 className="font-serif text-3xl md:text-4xl text-[#1B2942] font-normal leading-snug mb-6">
                                {translate(selectedArticle.title)}
                            </h2>

                            <div
                                className="prose prose-slate max-w-none text-[#595959] leading-relaxed text-sm sm:text-base space-y-4"
                                dangerouslySetInnerHTML={{
                                    __html: selectedArticle.content || selectedArticle.excerpt || '',
                                }}
                            />

                            <div className="mt-8 pt-6 border-t border-[#EDEDED] flex justify-end">
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    className="px-6 py-2.5 rounded-full bg-[#1B2942] text-white text-sm font-medium hover:bg-[#2A3A57] transition-colors"
                                >
                                    {t.articles.close}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
