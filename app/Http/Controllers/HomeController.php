<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\PartnerProfile;
use App\Models\PracticeArea;
use App\Models\SiteSetting;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $practiceAreas = PracticeArea::where('is_active', true)
            ->orderBy('order')
            ->get();

        $partnerProfile = PartnerProfile::first();

        $testimonials = Testimonial::where('is_active', true)
            ->orderBy('id', 'desc')
            ->get();

        $articles = Article::whereNotNull('published_at')
            ->orderBy('is_featured', 'desc')
            ->orderBy('published_at', 'desc')
            ->take(6)
            ->get();

        $settings = SiteSetting::pluck('value', 'key')->toArray();

        return Inertia::render('Home', [
            'practiceAreas' => $practiceAreas,
            'partnerProfile' => $partnerProfile,
            'testimonials' => $testimonials,
            'articles' => $articles,
            'siteSettings' => $settings,
        ]);
    }
}
