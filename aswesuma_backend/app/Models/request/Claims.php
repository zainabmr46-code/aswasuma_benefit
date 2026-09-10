<?php

namespace App\Models\request;

use Illuminate\Database\Eloquent\Model;

class Claims extends Model
{

    protected $table = "claims";


    protected $fillable = [

        'user_id',

        'claim_name',
        'claim_nic',
        'claim_dob',
        'gender',

        'claim_address',

        'claim_landline',
        'claim_mobile',

        'claim_province',
        'claim_district',
        'claim_divisional',
        'claim_gn_division',

        'reference_number',

        'preferred_notification',

        'address_changed',
        'new_address',

        'members_changed',
        'total_members',

        'signature',

        'status',

        'assigned_category'

    ];



    public function property()
    {
        return $this->hasOne(
            ClaimProperty::class,
            'claim_id'
        );
    }



    public function financial()
    {
        return $this->hasOne(
            ClaimFinancial::class,
            'claim_id'
        );
    }



    public function members()
    {
        return $this->hasMany(
            ClaimMember::class,
            'claim_id'
        );
    }

}