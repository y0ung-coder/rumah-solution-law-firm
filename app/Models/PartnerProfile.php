<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'bio',
        'philosophy',
        'education',
        'experience',
        'expertise',
        'image_url',
        'email',
        'phone',
        'linkedin',
    ];

    protected $casts = [
        'education' => 'array',
        'experience' => 'array',
        'expertise' => 'array',
    ];
}
