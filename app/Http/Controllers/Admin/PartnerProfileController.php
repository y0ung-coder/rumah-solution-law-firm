<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PartnerProfile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PartnerProfileController extends Controller
{
    public function edit(): Response
    {
        $partner = PartnerProfile::first() ?? new PartnerProfile();

        return Inertia::render('Admin/PartnerProfile/Edit', [
            'partner' => $partner,
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'title' => ['required', 'string', 'max:255'],
            'bio' => ['required', 'string'],
            'philosophy' => ['nullable', 'string'],
            'education' => ['nullable', 'array'],
            'experience' => ['nullable', 'array'],
            'expertise' => ['nullable', 'array'],
            'image_url' => ['nullable', 'url'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable', 'string'],
            'linkedin' => ['nullable', 'url'],
        ]);

        $partner = PartnerProfile::first();
        if ($partner) {
            $partner->update($validated);
        } else {
            PartnerProfile::create($validated);
        }

        return back()->with('success', 'Profil Managing Partner berhasil diperbarui.');
    }
}
