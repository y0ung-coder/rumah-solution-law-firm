<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{
    public function edit(): Response
    {
        $settings = SiteSetting::pluck('value', 'key')->toArray();

        return Inertia::render('Admin/Settings/Edit', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $data = $request->except(['_token']);

        foreach ($data as $key => $value) {
            SiteSetting::set($key, (string) $value);
        }

        return back()->with('success', 'Pengaturan website berhasil disimpan.');
    }
}
