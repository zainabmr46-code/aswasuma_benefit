<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GnDivision extends Model
{
    protected $fillable = [
        'division_no',
        'division_name',
        'officer_name',
        'official_address',
        'contact_number',
    ];
}