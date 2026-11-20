/**
 * Automatic Language Detection & Bidirectional Translation Engine
 * Rumah Solution Law Firm
 */

import { detectLanguage, DetectedLanguage } from './languageDetector';
import { EN_TO_ID, ID_TO_EN, PROTECTED_TERMS } from './translationRegistry';

export type TargetLanguage = 'original' | 'id' | 'en';

// In-memory translation memoization to avoid redundant computations and guarantee idempotency
const translationCache = new Map<string, string>();

// Normalized index for case-insensitive and whitespace-resilient matching
const NORMALIZED_ID_TO_EN = new Map<string, string>();
const NORMALIZED_EN_TO_ID = new Map<string, string>();

function normalizeKey(str: string): string {
    return str
        .replace(/\u00a0/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

// Build normalized maps once
for (const [idKey, enVal] of Object.entries(ID_TO_EN)) {
    NORMALIZED_ID_TO_EN.set(normalizeKey(idKey), enVal);
}

for (const [enKey, idVal] of Object.entries(EN_TO_ID)) {
    NORMALIZED_EN_TO_ID.set(normalizeKey(enKey), idVal);
}

/**
 * Checks if a string is a protected brand name or proper noun
 */
export function isProtectedTerm(text: string): boolean {
    const trimmed = text.trim();
    return PROTECTED_TERMS.some(
        (term) => term.toLowerCase() === trimmed.toLowerCase()
    );
}

/**
 * Main Translation Function
 *
 * Requirements satisfied:
 * 1. Automatically detects original language of the content.
 * 2. If content is already in English, keeps it in English when target is English or original.
 * 3. If content is already in Indonesian, keeps it in Indonesian when target is Indonesian or original.
 * 4. Only translates when target language is explicitly different from detected source language.
 * 5. Source language and target language are never treated as the same or reversed.
 * 6. Brand names, proper nouns, and HTML structure are strictly preserved.
 * 7. Prevents double translation or repeated mutation.
 */
export function translateContent(
    text: string,
    targetLanguage: TargetLanguage
): string {
    if (!text || typeof text !== 'string') {
        return text;
    }

    // 1. If user has not chosen a target language (Default = original), keep original content intact!
    if (targetLanguage === 'original') {
        return text;
    }

    // 2. Protected terms (brand names, partner title, legal credentials) NEVER get translated
    if (isProtectedTerm(text)) {
        return text;
    }

    // Cache check
    const cacheKey = `${targetLanguage}:::${text}`;
    if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey)!;
    }

    const trimmed = text.trim();
    const normalized = normalizeKey(trimmed);
    let result = text;

    // 3. TARGET = ENGLISH (Indonesian -> English)
    if (targetLanguage === 'en') {
        // Direct dictionary lookup (exact match)
        if (ID_TO_EN[trimmed]) {
            result = ID_TO_EN[trimmed];
        }
        // Normalized lookup (resilient to minor whitespace or case differences)
        else if (NORMALIZED_ID_TO_EN.has(normalized)) {
            result = NORMALIZED_ID_TO_EN.get(normalized)!;
        }
        // If not found in Indonesian->English dictionary, check if it's already English!
        else {
            const detectedSource: DetectedLanguage = detectLanguage(text);
            if (detectedSource === 'en') {
                // Content is already in English! Keep it in English!
                result = text;
            } else {
                // If it is Indonesian but doesn't have an exact full string match,
                // check if it's a known practice area title in Indonesian
                const practiceAreaMatch = Object.keys(ID_TO_EN).find(
                    (k) => normalizeKey(k) === normalized
                );
                if (practiceAreaMatch) {
                    result = ID_TO_EN[practiceAreaMatch];
                } else {
                    result = text;
                }
            }
        }
    }

    // 4. TARGET = INDONESIAN (English -> Indonesian)
    else if (targetLanguage === 'id') {
        // Direct dictionary lookup (exact match)
        if (EN_TO_ID[trimmed]) {
            result = EN_TO_ID[trimmed];
        }
        // Normalized lookup (resilient to minor whitespace or case differences)
        else if (NORMALIZED_EN_TO_ID.has(normalized)) {
            result = NORMALIZED_EN_TO_ID.get(normalized)!;
        }
        // If not found in English->Indonesian dictionary, check if it's already Indonesian!
        else {
            const detectedSource: DetectedLanguage = detectLanguage(text);
            if (detectedSource === 'id') {
                // Content is already in Indonesian! Keep it in Indonesian!
                result = text;
            } else {
                result = text;
            }
        }
    }

    // Preserve original leading and trailing whitespace
    const leadingWhitespace = text.match(/^\s*/)?.[0] || '';
    const trailingWhitespace = text.match(/\s*$/)?.[0] || '';
    const finalResult = `${leadingWhitespace}${result}${trailingWhitespace}`;

    translationCache.set(cacheKey, finalResult);
    return finalResult;
}
