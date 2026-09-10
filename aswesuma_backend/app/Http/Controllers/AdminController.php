<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Application;
use App\Models\request\Claims;
use App\Models\Objection;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Eligible;
use Exception;


class AdminController extends Controller
{


    public function dashboard()
    {

        try {

            $user = JWTAuth::parseToken()->authenticate();


            if (!$user) {

                return response()->json([
                    "message" => "Unauthenticated user"
                ], 401);
            }
        } catch (Exception $e) {

            return response()->json([
                "message" => "JWT Error",
                "error" => $e->getMessage()
            ], 401);
        }



        if ($user->role !== "admin") {

            return response()->json([
                "message" => "Admin access only"
            ], 403);
        }



        $recent = collect();



        foreach (
            Application::with('household')
                ->latest()
                ->take(5)
                ->get()
            as $app
        ) {

            $recent->push([

                "id" => $app->id,

                "name" => $app->household?->head_name,

                "nic" => $app->household?->nic,

                "gn_division" => $app->household?->gn_division,

                "apply_for" => "Benefit Application",

                "status" => ucfirst($app->status),

                "created_at" => $app->created_at

            ]);
        }



        foreach (
            Claims::latest()
                ->take(5)
                ->get()
            as $claim
        ) {

            $recent->push([

                "id" => $claim->id,

                "name" => $claim->claim_name,

                "nic" => $claim->claim_nic,

                "gn_division" => $claim->claim_gn_division,

                "apply_for" => "Claim",

                "status" => "Pending",

                "created_at" => $claim->created_at

            ]);
        }



        foreach (
            Objection::latest()
                ->take(5)
                ->get()
            as $obj
        ) {

            $recent->push([

                "id" => $obj->id,

                "name" => $obj->obj_name,

                "nic" => $obj->obj_nic,

                "gn_division" => $obj->obj_gn_division,

                "apply_for" => "Objection",

                "status" => "Pending",

                "created_at" => $obj->created_at

            ]);
        }



        return response()->json([

            "users" => User::where(
                "role",
                "citizen"
            )->count(),

            "applications" => Application::count(),

            "claims" => Claims::count(),

            "objections" => Objection::count(),

            "recent_applications" =>
            $recent
                ->sortByDesc('created_at')
                ->take(5)
                ->values()

        ]);
    }





    public function applications($gn)
    {


        $applications = Application::with([
            'household.members'
        ])
            ->whereHas('household', function ($query) use ($gn) {

                $query->where(
                    'gn_division',
                    $gn
                );
            })
            ->latest()
            ->get();



        $data = [];


        foreach ($applications as $app) {


            $data[] = [

                "id" => $app->id,

                "name" => $app->household?->head_name,

                "nic" => $app->household?->nic,

                "apply_for" => $app->apply_for ?? "Benefit",

                "family_members" =>
                $app->household?->members->count() ?? 0,

                "mobile" => $app->household?->mobile,

                "status" => ucfirst($app->status),

                "category" => $app->assigned_category ?? ""

            ];
        }



        return response()->json($data);
    }







    public function updateStatus(Request $request, $id)
    {


        $request->validate([
            "status" => "required|string"
        ]);



        $application = Application::find($id);



        if (!$application) {

            return response()->json([
                "message" => "Application not found"
            ], 404);
        }



        $application->status = $request->status;

        $application->save();



        return response()->json([

            "message" => "Status updated successfully",

            "status" => $application->status

        ]);
    }







    public function updateCategory(Request $request, $id)
    {
        $request->validate([
            "assigned_category" => "required|string"
        ]);

        $application = Application::find($id);

        if (!$application) {
            return response()->json([
                "message" => "Application not found"
            ], 404);
        }

        $application->assigned_category = $request->assigned_category;

        $application->save();

        return response()->json([
            "message" => "Category updated successfully",
            "assigned_category" => $application->assigned_category
        ]);
    }







    public function viewApplication($id)
    {


        $application = Application::with([
            'household.members'
        ])
            ->find($id);



        if (!$application) {

            return response()->json([
                "message" => "Application not found"
            ], 404);
        }



        return response()->json($application);
    }





    public function claims($gn)
    {
        $claims = Claims::with('members')
            ->where('claim_gn_division', $gn)
            ->latest()
            ->get();


        $data = [];


        foreach ($claims as $claim) {

            $data[] = [

                "id" => $claim->id,

                "name" => $claim->claim_name,

                "nic" => $claim->claim_nic,

                "gn_division" => $claim->claim_gn_division,

                "mobile" => $claim->claim_mobile,


                "status" => $claim->status ?? "Pending",



                "assigned_category" => $claim->assigned_category ?? "Not Assigned"

            ];
        }


        return response()->json($data);
    }













