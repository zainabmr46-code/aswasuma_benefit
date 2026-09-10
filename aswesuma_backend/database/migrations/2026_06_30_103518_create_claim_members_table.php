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
        Schema::create('claim_members', function (Blueprint $table) {
            $table->id();

             $table->foreignId('claim_id')
             ->constrained('claims')->onDelete('cascade');
            
            $table->string('name');
            $table->string('relationship')->nullable();
            $table->string('gender')->nullable();
            $table->string('marital_status')->nullable();

            $table->date('dob')->nullable();
            $table->string('age')->nullable();

            $table->string('nic')->nullable();
            $table->string('education_attending')->nullable();

            $table->string('education_level')->nullable();
            $table->string('occupation')->nullable();
            $table->string('gov_allowances')->nullable();
            $table->string('challenges')->nullable();
            $table->string('disability_status')->nullable();
            $table->string('disability_type')->nullable();

            $table->string('chronic_disease')->nullable();

            $table->string('mobile')->nullable();
            $table->string('extra_mobile')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claim_members');
    }
};
