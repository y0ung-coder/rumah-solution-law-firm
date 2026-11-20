/**
 * Accurate Language Detector for Indonesian and English
 * Rumah Solution Law Firm Translation System
 */

export type DetectedLanguage = 'id' | 'en' | 'neutral';

// Indonesian stop words, particles, and distinctive affixes
const ID_WORDS = new Set([
    'dan', 'yang', 'di', 'ke', 'dari', 'ini', 'itu', 'untuk', 'dengan', 'pada', 
    'adalah', 'kami', 'anda', 'hukum', 'perkara', 'advokat', 'konsultasi', 'layanan', 
    'tentang', 'hak', 'klien', 'pengadilan', 'putusan', 'pasal', 'sengketa', 'gugatan', 
    'tata', 'cara', 'atau', 'sebagai', 'oleh', 'dalam', 'bisa', 'dapat', 'akan', 
    'telah', 'sudah', 'secara', 'karena', 'jika', 'bila', 'saat', 'agar', 'antara', 
    'melalui', 'seluruh', 'setiap', 'lebih', 'sangat', 'terpercaya', 'solusi', 'kantor', 
    'bersama', 'jadwal', 'jadwalkan', 'bidang', 'tahapan', 'pertanyaan', 'jawaban', 
    'hubungi', 'kirim', 'baca', 'selengkapnya', 'ulasan', 'testimoni', 'artikel', 
    'pimpinan', 'pendiri', 'pengalaman', 'keahlian', 'pendidikan', 'berpengalaman',
    'serta', 'bagi', 'terhadap', 'terkait', 'hingga', 'pemeriksaan', 'penyelesaian'
]);

// English stop words, particles, and distinctive markers
const EN_WORDS = new Set([
    'the', 'and', 'to', 'of', 'a', 'in', 'is', 'that', 'for', 'you', 
    'it', 'with', 'on', 'as', 'are', 'at', 'this', 'our', 'we', 'your', 
    'legal', 'law', 'firm', 'attorney', 'case', 'rights', 'client', 'clients', 
    'consultation', 'practice', 'about', 'services', 'all', 'from', 'by', 'an', 
    'be', 'have', 'or', 'which', 'will', 'an', 'would', 'there', 'their', 
    'trusted', 'excellence', 'matter', 'priority', 'book', 'schedule', 'today', 
    'solutions', 'tailored', 'needs', 'learn', 'more', 'how', 'works', 'common', 
    'questions', 'answers', 'insights', 'stories', 'call', 'talk', 'read', 
    'overview', 'dispute', 'litigation', 'corporate', 'civil', 'criminal'
]);

/**
 * Strips HTML tags, punctuation, and returns clean lowercase tokens
 */
function tokenize(text: string): string[] {
    if (!text) return [];
    // Remove HTML tags
    const cleanText = text.replace(/<[^>]*>/g, ' ');
    // Match word tokens (letters and numbers)
    const matches = cleanText.toLowerCase().match(/[\p{L}\p{N}]+/gu);
    return matches || [];
}

/**
 * Automatically detects the original language of a given text string.
 * Returns 'id' for Indonesian, 'en' for English, or 'neutral' for ambiguous/brand text.
 */
export function detectLanguage(text: string): DetectedLanguage {
    if (!text || typeof text !== 'string') {
        return 'neutral';
    }

    const tokens = tokenize(text);
    if (tokens.length === 0) {
        return 'neutral';
    }

    let idScore = 0;
    let enScore = 0;

    for (const token of tokens) {
        if (ID_WORDS.has(token)) {
            idScore += 2;
        } else if (
            // Indonesian affix heuristics
            token.startsWith('ber') || 
            token.startsWith('men') || 
            token.startsWith('mem') || 
            token.startsWith('peng') || 
            token.startsWith('per') || 
            token.endsWith('kan') || 
            token.endsWith('nya')
        ) {
            idScore += 1;
        }

        if (EN_WORDS.has(token)) {
            enScore += 2;
        } else if (
            // English suffix heuristics
            token.endsWith('ing') || 
            token.endsWith('tion') || 
            token.endsWith('ment') || 
            token.endsWith('able') || 
            token.endsWith('ized')
        ) {
            enScore += 1;
        }
    }

    // Explicit proper nouns should not skew language
    if (idScore === 0 && enScore === 0) {
        return 'neutral';
    }

    if (idScore > enScore) {
        return 'id';
    } else if (enScore > idScore) {
        return 'en';
    }

    return 'neutral';
}
