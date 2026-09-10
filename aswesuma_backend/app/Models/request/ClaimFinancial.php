<?php

namespace App\Models\request;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimFinancial extends Model
{
    use HasFactory;

    protected $table = "claim_financials";


    protected $fillable = [

        'claim_id',

        'food_drinks',
        'drinking_water',
        'clothes',
        'medicine',
        'housing_rent',

        'personal_transport',
        'public_transport',

        'electricity',
        'cooking',
        'communication',
        'education',
        'entertainment',
        'other_expenses',

        'expense_total',

        'salary_income',
        'agriculture_income',
        'business_income',
        'pension',
        'samurdhi',
        'other_income',

        'income_total',

        'electricity_units'
    ];


    public function claim()
    {
        return $this->belongsTo(
            Claims::class,
            'claim_id'
        );
    }
}