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
        Schema::create('household_members', function (Blueprint $table) {
            $table->id();

            $table->foreignId('household_id')->constrained('household')->onDelete('cascade');
            
            $table->string('name');
            $table->string('relationship')->nullable();
            $table->string('gender')->nullable();
            

            $table->date('dob')->nullable();
            $table->string('age')->nullable();

            $table->string('nic')->nullable();
            


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('household_members');
    }
};
