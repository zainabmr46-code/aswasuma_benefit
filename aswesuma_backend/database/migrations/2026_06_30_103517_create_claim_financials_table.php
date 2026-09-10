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
        Schema::create('claim_financials', function (Blueprint $table) {
            $table->id();

            
            $table->foreignId('claim_id')
            ->constrained('claims')
            ->onDelete('cascade');
            
            $table->decimal('food_drinks',10,2)->nullable();
            $table->decimal('drinking_water',10,2)->nullable();
            $table->decimal('clothes',10,2)->nullable();
            $table->decimal('medicine',10,2)->nullable();
            $table->decimal('housing_rent', 10, 2)->nullable();
            $table->decimal('personal_transport', 10, 2)->nullable();
            $table->decimal('public_transport', 10, 2)->nullable();
            $table->decimal('electricity', 10, 2)->nullable();
            $table->decimal('cooking', 10, 2)->nullable();
            $table->decimal('communication', 10, 2)->nullable();
            $table->decimal('education', 10, 2)->nullable();
            $table->decimal('entertainment', 10, 2)->nullable();
            $table->decimal('other_expenses', 10, 2)->nullable();
            
            
            
            $table->decimal('expense_total', 10, 2)->nullable();
            $table->decimal('salary_income', 10, 2)->nullable();
            $table->decimal('agriculture_income', 10, 2)->nullable();
            $table->decimal('business_income', 10, 2)->nullable();
            $table->decimal('pension', 10, 2)->nullable();
            $table->decimal('samurdhi', 10, 2)->nullable();
            $table->decimal('other_income', 10, 2)->nullable();
            
            $table->decimal('income_total', 10, 2)->nullable();
            
            
            $table->integer('electricity_units')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claim_financials');
    }
};
