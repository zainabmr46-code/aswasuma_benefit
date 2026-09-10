<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;



class PovertyCategory extends Model
{
    use HasFactory;
    protected $table = 'poverty_categories';
    protected $fillable = [
        'name',
        'code',
        'monthly_amount_min',
        'monthly_amount_max',
        'duration_months',

    ];

    
}
