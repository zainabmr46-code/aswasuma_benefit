<?php

namespace App\Http\Controllers;

use App\Models\Eligible;
use Illuminate\Http\Request;

class EligibleController extends Controller
{
    public function tax(Request $request)
    {
        $division = $request->query('gn_division');

        if (!$division) {
            return response()->json([
                'message' => 'GN Division is required',
                'data' => []
            ], 400);
        }

        
        $data = Eligible::where('gn_division', $division)
                    ->orWhere(function ($query) use ($division) {
                        $query->whereNull('gn_division')
                              ->where('address', 'LIKE', '%' . $division . '%');
                    })
                    ->select('id', 'ref_no', 'name', 'address', 'gn_division', 'category', 'aswesuma_eligible')
                    ->get();

        return response()->json([
            'message' => 'Success',
            'count' => $data->count(),
            'data' => $data
        ]);
    }
}
