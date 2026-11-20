import React, { ReactNode } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import {
    LayoutDashboard,
    MessageSquare,
    Briefcase,
    FileText,
    UserCheck,
    Settings,
    LogOut,
    ExternalLink,
    CheckCircle2,
    AlertCircle,
} from 'lucide-react';
import { PageProps } from '@/types';

interface AdminLayoutProps {
    children: ReactNode;
    title?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
    const { auth, flash } = usePage<PageProps>().props;

    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/admin/logout');
    };

    const currentUrl = window.location.pathname;

    const navItems = [
        { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { label: 'Consultations', href: '/admin/consultations', icon: MessageSquare },
        { label: 'Practice Areas', href: '/admin/practice-areas', icon: Briefcase },
        { label: 'Articles', href: '/admin/articles', icon: FileText },
        { label: 'Managing Partner', href: '/admin/partner-profile', icon: UserCheck },
        { label: 'Website Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#F4F5F7] flex flex-col">
            {/* Top Navigation Bar */}
            <header className="bg-[#172B3A] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-sm bg-[#B89B69] text-white flex items-center justify-center font-serif text-sm font-bold">
                            SLF
                        </div>
                        <span className="font-serif text-base font-bold tracking-wide">
                            SLF Admin Portal
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-xs">
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#E7E8E5] hover:text-[#B89B69] px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 transition-colors"
                    >
                        <span>View Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <div className="hidden sm:block text-[#E7E8E5]/80">
                        {auth?.user?.name || 'Administrator'}
                    </div>

                    <form onSubmit={handleLogout}>
                        <button
                            type="submit"
                            className="inline-flex items-center gap-1.5 text-rose-300 hover:text-white px-3 py-1.5 rounded-sm hover:bg-rose-900/40 transition-colors"
                        >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Logout</span>
                        </button>
                    </form>
                </div>
            </header>

            <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto px-4 md:px-6 py-8 gap-8">
                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="bg-white rounded-sm border border-[#E7E8E5] p-3 shadow-xs sticky top-24">
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-[#777D82] px-3 py-2">
                            Menu Navigasi
                        </div>
                        <nav className="space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive =
                                    item.href === '/admin'
                                        ? currentUrl === '/admin'
                                        : currentUrl.startsWith(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs font-medium transition-colors ${
                                            isActive
                                                ? 'bg-[#172B3A] text-white'
                                                : 'text-[#25292D] hover:bg-[#F8F8F5] hover:text-[#172B3A]'
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#B89B69]' : 'text-[#777D82]'}`} />
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1">
                    {/* Flash messages */}
                    {flash?.success && (
                        <div className="mb-6 p-4 rounded-sm bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3 shadow-xs">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{flash.success}</span>
                        </div>
                    )}

                    {flash?.error && (
                        <div className="mb-6 p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-3 shadow-xs">
                            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            <span>{flash.error}</span>
                        </div>
                    )}

                    {title && (
                        <div className="mb-6">
                            <h1 className="font-serif text-2xl font-bold text-[#172B3A]">
                                {title}
                            </h1>
                        </div>
                    )}

                    {children}
                </main>
            </div>
        </div>
    );
};
