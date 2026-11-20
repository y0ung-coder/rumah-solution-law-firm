export interface PracticeArea {
    id: number;
    number: string;
    title: string;
    slug: string;
    description: string;
    scope_items: string[] | null;
    image_url: string | null;
    order: number;
    is_active: boolean;
}

export interface PartnerProfile {
    id: number;
    name: string;
    title: string;
    bio: string;
    philosophy?: string | null;
    education?: string[] | null;
    experience?: string[] | null;
    expertise?: string[] | null;
    image_url?: string | null;
    email?: string | null;
    phone?: string | null;
    linkedin?: string | null;
}

export interface Testimonial {
    id: number;
    client_name: string;
    client_role?: string | null;
    service_category: string;
    quote: string;
    rating: number;
    avatar_url?: string | null;
    is_active: boolean;
}

export interface Article {
    id: number;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    image_url?: string | null;
    read_time: string;
    published_at: string | null;
    is_featured: boolean;
}

export interface Consultation {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    notes?: string | null;
    status: 'pending' | 'reviewed' | 'contacted' | 'closed';
    admin_notes?: string | null;
    created_at: string;
    updated_at: string;
}

export interface SiteSettings {
    site_name?: string;
    firm_abbreviation?: string;
    tagline?: string;
    managing_partner?: string;
    office_address?: string;
    email?: string;
    phone?: string;
    whatsapp?: string;
    whatsapp_display?: string;
    office_hours?: string;
    hero_headline?: string;
    hero_subheadline?: string;
    years_experience?: string;
    cases_handled?: string;
    practice_areas_count?: string;
    client_satisfaction?: string;
    instagram?: string;
    linkedin?: string;
    [key: string]: string | undefined;
}

export interface PageProps {
    auth?: {
        user?: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
    flash?: {
        success?: string | null;
        error?: string | null;
    };
    settings?: SiteSettings;
    csrf_token?: string;
    [key: string]: any;
}
