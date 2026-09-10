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
        Schema::create('gn_divisions', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('division_no');
            $table->string('division_name');
            $table->string('officer_name');
            $table->string('official_address');
            $table->string('contact_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gn_divisions');
    }
};
