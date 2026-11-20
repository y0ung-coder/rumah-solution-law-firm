import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { SiteSettings } from '@/types';
import { ScalesIcon } from './LaurelBadge';
import { useLanguage } from '@/context/LanguageContext';

interface FooterProps {
    settings?: SiteSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#EDEDED] text-[#1B2942] pt-20 pb-12 relative">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                {/* Main Veritas Footer Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
                    {/* Left Brand & Contact Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <a href="#hero" className="inline-flex items-center gap-3.5">
                            <ScalesIcon className="w-10 h-10 text-[#1B2942]" />
                            <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1B2942] tracking-tight">
                                Rumah Solution Law Firm
                            </span>
                        </a>

                        <p className="text-sm text-[#595959] leading-relaxed max-w-xs">
                            {t.footer.desc}
                        </p>

                        {/* Social Links (X & LinkedIn like Veritas-16) */}
                        <div className="flex items-center gap-4 text-[#1B2942]">
                            <a
                                href="#contact"
                                aria-label="X / Twitter"
                                className="w-7 h-7 flex items-center justify-center hover:text-[#435678] transition-colors font-semibold text-base"
                            >
                                &#120143;
                            </a>
                            <a
                                href="#contact"
                                aria-label="LinkedIn"
                                className="w-6 h-6 border border-[#1B2942] rounded-xs flex items-center justify-center text-xs font-bold hover:bg-[#1B2942] hover:text-white transition-colors"
                            >
                                in
                            </a>
                        </div>

                        {/* Address & Phone */}
                        <div className="space-y-3 pt-4 text-sm text-[#1B2942]">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#1B2942] shrink-0 mt-1" />
                                <span className="max-w-sm leading-relaxed">
                                    {settings?.office_address ||
                                        'Rumah Solution Law Firm, MP6H+6R8, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#1B2942] shrink-0" />
                                <span>{settings?.whatsapp_display || '+62 812-8888-9911'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right 4 Columns: Practice Areas, Firm, Resources, Legal */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {/* Practice Areas */}
                        <div>
                            <h4 className="text-base font-medium text-[#1B2942] mb-5">
                                {t.footer.practice_heading}
                            </h4>
                            <ul className="space-y-3.5 text-sm text-[#595959]">
                                <li><a href="#practice-areas" className="hover:text-[#1B2942] transition-colors">{t.nav.practice_areas}</a></li>
                                <li><a href="#practice-areas" className="hover:text-[#1B2942] transition-colors">Corporate Law</a></li>
                                <li><a href="#practice-areas" className="hover:text-[#1B2942] transition-colors">Civil Law</a></li>
                                <li><a href="#practice-areas" className="hover:text-[#1B2942] transition-colors">Criminal Defense</a></li>
                                <li><a href="#practice-areas" className="hover:text-[#1B2942] transition-colors">Family Law</a></li>
                                <li><a href="#practice-areas" className="hover:text-[#1B2942] transition-colors">Property &amp; Land Law</a></li>
                            </ul>
                        </div>

                        {/* Firm */}
                        <div>
                            <h4 className="text-base font-medium text-[#1B2942] mb-5">
                                {t.footer.firm_heading}
                            </h4>
                            <ul className="space-y-3.5 text-sm text-[#595959]">
                                <li><a href="#about" className="hover:text-[#1B2942] transition-colors">{t.nav.about}</a></li>
                                <li><a href="#partner" className="hover:text-[#1B2942] transition-colors">{t.partner.badge}</a></li>
                                <li><a href="#contact" className="hover:text-[#1B2942] transition-colors">{t.nav.contact}</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-base font-medium text-[#1B2942] mb-5">
                                {t.footer.resources_heading}
                            </h4>
                            <ul className="space-y-3.5 text-sm text-[#595959]">
                                <li><a href="#insights" className="hover:text-[#1B2942] transition-colors">{t.nav.blog}</a></li>
                                <li><a href="#faq" className="hover:text-[#1B2942] transition-colors">{t.faq.badge}</a></li>
                                <li><a href="#testimonials" className="hover:text-[#1B2942] transition-colors">Testimonials</a></li>
                                <li><a href="#process" className="hover:text-[#1B2942] transition-colors">{t.process.badge}</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-base font-medium text-[#1B2942] mb-5">
                                Legal
                            </h4>
                            <ul className="space-y-3.5 text-sm text-[#595959]">
                                <li><a href="#contact" className="hover:text-[#1B2942] transition-colors">Disclaimer</a></li>
                                <li><a href="#contact" className="hover:text-[#1B2942] transition-colors">Privacy Policy</a></li>
                                <li><a href="/admin/login" className="hover:text-[#1B2942] transition-colors">Admin Portal</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar (Exact Veritas-16 Line) */}
                <div className="pt-8 border-t border-[#1B2942]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#595959]">
                    <div>
                        &copy; Copyright {currentYear}. {t.footer.all_rights} <span className="underline text-[#1B2942]">Rumah Solution Law Firm</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <span>Led by</span>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1B2942] text-[#D6BC97] text-xs font-serif font-bold">
                            ST
                        </span>
                        <span className="underline text-[#1B2942] font-medium">
                            Adv. Samuel Tambunan, S.Kom., S.H.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
