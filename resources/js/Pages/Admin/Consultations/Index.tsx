import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { MessageSquare, Trash2, CheckCircle2, Clock, Eye, Phone, Mail, X } from 'lucide-react';
import { Consultation } from '@/types';

interface ConsultationsIndexProps {
    consultations: {
        data: Consultation[];
        links: any[];
        total: number;
    };
}

export default function Index({ consultations }: ConsultationsIndexProps) {
    const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);
    const [status, setStatus] = useState<string>('pending');
    const [adminNotes, setAdminNotes] = useState<string>('');

    const openModal = (c: Consultation) => {
        setSelectedConsultation(c);
        setStatus(c.status);
        setAdminNotes(c.admin_notes || '');
    };

    const handleUpdateStatus = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedConsultation) return;

        router.put(
            `/admin/consultations/${selectedConsultation.id}`,
            {
                status,
                admin_notes: adminNotes,
            },
            {
                onSuccess: () => {
                    setSelectedConsultation(null);
                },
            }
        );
    };

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus pesan konsultasi ini?')) {
            router.delete(`/admin/consultations/${id}`);
        }
    };

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getStatusBadge = (st: string) => {
        switch (st) {
            case 'pending':
                return <span className="px-2.5 py-1 rounded-sm bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">Pending</span>;
            case 'reviewed':
                return <span className="px-2.5 py-1 rounded-sm bg-blue-100 text-blue-800 text-[10px] font-bold uppercase">Reviewed</span>;
            case 'contacted':
                return <span className="px-2.5 py-1 rounded-sm bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">Contacted</span>;
            case 'closed':
                return <span className="px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">Closed</span>;
            default:
                return null;
        }
    };

    return (
        <AdminLayout title="Kelola Permohonan Konsultasi">
            <Head title="Consultations — Admin Rumah Solution Law Firm" />

            <div className="bg-white rounded-sm border border-[#E7E8E5] shadow-xs overflow-hidden">
                <div className="p-6 border-b border-[#E7E8E5] flex items-center justify-between">
                    <div>
                        <h2 className="font-serif text-lg font-bold text-[#172B3A]">
                            Daftar Klien Masuk ({consultations.total})
                        </h2>
                        <p className="text-xs text-[#777D82]">
                            Semua permohonan konsultasi yang masuk melalui website
                        </p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#F8F8F5] text-[#777D82] uppercase tracking-wider text-[10px] border-b border-[#E7E8E5]">
                            <tr>
                                <th className="py-3 px-6">Tanggal</th>
                                <th className="py-3 px-6">Nama Klien</th>
                                <th className="py-3 px-6">Kontak</th>
                                <th className="py-3 px-6">Layanan Hukum</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E7E8E5]">
                            {consultations.data.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-12 text-center text-xs text-[#777D82]">
                                        Belum ada permohonan konsultasi yang tercatat.
                                    </td>
                                </tr>
                            ) : (
                                consultations.data.map((c) => (
                                    <tr key={c.id} className="hover:bg-[#F8F8F5]/60 transition-colors">
                                        <td className="py-4 px-6 text-[#777D82]">
                                            {formatDate(c.created_at)}
                                        </td>
                                        <td className="py-4 px-6 font-semibold text-[#172B3A]">
                                            {c.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1.5 text-[#25292D]">
                                                <Phone className="w-3 h-3 text-[#B89B69]" />
                                                <span>{c.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[#777D82] text-[11px] mt-0.5">
                                                <Mail className="w-3 h-3 text-[#777D82]" />
                                                <span>{c.email}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-[#25292D] font-medium">
                                            {c.service}
                                        </td>
                                        <td className="py-4 px-6">
                                            {getStatusBadge(c.status)}
                                        </td>
                                        <td className="py-4 px-6 text-right space-x-2">
                                            <button
                                                onClick={() => openModal(c)}
                                                className="inline-flex items-center gap-1 text-[#172B3A] font-semibold hover:text-[#B89B69] px-2.5 py-1 bg-[#F8F8F5] rounded-sm border border-[#E7E8E5]"
                                            >
                                                <Eye className="w-3.5 h-3.5" />
                                                <span>Tinjau</span>
                                            </button>

                                            <button
                                                onClick={() => handleDelete(c.id)}
                                                className="inline-flex items-center text-rose-600 hover:text-rose-800 p-1 rounded-sm"
                                                title="Hapus"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Detail / Status Update */}
            {selectedConsultation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-sm max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#E7E8E5] relative animate-in zoom-in-95 duration-150">
                        <button
                            onClick={() => setSelectedConsultation(null)}
                            className="absolute top-4 right-4 text-[#777D82] hover:text-[#172B3A]"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="font-serif text-xl font-bold text-[#172B3A] mb-4">
                            Detail Permohonan Konsultasi
                        </h3>

                        <div className="space-y-4 text-xs mb-6">
                            <div className="p-3 bg-[#F8F8F5] rounded-sm space-y-1.5 border border-[#E7E8E5]">
                                <div>
                                    <span className="text-[#777D82]">Nama Klien:</span>{' '}
                                    <strong className="text-[#172B3A]">{selectedConsultation.name}</strong>
                                </div>
                                <div>
                                    <span className="text-[#777D82]">Email:</span>{' '}
                                    <a href={`mailto:${selectedConsultation.email}`} className="text-[#172B3A] underline">
                                        {selectedConsultation.email}
                                    </a>
                                </div>
                                <div>
                                    <span className="text-[#777D82]">Nomor Telepon:</span>{' '}
                                    <a
                                        href={`https://wa.me/${selectedConsultation.phone.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-emerald-700 font-bold underline"
                                    >
                                        {selectedConsultation.phone} (Hubungi via WA)
                                    </a>
                                </div>
                                <div>
                                    <span className="text-[#777D82]">Layanan:</span>{' '}
                                    <span className="font-semibold text-[#172B3A]">{selectedConsultation.service}</span>
                                </div>
                                <div>
                                    <span className="text-[#777D82]">Waktu Masuk:</span>{' '}
                                    <span>{formatDate(selectedConsultation.created_at)}</span>
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-[#172B3A] mb-1">
                                    Catatan Kasus dari Klien:
                                </label>
                                <div className="p-3 bg-[#F8F8F5] rounded-sm text-[#25292D] border border-[#E7E8E5] leading-relaxed max-h-40 overflow-y-auto">
                                    {selectedConsultation.notes || 'Tidak ada catatan tambahan.'}
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleUpdateStatus} className="space-y-4 pt-4 border-t border-[#E7E8E5]">
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Ubah Status Permohonan
                                </label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                >
                                    <option value="pending">Pending (Menunggu Tanggapan)</option>
                                    <option value="reviewed">Reviewed (Sedang Dianalisis)</option>
                                    <option value="contacted">Contacted (Sudah Dihubungi)</option>
                                    <option value="closed">Closed (Selesai/Ditutup)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Catatan Internal Admin (Opsional)
                                </label>
                                <textarea
                                    rows={2}
                                    value={adminNotes}
                                    onChange={(e) => setAdminNotes(e.target.value)}
                                    placeholder="Contoh: Sudah dijadwalkan sesi meeting Zoom hari Jumat..."
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setSelectedConsultation(null)}
                                    className="px-4 py-2 rounded-sm text-xs text-[#777D82] hover:text-[#172B3A]"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-sm bg-[#172B3A] text-white text-xs font-semibold hover:bg-[#B89B69] transition-colors"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
