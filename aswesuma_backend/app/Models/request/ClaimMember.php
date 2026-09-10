<?php

namespace App\Models\request;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimMember extends Model
{
    use HasFactory;


    protected $table = "claim_members";


    protected $fillable = [

        'claim_id',

        'name',
        'relationship',
        'gender',
        'dob',
        'age',
        'nic',

        'education_level',
        'occupation',

        'disability_status',
        'disability_type',

        'chronic_disease',

        'mobile'
    ];


    public function claim()
    {
        return $this->belongsTo(
            Claims::class,
            'claim_id'
        );
    }
}