    public function show($id)
    {


        try {


            $claim = Claims::with([

                'property',

                'financial',

                'members'

            ])
                ->find($id);



            if (!$claim) {


                return response()->json([

                    "message" => "Claim not found"

                ], 404);
            }




            return response()->json([


                "id" => $claim->id,


                "claim_name" => $claim->claim_name,

                "claim_nic" => $claim->claim_nic,

                "claim_dob" => $claim->claim_dob,

                "gender" => $claim->gender,


                "claim_address" => $claim->claim_address,


                "claim_landline" => $claim->claim_landline,

                "claim_mobile" => $claim->claim_mobile,


                "claim_province" => $claim->claim_province,

                "claim_district" => $claim->claim_district,

                "claim_divisional" => $claim->claim_divisional,

                "claim_gn_division" => $claim->claim_gn_division,


                "preferred_notification" =>
                $claim->preferred_notification,


                "signature" => $claim->signature,


                "property" => $claim->property,


                "financial" => $claim->financial,


                "members" => $claim->members


            ]);
        } catch (Exception $e) {



            return response()->json([

                "error" => $e->getMessage(),

                "line" => $e->getLine()

            ], 500);
        }
    }


    public function updateClaimStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string'
        ]);


        $claim = Claims::find($id);


        if (!$claim) {

            return response()->json([
                "message" => "Claim not found"
            ], 404);
        }


        $claim->status = $request->status;

        $claim->save();


        return response()->json([

            "message" => "Status updated successfully",

            "status" => $claim->status

        ]);
    }




    public function objections($gn)
    {
        try {

            $objections = Objection::where(
                'obj_gn_division',
                $gn
            )
                ->latest()
                ->get();


            $data = [];


            foreach ($objections as $obj) {

                $data[] = [

                    "id" => $obj->id,

                    "obj_name" => $obj->obj_name,

                    "obj_nic" => $obj->obj_nic,

                    "obj_gn_division" => $obj->obj_gn_division,

                    "obj_mobile" => $obj->obj_mobile,


                    "status" => $obj->status ?? "Pending",


                    "assigned_category" =>
                    $obj->assigned_category ?? "-"

                ];
            }


            return response()->json($data);
        } catch (Exception $e) {


            return response()->json([

                "message" => "Failed to load objections",

                "error" => $e->getMessage(),

                "line" => $e->getLine()

            ], 500);
        }
    }


    public function viewObjection($id)
    {

        $objection = Objection::find($id);


        if (!$objection) {

            return response()->json([
                "message" => "Objection not found"
            ], 404);
        }


        return response()->json($objection);
    }





    public function updateObjectionStatus(Request $request, $id)
    {

        $request->validate([

            "status" => "required|string"

        ]);



        $objection = Objection::find($id);



        if (!$objection) {

            return response()->json([

                "message" => "Objection not found"

            ], 404);
        }



        $objection->status = $request->status;


        $objection->save();



        return response()->json([

            "message" => "Status updated successfully",

            "status" => $objection->status

        ]);
    }






    public function updateObjectionCategory(Request $request, $id)
    {
        $request->validate([
            'assigned_category' => 'required|string'
        ]);


        $objection = Objection::find($id);


        if (!$objection) {

            return response()->json([
                "message" => "Objection not found"
            ], 404);
        }


        $objection->assigned_category =
            $request->assigned_category;


        $objection->save();


        return response()->json([
            "message" => "Category updated successfully",
            "assigned_category" => $objection->assigned_category
        ]);
    }

    public function eligibleRefNos($gn)
    {
        $refNos = Eligible::where('gn_division', $gn)
            ->select('id', 'ref_no')
            ->orderBy('ref_no')
            ->get();

        return response()->json($refNos);
    }

    public function eligibleFamily($refNos)
    {
        $family = Eligible::where('ref_no', $refNos)->first();

        if (!$family) {
            return response()->json([
                "message" => "Family not found"
            ], 404);
        }

        return response()->json($family);
    }


    public function updateClaimCategory(Request $request, $id)
    {
        $request->validate([
            'assigned_category' => 'required|string'
        ]);


        $claim = Claims::find($id);


        if (!$claim) {
            return response()->json([
                "message" => "Claim not found"
            ], 404);
        }


        $claim->assigned_category =
            $request->assigned_category;


        $claim->save();


        return response()->json([
            "message" => "Category updated successfully",
            "assigned_category" => $claim->assigned_category
        ]);
    }
}
