<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $table = 'application';

    protected $fillable = [
        'user_id',
        'household_id',
        'apply_for',
        'status',
        'total_score',
        'assigned_category',
        'admin_comment'
    ];

    public function household()
    {
        return $this->belongsTo(Household::class, 'household_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function members()
    {
        return $this->hasMany(
            HouseholdMember::class,
            'application_id'
        );
    }
    
}
