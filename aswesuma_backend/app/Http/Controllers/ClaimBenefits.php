<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\request\Claims;
use App\Models\request\ClaimMember;
use App\Models\request\ClaimProperty;
use App\Models\request\ClaimFinancial;
use Illuminate\Support\Facades\Auth;

class ClaimBenefits extends Controller
{



    private function yesNo($value)
    {
        return ($value === "Yes" || $value === 1 || $value === true) ? 1 : 0;
    }
    private function num($value)
    {
        return is_numeric($value) ? $value : 0;
    }
    public function store(Request $request)
    {
        try {
            $claim = Claims::create([

                'user_id' => Auth::id(),

                'claim_name' => $request->claim_name,
                'claim_nic' => $request->claim_nic,
                'claim_dob' => $request->claim_dob,
                'gender' => $request->claim_gender,

                'claim_address' => $request->claim_address,

                'claim_landline' => $request->claim_landline,

                'claim_mobile' => $request->claim_mobile,

                'claim_province' => $request->claim_province,

                'claim_district' => $request->claim_district,

                'claim_divisional' => $request->claim_divisional,

                'claim_gn_division' => $request->claim_gn_division,
                'reference_number' => $request->reference_number,
                'preferred_notification' => $request->preferred_notification,

                'address_changed' => $this->yesNo($request->address_changed),
                'new_address' => $request->new_address,

                'members_changed' => $this->yesNo($request->members_changed),

                'total_members' => $request->total_members,

                'signature' => $request->signature

            ]);
            $property = $request->property;

            ClaimProperty::create([
                'claim_id' => $claim->id,

                'housing_nature' => $property['housing_nature'] ?? null,
                'floor_material' => $property['floor_material'] ?? null,
                'roof_material' => $property['roof_material'] ?? null,
                'wall_material' => $property['wall_material'] ?? null,
                'floor_area_code' => $property['floor_area_code'] ?? null,

                'property_ownership' => $this->yesNo($property['property_ownership'] ?? null),
                'other_buildings' =>  $this->yesNo($property['other_buildings'] ?? null),

                'lighting_source' => $property['lighting_source'] ?? null,
                'water_source' => $property['water_source'] ?? null,

                'toilet_facility' => $property['toilet_facility'] ?? null,
                'toilet_nature' => $property['toilet_nature'] ?? null,

                'family_structure' => $this->yesNo($property['family_structure'] ?? null),


                'motorbike' => $this->yesNo($property['motorbike'] ?? null),
                'scooter' => $this->yesNo($property['scooter'] ?? null),
                'three_wheeler' => $this->yesNo($property['three_wheeler'] ?? null),
                'motor_car' => $this->yesNo($property['motor_car'] ?? null),
                'van_jeep' => $this->yesNo($property['van_jeep'] ?? null),
                'bus' => $this->yesNo($property['bus'] ?? null),
                'lorry_tipper' => $this->yesNo($property['lorry_tipper'] ?? null),
                'hand_tractor' => $this->yesNo($property['hand_tractor'] ?? null),
                'tractor' => $this->yesNo($property['tractor'] ?? null),
                'none' => $this->yesNo($property['none'] ?? null),


                'mechanized_fishing_boat' => $this->yesNo($property['mechanized_fishing_boat'] ?? null),
                'non_mechanized_fishing_boat' => $this->yesNo($property['non_mechanized_fishing_boat'] ?? null),
                'combine_harvester' => $this->yesNo($property['combine_harvester'] ?? null),
                'paddy_machine' => $this->yesNo($property['paddy_machine'] ?? null),
                'other_fishing_agri_equipment' => $this->yesNo($property['other_fishing_agri_equipment'] ?? null),
                'self_employment_equipment' => $this->yesNo($property['self_employment_equipment'] ?? null),
                'none01' => $this->yesNo($property['none01'] ?? null),


                'livestock_01_qty' => $this->num($property['livestock_01_qty'] ?? 0),
                'livestock_02_qty' => $this->num($property['livestock_02_qty'] ?? 0),
                'livestock_03_qty' => $this->num($property['livestock_03_qty'] ?? 0),
                'livestock_04_qty' => $this->num($property['livestock_04_qty'] ?? 0),
                'livestock_05_qty' => $this->num($property['livestock_05_qty'] ?? 0),
                'livestock_06_qty' => $this->num($property['livestock_06_qty'] ?? 0),
                'livestock_07_qty' => $this->num($property['livestock_07_qty'] ?? 0),

                'animal' => $property['animal'] ?? '',


                'landOwner' => $this->yesNo($property['landOwner'] ?? null),
                'landExtend' => $property['landExtend'] ?? null,
                'landOwner1' => $this->yesNo($property['landOwner1'] ?? null),
                'landExtend1' => $property['landExtend1'] ?? null,


            ]);

            ClaimFinancial::create([
                'claim_id' => $claim->id,
                'food_drinks' => $this->num($request->food_drinks),
                'drinking_water' => $this->num($request->drinking_water),
                'clothes' => $this->num($request->clothes),
                'medicine' => $this->num($request->medicine),
                'housing_rent' => $this->num($request->housing_rent),
                'personal_transport' => $this->num($request->personal_transport),
                'public_transport' => $this->num($request->public_transport),
                'electricity' => $this->num($request->electricity),
                'cooking' => $this->num($request->cooking),
                'communication' => $this->num($request->communication),
                'education' => $this->num($request->education),
                'entertainment' => $this->num($request->entertainment),
                'other_expenses' => $this->num($request->other_expenses),
                'expense_total' => $this->num($request->expense_total),

                'salary_income' => $this->num($request->salary_income),
                'agriculture_income' => $this->num($request->agriculture_income),
                'business_income' => $this->num($request->business_income),
                'pension' => $this->num($request->pension),
                'samurdhi' => $this->num($request->samurdhi),
                'other_income' => $this->num($request->other_income),
                'income_total' => $this->num($request->income_total),

                'electricity_units' => $this->num($request->electricity_units),
            ]);

            if ($request->has('members')) {
                foreach ($request->members as $member) {
                    ClaimMember::create([
                        'claim_id' => $claim->id,
                        'name' => $member['name'],
                        'relationship' => $member['relationship'],
                        'gender' => $member['gender'],
                        'dob' => $member['dob'],
                        'age' => $member['age'],
                        'nic' => $member['nic'],
                        'education_level' => $member['education_level'],
                        'occupation' => $member['occupation'],
                        'disability_status' => $member['disability_status'],
                        'disability_type' => $member['disability_type'],
                        'chronic_disease' => $member['chronic_disease'],
                        'mobile' => $member['mobile']
                    ]);
                }
            }


            return response()->json([
                'message' => 'Reached Here Successfully',
                'claim_id' => $claim->id
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Application failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
