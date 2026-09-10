<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('claim_property', function (Blueprint $table) {
            $table->id();

            $table->foreignId('claim_id')
                ->constrained('claims')
                ->onDelete('cascade');


            $table->string('housing_nature')->nullable();
            $table->string('floor_material')->nullable();
            $table->string('roof_material')->nullable();
            $table->string('wall_material')->nullable();
            $table->string('floor_area_code')->nullable();


            $table->string('property_ownership')->nullable();
            $table->string('other_buildings')->nullable();


            $table->string('lighting_source')->nullable();
            $table->string('water_source')->nullable();


            $table->string('toilet_facility')->nullable();
            $table->string('toilet_nature')->nullable();


            $table->string('family_structure')->nullable();


            $table->boolean('motorbike')->default(false);
            $table->boolean('scooter')->default(false);
            $table->boolean('three_wheeler')->default(false);
            $table->boolean('motor_car')->default(false);
            $table->boolean('van_jeep')->default(false);
            $table->boolean('bus')->default(false);
            $table->boolean('lorry_tipper')->default(false);
            $table->boolean('hand_tractor')->default(false);
            $table->boolean('tractor')->default(false);
            $table->boolean('none')->default(false);

            $table->boolean('mechanized_fishing_boat')->default(false);
            $table->boolean('non_mechanized_fishing_boat')->default(false);
            $table->boolean('combine_harvester')->default(false);
            $table->boolean('paddy_machine')->default(false);
            $table->boolean('other_fishing_agri_equipment')->default(false);
            $table->boolean('self_employment_equipment')->default(false);
            $table->boolean('none01')->default(false);

            $table->integer('livestock_01_qty')->nullable();
            $table->integer('livestock_02_qty')->nullable();
            $table->integer('livestock_03_qty')->nullable();
            $table->integer('livestock_04_qty')->nullable();
            $table->integer('livestock_05_qty')->nullable();
            $table->integer('livestock_06_qty')->nullable();
            $table->string('animal')->nullable();
            $table->integer('livestock_07_qty')->nullable();


            $table->string('landOwner')->nullable();
            $table->string('landExtend')->nullable();
            $table->string('landOwner1')->nullable();
            $table->string('landExtend1')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claim_property');
    }
};
