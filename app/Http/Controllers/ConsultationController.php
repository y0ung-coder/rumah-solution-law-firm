<?php

namespace App\Http\Controllers;

use App\Models\Consultation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        // Anti-spam honeypot
        if ($request->filled('bot_check')) {
            return back()->with('error', 'Permintaan Anda terdeteksi sebagai spam.');
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:150'],
            'phone' => ['required', 'string', 'max:25'],
            'service' => ['required', 'string', 'max:100'],
            'notes' => ['nullable', 'string', 'max:2000'],
        ], [
            'name.required' => 'Nama lengkap wajib diisi.',
            'email.required' => 'Alamat email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'phone.required' => 'Nomor WhatsApp / telepon wajib diisi.',
            'service.required' => 'Pilih salah satu layanan hukum yang dibutuhkan.',
        ]);

        Consultation::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'service' => $validated['service'],
            'notes' => $validated['notes'] ?? null,
            'status' => 'pending',
        ]);

        return back()->with('success', 'Permohonan konsultasi Anda berhasil dikirim. Tim Rumah Solution Law Firm akan segera menghubungi Anda dalam kurun waktu 1x24 jam.');
    }
}
