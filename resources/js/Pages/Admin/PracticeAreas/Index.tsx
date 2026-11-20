import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { Briefcase, Edit, Eye, EyeOff, Check, X } from 'lucide-react';
import { PracticeArea } from '@/types';

interface PracticeAreasIndexProps {
    practiceAreas: PracticeArea[];
}

export default function Index({ practiceAreas }: PracticeAreasIndexProps) {
    const [editingArea, setEditingArea] = useState<PracticeArea | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [scopeText, setScopeText] = useState('');

    const startEdit = (area: PracticeArea) => {
        setEditingArea(area);
        setTitle(area.title);
        setDescription(area.description);
        setImageUrl(area.image_url || '');
        setScopeText((area.scope_items || []).join('\n'));
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingArea) return;

        const scopeItems = scopeText
            .split('\n')
            .map((s) => s.trim())
            .filter((s) => s.length > 0);

        router.put(
            `/admin/practice-areas/${editingArea.id}`,
            {
                title,
                description,
                image_url,
                scope_items: scopeItems,
                is_active: editingArea.is_active,
            },
            {
                onSuccess: () => {
                    setEditingArea(null);
                },
            }
        );
    };

    const handleToggle = (id: number) => {
        router.post(`/admin/practice-areas/${id}/toggle`);
    };

    return (
        <AdminLayout title="Kelola Bidang Layanan Praktik Hukum">
            <Head title="Practice Areas — Admin Rumah Solution Law Firm" />

            <div className="bg-white rounded-sm border border-[#E7E8E5] shadow-xs overflow-hidden">
                <div className="p-6 border-b border-[#E7E8E5]">
                    <h2 className="font-serif text-lg font-bold text-[#172B3A]">
                        8 Kategori Praktik Hukum Rumah Solution Law Firm
                    </h2>
                    <p className="text-xs text-[#777D82]">
                        Sesuaikan deskripsi, ruang lingkup cakupan layanan, foto arsitektur pendukung, atau visibilitas di website
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#F8F8F5] text-[#777D82] uppercase tracking-wider text-[10px] border-b border-[#E7E8E5]">
                            <tr>
                                <th className="py-3 px-6">No.</th>
                                <th className="py-3 px-6">Nama Layanan</th>
                                <th className="py-3 px-6">Deskripsi</th>
                                <th className="py-3 px-6">Cakupan</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E7E8E5]">
                            {practiceAreas.map((area) => (
                                <tr key={area.id} className="hover:bg-[#F8F8F5]/60 transition-colors">
                                    <td className="py-4 px-6 font-mono font-bold text-[#B89B69]">
                                        {area.number}
                                    </td>
                                    <td className="py-4 px-6 font-serif font-bold text-sm text-[#172B3A]">
                                        {area.title}
                                    </td>
                                    <td className="py-4 px-6 text-[#777D82] max-w-xs truncate">
                                        {area.description}
                                    </td>
                                    <td className="py-4 px-6 text-[#25292D]">
                                        {area.scope_items?.length || 0} item cakupan
                                    </td>
                                    <td className="py-4 px-6">
                                        {area.is_active ? (
                                            <span className="px-2 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                                                Nonaktif
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6 text-right space-x-2">
                                        <button
                                            onClick={() => startEdit(area)}
                                            className="inline-flex items-center gap-1 text-[#172B3A] font-semibold hover:text-[#B89B69] px-2.5 py-1 bg-[#F8F8F5] rounded-sm border border-[#E7E8E5]"
                                        >
                                            <Edit className="w-3.5 h-3.5" />
                                            <span>Sunting</span>
                                        </button>

                                        <button
                                            onClick={() => handleToggle(area.id)}
                                            className="inline-flex items-center text-[#777D82] hover:text-[#172B3A] p-1"
                                            title="Ubah Visibilitas"
                                        >
                                            {area.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit Modal */}
            {editingArea && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-sm max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#E7E8E5] relative animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setEditingArea(null)}
                            className="absolute top-4 right-4 text-[#777D82] hover:text-[#172B3A]"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="font-serif text-xl font-bold text-[#172B3A] mb-4">
                            Sunting Layanan: {editingArea.number}. {editingArea.title}
                        </h3>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Judul Layanan Hukum
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Deskripsi Layanan
                                </label>
                                <textarea
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    URL Foto / Gambar Ilustrasi
                                </label>
                                <input
                                    type="url"
                                    value={image_url}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    placeholder="https://images.unsplash.com/..."
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Cakupan Layanan (Satu baris per poin cakupan)
                                </label>
                                <textarea
                                    rows={5}
                                    value={scopeText}
                                    onChange={(e) => setScopeText(e.target.value)}
                                    placeholder="Contoh:&#10;Gugatan Perbuatan Melawan Hukum (PMH)&#10;Sengketa Wanprestasi Kontrak"
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] font-mono focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E8E5]">
                                <button
                                    type="button"
                                    onClick={() => setEditingArea(null)}
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
