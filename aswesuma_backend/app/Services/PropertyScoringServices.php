<?php
namespace App\Services;
use App\Models\Household;

class PropertyScoringServices{
    public static function calculate(Household $household){
        $score = 0;

        if($household->wall_material=='Mud'){
            $score +=20;
        }
        if($household->roof_material == 'Thatched'){
            $score += 20;
        }
        if($household->floor_meterial == 'Earth'){
            $score += 15;
        }


        if($household->monthly_allocation < 25000){
            $score +=25;
        }
        elseif($household->monthly_allocation < 50000){
            $score +=15;
        }



        foreach($household->members as $member){

        if($member->disability_status == 'Yes'){
            $score +=15;
        }
        if($member->chronic_disease == 'Yes'){
            $score +=10;
        }
        if($member->age < 18){
            $score +=5;
        }
        if($member->age >60){
            $score +=5;
        }
        if($member->education_level == 'No Schooling'){
            $score +=10;
        }
        }



        $category = 'Non Eligible';
        if($score >=90){
            $category = 'Extreme Poor';
        }
        elseif($score >=70){
            $category = 'Poor';
        }
        elseif($score >=50){
            $category = 'Vulnerable';
        }
        elseif($score >=30){
            $category = 'Transitional';
        }

        return[
            'score' => $score,
            'category' => $category
        ];


    }

}