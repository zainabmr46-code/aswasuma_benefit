<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Household extends Model
{

    use HasFactory;

    protected $table = 'household';
    protected $fillable = [
        'head_name',
        'nic',
        'dob',
        'head_gender',
        'address',
        'landline',
        'mobile',
        'province',
        'district',
        'divisional_secretariat',
        'gn_division',
        'preferred_notification',
        'signature',
        'status',

        'assigned_category'

    ];



    public function members()
    {
        return $this->hasMany(HouseholdMember::class, 'household_id');
    }



    public function applications()
    {
        return $this->hasMany(Application::class, 'household_id', 'id');
    }
}
