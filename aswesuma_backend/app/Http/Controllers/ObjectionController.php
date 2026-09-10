<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Objection;
use Illuminate\Support\Facades\Auth;

class ObjectionController extends Controller
{

    // Store objection
    public function store(Request $request)
    {

        $validated = $request->validate([

            'obj_name' => 'required|string',
            'obj_nic' => 'required|string',

            'obj_address' => 'required|string',

            'obj_mobile' => 'required|string',

            'obj_province' => 'required|string',

            'obj_district' => 'required|string',

            'obj_divisional' => 'required|string',

            'obj_gn_division' => 'required|string',

            'reference_number' => 'required|string',

            'reason' => 'required|string',

            'reason_detail' => 'required|string',

            'signature' => 'nullable|string',

        ]);


        $objection = Objection::create([

            'user_id' => Auth::id(),

            'obj_name' => $validated['obj_name'],

            'obj_nic' => $validated['obj_nic'],

            'obj_address' => $validated['obj_address'],

            'obj_mobile' => $validated['obj_mobile'],

            'obj_province' => $validated['obj_province'],

            'obj_district' => $validated['obj_district'],

            'obj_divisional' => $validated['obj_divisional'],

            'obj_gn_division' => $validated['obj_gn_division'],

            'reference_number' => $validated['reference_number'],

            'reason' => $validated['reason'],

            'reason_detail' => $validated['reason_detail'],

            'signature' => $validated['signature'] ?? null,

        ]);


        return response()->json([
            'message' => 'Objection submitted successfully',
            'data' => $objection
        ], 201);
    }



    // Get all objections (Admin/Officer)
    public function index()
    {
        $objections = Objection::with('user')
            ->latest()
            ->get();


        return response()->json([
            'data' => $objections
        ]);
    }



    // View single objection
    public function show($id)
    {
        $objection = Objection::findOrFail($id);


        return response()->json([
            'data' => $objection
        ]);
    }



    // Delete objection
    public function destroy($id)
    {
        $objection = Objection::findOrFail($id);

        $objection->delete();


        return response()->json([
            'message' => 'Objection deleted successfully'
        ]);
    }
}