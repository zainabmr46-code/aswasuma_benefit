<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactNumber extends Model
{
    protected $table = "gn_officers";

    protected $fillable = [
        'division_no',
        'division_name',
        'officer_name',
        'official_address',
        'contact_number'
    ];
}