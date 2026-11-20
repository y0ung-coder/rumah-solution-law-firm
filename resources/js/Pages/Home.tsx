import React from 'react';
import { Head } from '@inertiajs/react';
import { Navbar } from '@/Components/Navbar';
import { Hero } from '@/Components/Hero';
import { About } from '@/Components/About';
import { PracticeAreas } from '@/Components/PracticeAreas';
import { ManagingPartner } from '@/Components/ManagingPartner';
import { Testimonials } from '@/Components/Testimonials';
import { Process } from '@/Components/Process';
import { FAQ } from '@/Components/FAQ';
import { Contact } from '@/Components/Contact';
import { Articles } from '@/Components/Articles';
import { Footer } from '@/Components/Footer';
import { FloatingWhatsApp } from '@/Components/FloatingWhatsApp';
import { ErrorBoundary } from '@/Components/ErrorBoundary';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { LanguageProvider } from '@/context/LanguageContext';
import { PracticeArea, PartnerProfile, Testimonial, Article, SiteSettings } from '@/types';

interface HomeProps {
    practiceAreas?: PracticeArea[];
    partnerProfile?: PartnerProfile | null;
    testimonials?: Testimonial[];
    articles?: Article[];
    siteSettings?: SiteSettings;
    flash?: {
        success?: string | null;
        error?: string | null;
    };
}

export default function Home({
    practiceAreas = [],
    partnerProfile = null,
    testimonials = [],
    articles = [],
    siteSettings = {},
    flash = {},
}: HomeProps) {
    useSmoothScroll();

    const pageTitle = `${siteSettings?.site_name || 'Rumah Solution Law Firm'} — Adv. Samuel Tambunan, S.Kom., S.H.`;

    return (
        <ErrorBoundary>
            <LanguageProvider>
                <div className="min-h-screen bg-white text-[#1B2942] selection:bg-[#D6BC97] selection:text-[#1B2942]">
                    <Head title={pageTitle} />

                    {/* Veritas Floating Dual-Pill Navigation */}
                    <Navbar settings={siteSettings} />

                    {/* Main Content in Exact Veritas Section Sequence */}
                    <main>
                        <Hero settings={siteSettings} />
                        <About settings={siteSettings} />
                        {practiceAreas && practiceAreas.length > 0 && (
                            <PracticeAreas practiceAreas={practiceAreas} />
                        )}
                        {partnerProfile && (
                            <ManagingPartner partner={partnerProfile} settings={siteSettings} />
                        )}
                        {testimonials && testimonials.length > 0 && (
                            <Testimonials testimonials={testimonials} />
                        )}
                        <Process />
                        <FAQ />
                        <Contact practiceAreas={practiceAreas || []} settings={siteSettings} flash={flash} />
                        {articles && articles.length > 0 && (
                            <Articles articles={articles} />
                        )}
                    </main>

                    {/* Veritas Soft Gray Footer */}
                    <Footer settings={siteSettings} />

                    {/* Floating WhatsApp Contact Button */}
                    <FloatingWhatsApp settings={siteSettings} />
                </div>
            </LanguageProvider>
        </ErrorBoundary>
    );
}
