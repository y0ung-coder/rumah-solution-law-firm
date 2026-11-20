import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react';
import { SiteSettings } from '@/types';
import { ScalesIcon } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
    settings?: SiteSettings;
}

export const Navbar: React.FC<NavbarProps> = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { lang, setLang, t } = useLanguage();

    const navLinks = [
        { label: t.nav.home, href: '#hero' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.practice_areas, href: '#practice-areas' },
        { label: t.nav.blog, href: '#insights' },
    ];

    return (
        /* Menggunakan absolute: Navbar HANYA diam di atas (Hero), TIDAK IKUT melayang saat di-scroll ke bawah */
        <header className="absolute top-5 sm:top-6 left-0 w-full z-50 px-4 sm:px-6 md:px-8">
            <div className="max-w-[1340px] mx-auto">
                {/* Unified Luxury Glass Navbar (Statis di atas, tidak ikut scroll) */}
                <div className="rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl bg-[#182230]/85 hover:border-white/20 transition-all duration-300">
                    {/* Left: Prestigious 2-Tier Law Firm Brand Lockup */}
                    <a
                        href="#hero"
                        className="notranslate flex items-center gap-3 group shrink-0"
                    >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#243142] border border-[#D6BC97]/40 flex items-center justify-center text-[#D6BC97] group-hover:border-[#D6BC97] group-hover:bg-[#2c3c52] transition-all duration-300 shadow-sm shrink-0">
                            <ScalesIcon className="w-5 h-5 text-[#D6BC97]" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-serif text-base sm:text-[18px] tracking-tight font-medium text-white leading-tight group-hover:text-[#D6BC97] transition-colors">
                                Rumah Solution
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.26em] text-[#D6BC97] uppercase leading-none mt-0.5">
                                Law Firm
                            </span>
                        </div>
                    </a>

                    {/* Center: Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
                        {navLinks.map((link, idx) => (
                            <React.Fragment key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-[13px] tracking-wide font-medium text-white/85 hover:text-[#D6BC97] transition-colors duration-200 py-1"
                                >
                                    {link.label}
                                </a>
                                {idx < navLinks.length - 1 && (
                                    <span className="w-1 h-1 rounded-full bg-white/25" />
                                )}
                            </React.Fragment>
                        ))}
                    </nav>

                    {/* Right: Language Switcher & Contact CTA Button */}
                    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                        {/* Language Switcher Pill */}
                        <div
                            title="Alihkan Bahasa / Switch Language"
                            className="notranslate flex items-center bg-[#101722]/80 rounded-full px-2.5 py-1 border border-white/10 text-xs text-white shadow-inner"
                        >
                            <Globe className="w-3.5 h-3.5 text-[#D6BC97] mr-1.5 shrink-0" />
                            <button
                                type="button"
                                onClick={() => setLang('id')}
                                aria-label="Bahasa Indonesia"
                                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all duration-200 ${
                                    lang === 'id'
                                        ? 'bg-[#D6BC97] text-[#1C2532] shadow-sm'
                                        : 'text-white/60 hover:text-white'
                                }`}
                            >
                                ID
                            </button>
                            <span className="text-white/20 text-[10px] mx-0.5">/</span>
                            <button
                                type="button"
                                onClick={() => setLang('en')}
                                aria-label="English"
                                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all duration-200 ${
                                    lang === 'en'
                                        ? 'bg-[#D6BC97] text-[#1C2532] shadow-sm'
                                        : 'text-white/60 hover:text-white'
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Direct Contact Button */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 bg-[#D6BC97] text-[#1C2532] text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#e2cba8] hover:shadow-[0_4px_15px_rgba(214,188,151,0.35)] transition-all duration-200 shadow-sm"
                        >
                            <span>{t.nav.contact}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>

                        {/* Mobile Hamburger Toggle Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                            aria-label="Toggle navigation"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu Card */}
            {mobileOpen && (
                <div className="lg:hidden max-w-[1340px] mx-auto mt-2.5 bg-[#141d2a]/95 backdrop-blur-xl rounded-3xl p-6 text-white shadow-2xl border border-white/10 animate-in fade-in slide-in-from-top-3 duration-200">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-white/90 hover:text-[#D6BC97] py-2.5 border-b border-white/10 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-2 bg-[#D6BC97] text-[#1C2532] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#e2cba8] transition-all"
                        >
                            <span>{t.nav.contact}</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};
