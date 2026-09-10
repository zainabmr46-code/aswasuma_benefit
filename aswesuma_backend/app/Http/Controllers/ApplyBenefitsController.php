<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Application;
use App\Models\HouseholdMember;
use App\Models\Household;

use App\Services\PropertyScoringServices;


class ApplyBenefitsController extends Controller
{
    public function store(Request $request)
    {
        try {

            $request->validate([
                'head_name' => 'required|string',
                'head_gender' => 'required|in:Male,Female',
                'preferred_notification' => 'required|in:telephone,sms,post',
            ]);


            $household = Household::create([

                'head_name' => $request->head_name,

                'nic' => $request->head_nic,

                'dob' => $request->head_dob,

                'gender' => $request->head_gender ?: null,

                'address' => $request->address,

                'landline' => $request->landline,

                'mobile' => $request->head_mobile,

                'province' => $request->province,

                'district' => $request->district,

                'divisional_secretariat' => $request->divisional,

                'gn_division' => $request->gn_division ?: null,

                'preferred_notification' =>
                $request->preferred_notification ?: null,

                'signature' => $request->signature,
            ]);


            if ($request->has('members')) {

                foreach ($request->members as $member) {


                    if (!empty($member['name'])) {

                        HouseholdMember::create([

                            'household_id' => $household->id,

                            'name' => $member['name'],

                            'relationship' => $member['relationship'] ?? null,

                            'gender' => $member['gender'] ?? null,

                            'dob' => $member['dob'] ?? null,

                            'age' => $member['age'] ?? null,

                            'nic' => $member['nic'] ?? null,

                        ]);
                    }
                }
            }



            $household->load('members');


            $result = PropertyScoringServices::calculate($household);


            $application = Application::create([

                'user_id' => $request->user()->id,

                'household_id' => $household->id,

                'apply_for' => $request->apply_for ?? 'Aswesuma Benefit',

                'total_score' => $result['score'],

                'assigned_category' => $result['category'],

                'status' => 'pending'

            ]);


            return response()->json([

                'message' => 'Application submitted successfully',

                'household_id' => $household->id

            ], 201);
        } catch (\Exception $e) {


            return response()->json([

                'message' => 'Application failed',

                'error' => $e->getMessage()

            ], 500);
        }
    }
}
