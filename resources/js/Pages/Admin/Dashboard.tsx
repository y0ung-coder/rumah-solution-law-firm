import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { MessageSquare, Briefcase, FileText, Clock, ArrowRight, UserCheck, CheckCircle } from 'lucide-react';
import { Consultation } from '@/types';

interface DashboardProps {
    stats: {
        total_consultations: number;
        pending_consultations: number;
        total_articles: number;
        total_practice_areas: number;
        total_testimonials: number;
    };
    recentConsultations: Consultation[];
}

export default function Dashboard({ stats, recentConsultations }: DashboardProps) {
    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending':
                return <span className="px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">Pending</span>;
            case 'reviewed':
                return <span className="px-2 py-0.5 rounded-sm bg-blue-100 text-blue-800 text-[10px] font-bold uppercase">Reviewed</span>;
            case 'contacted':
                return <span className="px-2 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">Contacted</span>;
            case 'closed':
                return <span className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">Closed</span>;
            default:
                return null;
        }
    };

    return (
        <AdminLayout title="Ringkasan Operasional Dashboard">
            <Head title="Dashboard — Admin Rumah Solution Law Firm" />

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-sm border border-[#E7E8E5] shadow-xs">
                    <div className="flex items-center justify-between text-[#777D82] text-xs uppercase tracking-wider mb-2">
                        <span>Permohonan Konsultasi</span>
                        <MessageSquare className="w-4 h-4 text-[#B89B69]" />
                    </div>
                    <div className="font-serif text-3xl font-bold text-[#172B3A]">
                        {stats.total_consultations}
                    </div>
                    <div className="text-[11px] text-amber-600 font-medium mt-1">
                        {stats.pending_consultations} permohonan baru menunggu
                    </div>
                </div>

                <div className="bg-white p-6 rounded-sm border border-[#E7E8E5] shadow-xs">
                    <div className="flex items-center justify-between text-[#777D82] text-xs uppercase tracking-wider mb-2">
                        <span>Layanan Praktik Hukum</span>
                        <Briefcase className="w-4 h-4 text-[#B89B69]" />
                    </div>
                    <div className="font-serif text-3xl font-bold text-[#172B3A]">
                        {stats.total_practice_areas}
                    </div>
                    <div className="text-[11px] text-[#777D82] mt-1">
                        Kategori aktif terkonfigurasi
                    </div>
                </div>

                <div className="bg-white p-6 rounded-sm border border-[#E7E8E5] shadow-xs">
                    <div className="flex items-center justify-between text-[#777D82] text-xs uppercase tracking-wider mb-2">
                        <span>Artikel & Analisis</span>
                        <FileText className="w-4 h-4 text-[#B89B69]" />
                    </div>
                    <div className="font-serif text-3xl font-bold text-[#172B3A]">
                        {stats.total_articles}
                    </div>
                    <div className="text-[11px] text-[#777D82] mt-1">
                        Artikel edukasi terbit
                    </div>
                </div>

                <div className="bg-white p-6 rounded-sm border border-[#E7E8E5] shadow-xs">
                    <div className="flex items-center justify-between text-[#777D82] text-xs uppercase tracking-wider mb-2">
                        <span>Status Managing Partner</span>
                        <UserCheck className="w-4 h-4 text-[#B89B69]" />
                    </div>
                    <div className="font-serif text-lg font-bold text-[#172B3A] truncate">
                        Adv. Samuel Tambunan
                    </div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">
                        Profil terverifikasi aktif
                    </div>
                </div>
            </div>

            {/* Recent Consultations Table */}
            <div className="bg-white rounded-sm border border-[#E7E8E5] shadow-xs overflow-hidden mb-8">
                <div className="p-6 border-b border-[#E7E8E5] flex items-center justify-between">
                    <div>
                        <h2 className="font-serif text-lg font-bold text-[#172B3A]">
                            Permohonan Konsultasi Terbaru
                        </h2>
                        <p className="text-xs text-[#777D82]">
                            Klien yang menghubungi melalui formulir website resmi
                        </p>
                    </div>

                    <Link
                        href="/admin/consultations"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#172B3A] hover:text-[#B89B69] transition-colors"
                    >
                        <span>Lihat Semua</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#F8F8F5] text-[#777D82] uppercase tracking-wider text-[10px] border-b border-[#E7E8E5]">
                            <tr>
                                <th className="py-3 px-6">Tanggal</th>
                                <th className="py-3 px-6">Nama Klien</th>
                                <th className="py-3 px-6">Kontak</th>
                                <th className="py-3 px-6">Layanan</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E7E8E5]">
                            {recentConsultations.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-8 text-center text-xs text-[#777D82]">
                                        Belum ada permohonan konsultasi masuk.
                                    </td>
                                </tr>
                            ) : (
                                recentConsultations.map((c) => (
                                    <tr key={c.id} className="hover:bg-[#F8F8F5]/60 transition-colors">
                                        <td className="py-4 px-6 text-[#777D82]">
                                            {formatDate(c.created_at)}
                                        </td>
                                        <td className="py-4 px-6 font-semibold text-[#172B3A]">
                                            {c.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-[#25292D]">{c.phone}</div>
                                            <div className="text-[#777D82] text-[11px]">{c.email}</div>
                                        </td>
                                        <td className="py-4 px-6 text-[#25292D]">
                                            {c.service}
                                        </td>
                                        <td className="py-4 px-6">
                                            {getStatusBadge(c.status)}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <Link
                                                href="/admin/consultations"
                                                className="text-[#172B3A] font-semibold hover:text-[#B89B69] underline underline-offset-2"
                                            >
                                                Tinjau
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                    href="/admin/practice-areas"
                    className="p-6 bg-white rounded-sm border border-[#E7E8E5] hover:border-[#B89B69] transition-all duration-300 shadow-xs group"
                >
                    <Briefcase className="w-6 h-6 text-[#172B3A] group-hover:text-[#B89B69] transition-colors mb-3" />
                    <h3 className="font-serif text-base font-bold text-[#172B3A] mb-1">
                        Kelola Layanan Hukum
                    </h3>
                    <p className="text-xs text-[#777D82]">
                        Ubah deskripsi, cakupan pendampingan, atau urutan tampilan 8 bidang praktik hukum.
                    </p>
                </Link>

                <Link
                    href="/admin/articles"
                    className="p-6 bg-white rounded-sm border border-[#E7E8E5] hover:border-[#B89B69] transition-all duration-300 shadow-xs group"
                >
                    <FileText className="w-6 h-6 text-[#172B3A] group-hover:text-[#B89B69] transition-colors mb-3" />
                    <h3 className="font-serif text-base font-bold text-[#172B3A] mb-1">
                        Kelola Artikel Hukum
                    </h3>
                    <p className="text-xs text-[#777D82]">
                        Terbitkan artikel analisis yuridis baru atau sunting artikel yang sudah ada.
                    </p>
                </Link>

                <Link
                    href="/admin/settings"
                    className="p-6 bg-white rounded-sm border border-[#E7E8E5] hover:border-[#B89B69] transition-all duration-300 shadow-xs group"
                >
                    <CheckCircle className="w-6 h-6 text-[#172B3A] group-hover:text-[#B89B69] transition-colors mb-3" />
                    <h3 className="font-serif text-base font-bold text-[#172B3A] mb-1">
                        Konfigurasi Website
                    </h3>
                    <p className="text-xs text-[#777D82]">
                        Perbarui nomor WhatsApp, alamat SCBD, email resmi, serta angka statistik.
                    </p>
                </Link>
            </div>
        </AdminLayout>
    );
}
