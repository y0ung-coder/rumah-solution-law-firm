<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function index(): Response
    {
        $articles = Article::orderBy('published_at', 'desc')->paginate(10);

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category' => ['required', 'string'],
            'excerpt' => ['required', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'image_url' => ['nullable', 'url'],
            'read_time' => ['nullable', 'string'],
            'is_featured' => ['boolean'],
            'is_published' => ['boolean'],
        ]);

        $slug = Str::slug($validated['title']) . '-' . Str::random(5);

        Article::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'category' => $validated['category'],
            'excerpt' => $validated['excerpt'],
            'content' => $validated['content'],
            'image_url' => $validated['image_url'] ?? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
            'read_time' => $validated['read_time'] ?: '5 min read',
            'is_featured' => $request->boolean('is_featured'),
            'published_at' => $request->boolean('is_published') ? now() : null,
        ]);

        return back()->with('success', 'Artikel berhasil diterbitkan.');
    }

    public function update(Request $request, Article $article): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category' => ['required', 'string'],
            'excerpt' => ['required', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'image_url' => ['nullable', 'url'],
            'read_time' => ['nullable', 'string'],
            'is_featured' => ['boolean'],
            'is_published' => ['boolean'],
        ]);

        $article->update([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'excerpt' => $validated['excerpt'],
            'content' => $validated['content'],
            'image_url' => $validated['image_url'] ?: $article->image_url,
            'read_time' => $validated['read_time'] ?: $article->read_time,
            'is_featured' => $request->boolean('is_featured'),
            'published_at' => $request->boolean('is_published') ? ($article->published_at ?? now()) : null,
        ]);

        return back()->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy(Article $article): RedirectResponse
    {
        $article->delete();

        return back()->with('success', 'Artikel berhasil dihapus.');
    }
}
