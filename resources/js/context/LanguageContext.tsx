import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../translations';
import { translateContent, TargetLanguage } from '../services/translationEngine';
import { detectLanguage, DetectedLanguage } from '../services/languageDetector';

interface LanguageContextType {
    targetLang: TargetLanguage;
    setTargetLang: (lang: TargetLanguage) => void;
    lang: TargetLanguage;
    setLang: (lang: TargetLanguage) => void;
    isOriginal: boolean;
    t: typeof translations['original'];
    translate: (text: string) => string;
    detect: (text: string) => DetectedLanguage;
}

const defaultContext: LanguageContextType = {
    targetLang: 'original',
    setTargetLang: () => {},
    lang: 'original',
    setLang: () => {},
    isOriginal: true,
    t: translations.original,
    translate: (text: string) => text,
    detect: (text: string) => detectLanguage(text),
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Requirements 1, 2, 3, 4:
    // Default to 'original' so English content remains English, Indonesian content remains Indonesian,
    // and translation ONLY occurs when the user explicitly selects a different target language!
    const [targetLang, setTargetLangState] = useState<TargetLanguage>('original');

    useEffect(() => {
        // Read saved explicit preference from localStorage
        const saved = (localStorage.getItem('slf_user_language') || localStorage.getItem('slf_lang')) as TargetLanguage;
        if (saved === 'id' || saved === 'en' || saved === 'original') {
            setTargetLangState(saved);
        }

        // Clean up any legacy or rogue Google Translate cookie
        try {
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        } catch (e) {
            // ignore
        }
    }, []);

    const setTargetLang = (newLang: TargetLanguage) => {
        setTargetLangState(newLang);
        try {
            localStorage.setItem('slf_user_language', newLang);
            localStorage.setItem('slf_lang', newLang);
        } catch (e) {
            // ignore
        }
    };

    // Helper translation method for dynamic and static strings
    const translate = (text: string): string => {
        return translateContent(text, targetLang);
    };

    // Active translation dictionary
    const activeDictionary =
        targetLang === 'id'
            ? translations.id
            : targetLang === 'en'
            ? translations.en
            : translations.original;

    const value: LanguageContextType = {
        targetLang,
        setTargetLang,
        lang: targetLang,
        setLang: setTargetLang,
        isOriginal: targetLang === 'original',
        t: activeDictionary,
        translate,
        detect: detectLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
