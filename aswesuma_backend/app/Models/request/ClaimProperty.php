<?php

namespace App\Models\request;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimProperty extends Model
{
    use HasFactory;

    protected $table = "claim_property";

    protected $fillable = [

        'claim_id',

        'housing_nature',
        'floor_material',
        'roof_material',
        'wall_material',
        'floor_area_code',

        'property_ownership',
        'other_buildings',

        'lighting_source',
        'water_source',

        'toilet_facility',
        'toilet_nature',

        'family_structure',

        'motorbike',
        'scooter',
        'three_wheeler',
        'motor_car',
        'van_jeep',
        'bus',
        'lorry_tipper',
        'hand_tractor',
        'tractor',
        'none',

        'mechanized_fishing_boat',
        'non_mechanized_fishing_boat',
        'combine_harvester',
        'paddy_machine',
        'other_fishing_agri_equipment',
        'self_employment_equipment',
        'none01',

        'livestock_01_qty',
        'livestock_02_qty',
        'livestock_03_qty',
        'livestock_04_qty',
        'livestock_05_qty',
        'livestock_06_qty',
        'livestock_07_qty',

        'animal',

        'landOwner',
        'landExtend',
        'landOwner1',
        'landExtend1'
    ];


    public function claim()
    {
        return $this->belongsTo(
            Claims::class,
            'claim_id'
        );
    }
}