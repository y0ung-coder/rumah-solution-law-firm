<?php

use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\ConsultationController as AdminConsultationController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PartnerProfileController;
use App\Http\Controllers\Admin\PracticeAreaController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

// Public Website Routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/consultation', [ConsultationController::class, 'store'])->name('consultation.store');

// Admin Authentication Routes
Route::get('/admin/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/admin/login', [AuthController::class, 'login'])->name('admin.login.submit');
Route::post('/admin/logout', [AuthController::class, 'logout'])->name('admin.logout');

// Admin Protected Routes
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    // Consultations Management
    Route::get('/consultations', [AdminConsultationController::class, 'index'])->name('consultations.index');
    Route::put('/consultations/{consultation}', [AdminConsultationController::class, 'update'])->name('consultations.update');
    Route::delete('/consultations/{consultation}', [AdminConsultationController::class, 'destroy'])->name('consultations.destroy');

    // Practice Areas Management
    Route::get('/practice-areas', [PracticeAreaController::class, 'index'])->name('practice-areas.index');
    Route::put('/practice-areas/{practiceArea}', [PracticeAreaController::class, 'update'])->name('practice-areas.update');
    Route::post('/practice-areas/{practiceArea}/toggle', [PracticeAreaController::class, 'toggle'])->name('practice-areas.toggle');

    // Articles Management
    Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
    Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store');
    Route::put('/articles/{article}', [ArticleController::class, 'update'])->name('articles.update');
    Route::delete('/articles/{article}', [ArticleController::class, 'destroy'])->name('articles.destroy');

    // Managing Partner Profile Management
    Route::get('/partner-profile', [PartnerProfileController::class, 'edit'])->name('partner-profile.edit');
    Route::put('/partner-profile', [PartnerProfileController::class, 'update'])->name('partner-profile.update');

    // Site Settings Management
    Route::get('/settings', [SettingController::class, 'edit'])->name('settings.edit');
    Route::post('/settings', [SettingController::class, 'update'])->name('settings.update');
});
