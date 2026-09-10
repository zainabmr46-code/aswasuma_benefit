<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;



class HouseholdMember extends Model
{
    use HasFactory;

    protected $table = 'household_members';
    protected $fillable = [
        'household_id',
        'name',
        'relationship',
        'gender',
        
        'dob',
        'age',
        'nic',
        
    ];

    public function household(){
        return $this->belongsTo(Household::class);
    }
}
