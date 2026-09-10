<?php

namespace App\Http\Controllers;

use App\Models\GnDivision;

class GnDivisionController extends Controller
{
    public function index()
    {
        return GnDivision::all();
    }
}