<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContactNumberController extends Controller
{
    public function index()
    {
        $contacts = DB::table('gn_officers')->get();

        return response()->json([
            'contacts' => $contacts
        ]);
    }
}