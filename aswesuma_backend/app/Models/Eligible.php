<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eligible extends Model
{
    use HasFactory;

    protected $table = 'eligible_families';

    protected $fillable = [
        'ref_no',
        'name',
        'address',
        'gn_division',
        'category',
        'aswesuma_eligible'
    ];
}
