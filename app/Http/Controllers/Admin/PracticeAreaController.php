<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PracticeArea;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PracticeAreaController extends Controller
{
    public function index(): Response
    {
        $practiceAreas = PracticeArea::orderBy('order')->get();

        return Inertia::render('Admin/PracticeAreas/Index', [
            'practiceAreas' => $practiceAreas,
        ]);
    }

    public function update(Request $request, PracticeArea $practiceArea): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'scope_items' => ['nullable', 'array'],
            'image_url' => ['nullable', 'url'],
            'is_active' => ['boolean'],
        ]);

        $practiceArea->update($validated);

        return back()->with('success', 'Layanan hukum berhasil diperbarui.');
    }

    public function toggle(PracticeArea $practiceArea): RedirectResponse
    {
        $practiceArea->update(['is_active' => !$practiceArea->is_active]);

        return back()->with('success', 'Status visibilitas layanan berhasil diubah.');
    }
}
