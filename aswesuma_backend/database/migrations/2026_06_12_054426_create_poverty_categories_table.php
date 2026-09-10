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
        Schema::create('poverty_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code')->unique();

            $table->decimal('monthly_amount_min', 10, 2)->nullable();
            $table->decimal('monthly_amount_max', 10, 2)->nullable();

            $table->integer('duration_months')->default(36);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('poverty_categories');
    }
};
