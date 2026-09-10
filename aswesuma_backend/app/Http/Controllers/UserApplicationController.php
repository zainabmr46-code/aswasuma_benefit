<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;
use App\Models\request\Claims;
use App\Models\Objection;

class UserApplicationController extends Controller
{
    public function myApplications(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                "message" => "Unauthenticated"
            ], 401);
        }

        $applications = [];

    

        $benefits = Application::with('household')
            ->where('user_id', $user->id)
            ->latest()
            ->get();

        foreach ($benefits as $app) {

            $applications[] = [
                "id" => $app->id,
                "apply_for" => $app->apply_for ?? "Aswesuma Benefit",
                "nic" => optional($app->household)->nic ?? "-",
                "category" => $app->assigned_category ?? "Not Assigned",
                "status" => $app->status ?? "Pending",
            ];
        }

       

        $claims = Claims::where('user_id', $user->id)
            ->latest()
            ->get();

        foreach ($claims as $claim) {

            $applications[] = [
                "id" => $claim->id,
                "apply_for" => "Claim",
                "nic" => $claim->claim_nic ?? "-",
                "category" => $claim->assigned_category ?? "Not Assigned",
                "status" => $claim->status ?? "Pending",
            ];
        }

        
        $objections = Objection::where('user_id', $user->id)
            ->latest()
            ->get();

        foreach ($objections as $obj) {

            $applications[] = [
                "id" => $obj->id,
                "apply_for" => "Objection",
                "nic" => $obj->obj_nic ?? "-",
                "category" => $obj->assigned_category ?? "Not Assigned",
                "status" => $obj->status ?? "Pending",
            ];
        }

        return response()->json($applications);
    }
}