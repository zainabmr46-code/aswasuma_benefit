<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('eligible_families', function (Blueprint $table) {
            $table->id();
            $table->string('ref_no')->unique();
            $table->string('name');
            $table->text('address');          
            $table->string('gn_division')->nullable();
            $table->string('category')->nullable();
            $table->string('aswesuma_eligible')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('eligible_families');
    }
};