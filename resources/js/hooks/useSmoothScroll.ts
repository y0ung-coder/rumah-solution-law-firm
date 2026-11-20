import { useEffect } from 'react';

/**
 * Bulletproof smooth scroll handler for in-page navigation.
 * Uses native browser smooth scrolling and safe event delegation.
 * Does not mutate the DOM tree, preventing React reconciliation conflicts.
 */
export const useSmoothScroll = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleAnchorClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement)?.closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                const targetEl = document.querySelector(href);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    // Update URL hash without jumping
                    window.history.pushState(null, '', href);
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);
};
