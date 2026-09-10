<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Objection extends Model
{
    protected $table = "objections";

    protected $fillable = [

        'user_id',

        'obj_name',
        'obj_nic',
        'obj_address',
        'obj_mobile',

        'obj_province',
        'obj_district',
        'obj_divisional',
        'obj_gn_division',

        'reference_number',

        'reason',
        'reason_detail',

        'signature',

        'status',

        'assigned_category'

    ];
}