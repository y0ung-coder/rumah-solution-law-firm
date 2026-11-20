<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticeArea extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'title',
        'slug',
        'description',
        'scope_items',
        'image_url',
        'order',
        'is_active',
    ];

    protected $casts = [
        'scope_items' => 'array',
        'is_active' => 'boolean',
    ];
}
