<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Consultation;
use App\Models\PracticeArea;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $stats = [
            'total_consultations' => Consultation::count(),
            'pending_consultations' => Consultation::where('status', 'pending')->count(),
            'total_articles' => Article::count(),
            'total_practice_areas' => PracticeArea::count(),
            'total_testimonials' => Testimonial::count(),
        ];

        $recentConsultations = Consultation::orderBy('created_at', 'desc')
            ->take(6)
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentConsultations' => $recentConsultations,
        ]);
    }
}
