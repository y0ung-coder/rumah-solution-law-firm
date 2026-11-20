import React from 'react';

interface LaurelBadgeProps {
    text: string;
    light?: boolean;
    className?: string;
}

/**
 * Rumah Solution Law Firm Signature Insignia Badge
 * Distinctive, luxury editorial badge with precision diamond accents and tapered rule lines.
 */
export const LaurelBadge: React.FC<LaurelBadgeProps> = ({ text, light = false, className = '' }) => {
    return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
            {/* Left Tapered Line & Diamond */}
            <div className="flex items-center gap-1.5 shrink-0">
                <span className={`w-5 sm:w-7 h-[1px] ${light ? 'bg-gradient-to-r from-transparent to-[#D6BC97]' : 'bg-gradient-to-r from-transparent to-[#B89458]'}`} />
                <span className="w-1.5 h-1.5 rotate-45 bg-[#D6BC97]" />
            </div>

            {/* Badge Text */}
            <span
                className={`text-xs sm:text-[13px] uppercase tracking-[0.22em] font-medium select-none ${
                    light ? 'text-[#E8D9C0]' : 'text-[#8C6D3B]'
                }`}
            >
                {text}
            </span>

            {/* Right Diamond & Tapered Line */}
            <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#D6BC97]" />
                <span className={`w-5 sm:w-7 h-[1px] ${light ? 'bg-gradient-to-l from-transparent to-[#D6BC97]' : 'bg-gradient-to-l from-transparent to-[#B89458]'}`} />
            </div>
        </div>
    );
};

export const ScalesIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
    <svg
        viewBox="0 0 36 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M18 3V27M11 27H25M7 8H29"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M18 3L16 6H20L18 3Z"
            fill="currentColor"
        />
        {/* Left scale pan */}
        <path
            d="M7 8L3 18H11L7 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M2.5 18C2.5 20.2 4.5 21.5 7 21.5C9.5 21.5 11.5 20.2 11.5 18H2.5Z"
            fill="currentColor"
        />
        {/* Right scale pan */}
        <path
            d="M29 8L25 18H33L29 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M24.5 18C24.5 20.2 26.5 21.5 29 21.5C31.5 21.5 33.5 20.2 33.5 18H24.5Z"
            fill="currentColor"
        />
    </svg>
);
