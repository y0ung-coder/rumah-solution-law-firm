import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { FileText, Plus, Edit, Trash2, Calendar, Clock, X } from 'lucide-react';
import { Article } from '@/types';

interface ArticlesIndexProps {
    articles: {
        data: Article[];
        links: any[];
        total: number;
    };
}

export default function Index({ articles }: ArticlesIndexProps) {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [editingArticle, setEditingArticle] = useState<Article | null>(null);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Business Law');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [read_time, setReadTime] = useState('5 min read');
    const [is_featured, setIsFeatured] = useState(false);
    const [is_published, setIsPublished] = useState(true);

    const openCreate = () => {
        setEditingArticle(null);
        setTitle('');
        setCategory('Business Law');
        setExcerpt('');
        setContent('');
        setImageUrl('');
        setReadTime('5 min read');
        setIsFeatured(false);
        setIsPublished(true);
        setIsCreateOpen(true);
    };

    const openEdit = (art: Article) => {
        setEditingArticle(art);
        setTitle(art.title);
        setCategory(art.category);
        setExcerpt(art.excerpt);
        setContent(art.content);
        setImageUrl(art.image_url || '');
        setReadTime(art.read_time || '5 min read');
        setIsFeatured(art.is_featured);
        setIsPublished(art.published_at !== null);
        setIsCreateOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            title,
            category,
            excerpt,
            content,
            image_url,
            read_time,
            is_featured,
            is_published,
        };

        if (editingArticle) {
            router.put(`/admin/articles/${editingArticle.id}`, payload, {
                onSuccess: () => setIsCreateOpen(false),
            });
        } else {
            router.post('/admin/articles', payload, {
                onSuccess: () => setIsCreateOpen(false),
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus artikel ini?')) {
            router.delete(`/admin/articles/${id}`);
        }
    };

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return 'Draft';
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <AdminLayout title="Kelola Artikel & Analisis Hukum">
            <Head title="Articles — Admin Rumah Solution Law Firm" />

            <div className="bg-white rounded-sm border border-[#E7E8E5] shadow-xs overflow-hidden">
                <div className="p-6 border-b border-[#E7E8E5] flex items-center justify-between">
                    <div>
                        <h2 className="font-serif text-lg font-bold text-[#172B3A]">
                            Daftar Publikasi Artikel ({articles.total})
                        </h2>
                        <p className="text-xs text-[#777D82]">
                            Artikel edukasi dan analisis yuridis yang tampil di website utama
                        </p>
                    </div>

                    <button
                        onClick={openCreate}
                        className="inline-flex items-center gap-2 bg-[#172B3A] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm hover:bg-[#B89B69] transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Tulis Artikel Baru</span>
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#F8F8F5] text-[#777D82] uppercase tracking-wider text-[10px] border-b border-[#E7E8E5]">
                            <tr>
                                <th className="py-3 px-6">Tanggal</th>
                                <th className="py-3 px-6">Judul Artikel</th>
                                <th className="py-3 px-6">Kategori</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E7E8E5]">
                            {articles.data.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-10 text-center text-xs text-[#777D82]">
                                        Belum ada artikel yang diterbitkan.
                                    </td>
                                </tr>
                            ) : (
                                articles.data.map((art) => (
                                    <tr key={art.id} className="hover:bg-[#F8F8F5]/60 transition-colors">
                                        <td className="py-4 px-6 text-[#777D82]">
                                            {formatDate(art.published_at)}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="font-serif font-bold text-[#172B3A] text-sm max-w-md line-clamp-1">
                                                {art.title}
                                            </div>
                                            <div className="text-[#777D82] text-[11px] line-clamp-1 mt-0.5">
                                                {art.excerpt}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="px-2 py-0.5 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-[#172B3A] font-semibold text-[10px]">
                                                {art.category}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            {art.published_at ? (
                                                <span className="px-2 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                                                    Draft
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-right space-x-2">
                                            <button
                                                onClick={() => openEdit(art)}
                                                className="inline-flex items-center gap-1 text-[#172B3A] font-semibold hover:text-[#B89B69] px-2.5 py-1 bg-[#F8F8F5] rounded-sm border border-[#E7E8E5]"
                                            >
                                                <Edit className="w-3.5 h-3.5" />
                                                <span>Sunting</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(art.id)}
                                                className="inline-flex items-center text-rose-600 hover:text-rose-800 p-1"
                                                title="Hapus Artikel"
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

            {/* Create/Edit Modal */}
            {isCreateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-sm max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#E7E8E5] relative animate-in zoom-in-95 duration-150 max-h-[92vh] overflow-y-auto">
                        <button
                            onClick={() => setIsCreateOpen(false)}
                            className="absolute top-4 right-4 text-[#777D82] hover:text-[#172B3A]"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="font-serif text-xl font-bold text-[#172B3A] mb-4">
                            {editingArticle ? 'Sunting Artikel Hukum' : 'Tulis Artikel Analisis Hukum Baru'}
                        </h3>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Judul Artikel *
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Contoh: Pentingnya Due Diligence Hukum dalam Akuisisi..."
                                    required
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                        Kategori *
                                    </label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                    >
                                        <option value="Legal News">Legal News</option>
                                        <option value="Business Law">Business Law</option>
                                        <option value="Civil Law">Civil Law</option>
                                        <option value="Criminal Law">Criminal Law</option>
                                        <option value="Family Law">Family Law</option>
                                        <option value="Property Law">Property Law</option>
                                        <option value="Legal Education">Legal Education</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                        Estimasi Waktu Baca
                                    </label>
                                    <input
                                        type="text"
                                        value={read_time}
                                        onChange={(e) => setReadTime(e.target.value)}
                                        placeholder="5 min read"
                                        className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    URL Gambar Cover
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
                                    Ringkasan (Excerpt) *
                                </label>
                                <textarea
                                    rows={2}
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    required
                                    placeholder="Ringkasan 1-2 kalimat untuk kartu artikel..."
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-[#172B3A] mb-1">
                                    Konten Lengkap Artikel (HTML didukung) *
                                </label>
                                <textarea
                                    rows={8}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    placeholder="Tuliskan isi artikel hukum di sini (bisa berupa teks biasa atau tag paragraf <p>)..."
                                    className="w-full px-3 py-2 rounded-sm bg-[#F8F8F5] border border-[#E7E8E5] text-xs text-[#25292D] focus:border-[#B89B69] focus:outline-none font-mono"
                                />
                            </div>

                            <div className="flex items-center gap-6 pt-2">
                                <label className="flex items-center gap-2 cursor-pointer text-xs">
                                    <input
                                        type="checkbox"
                                        checked={is_featured}
                                        onChange={(e) => setIsFeatured(e.target.checked)}
                                        className="rounded-sm border-[#E7E8E5] text-[#172B3A] focus:ring-0"
                                    />
                                    <span className="font-semibold text-[#172B3A]">Jadikan Featured Article</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer text-xs">
                                    <input
                                        type="checkbox"
                                        checked={is_published}
                                        onChange={(e) => setIsPublished(e.target.checked)}
                                        className="rounded-sm border-[#E7E8E5] text-[#172B3A] focus:ring-0"
                                    />
                                    <span className="font-semibold text-[#172B3A]">Terbitkan Sekarang (Publish)</span>
                                </label>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E8E5]">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateOpen(false)}
                                    className="px-4 py-2 rounded-sm text-xs text-[#777D82] hover:text-[#172B3A]"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-sm bg-[#172B3A] text-white text-xs font-semibold hover:bg-[#B89B69] transition-colors"
                                >
                                    {editingArticle ? 'Simpan Perubahan' : 'Terbitkan Artikel'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
