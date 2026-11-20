<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Consultation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ConsultationController extends Controller
{
    public function index(): Response
    {
        $consultations = Consultation::orderBy('created_at', 'desc')->paginate(15);

        return Inertia::render('Admin/Consultations/Index', [
            'consultations' => $consultations,
        ]);
    }

    public function update(Request $request, Consultation $consultation): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'string', 'in:pending,reviewed,contacted,closed'],
            'admin_notes' => ['nullable', 'string', 'max:2000'],
        ]);

        $consultation->update($validated);

        return back()->with('success', 'Status konsultasi berhasil diperbarui.');
    }

    public function destroy(Consultation $consultation): RedirectResponse
    {
        $consultation->delete();

        return back()->with('success', 'Pesan konsultasi berhasil dihapus.');
    }
}
