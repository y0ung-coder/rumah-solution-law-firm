import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import { Lock, Mail, ArrowRight, Shield } from 'lucide-react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: 'admin@solutionlawfirm.com',
        password: 'admin12345',
        remember: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <div className="min-h-screen bg-[#F8F8F5] flex flex-col justify-center items-center p-6 text-[#25292D]">
            <Head title="Admin Login — Rumah Solution Law Firm" />

            <div className="w-full max-w-md">
                {/* Brand Header */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-sm bg-[#172B3A] text-white flex items-center justify-center font-serif text-xl font-bold mx-auto mb-4 shadow-sm">
                        SLF
                    </div>
                    <h1 className="font-serif text-2xl font-bold text-[#172B3A]">
                        RUMAH SOLUTION LAW FIRM
                    </h1>
                    <p className="text-xs uppercase tracking-widest text-[#777D82] mt-1 font-semibold">
                        Admin Management Portal
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white p-8 rounded-sm border border-[#E7E8E5] shadow-lg">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#B89B69] uppercase tracking-wider mb-6 pb-4 border-b border-[#E7E8E5]">
                        <Shield className="w-4 h-4" />
                        <span>Secure Authentication</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="w-4 h-4 text-[#777D82] absolute left-3.5 top-3.5" />
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-sm text-[#25292D] focus:border-[#B89B69] focus:outline-none transition-colors"
                                />
                            </div>
                            {errors.email && (
                                <div className="text-xs text-rose-600 mt-1">{errors.email}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="w-4 h-4 text-[#777D82] absolute left-3.5 top-3.5" />
                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-sm text-[#25292D] focus:border-[#B89B69] focus:outline-none transition-colors"
                                />
                            </div>
                            {errors.password && (
                                <div className="text-xs text-rose-600 mt-1">{errors.password}</div>
                            )}
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded-sm border-[#E7E8E5] text-[#172B3A] focus:ring-0"
                                />
                                <span className="text-[#777D82]">Ingat saya</span>
                            </label>

                            <span className="text-[11px] text-[#B89B69]">Default: admin@solutionlawfirm.com</span>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#172B3A] text-white text-xs uppercase tracking-widest font-semibold py-3.5 rounded-sm hover:bg-[#B89B69] transition-colors disabled:opacity-50 shadow-sm"
                        >
                            <span>{processing ? 'Memverifikasi...' : 'Masuk ke Portal Admin'}</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </div>

                <div className="text-center mt-6 text-xs text-[#777D82]">
                    <a href="/" className="hover:text-[#172B3A] underline underline-offset-4">
                        &larr; Kembali ke Beranda Website
                    </a>
                </div>
            </div>
        </div>
    );
}
