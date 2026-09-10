<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('application', function (Blueprint $table) {

            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->unsignedBigInteger('household_id');

            $table->foreign('household_id')
                ->references('id')
                ->on('household')
                ->cascadeOnDelete();

            $table->string('apply_for');

            $table->string('status')->default('pending');

            $table->integer('total_score')->nullable();

            $table->string('assigned_category')->nullable();

            $table->text('admin_comment')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('application');
    }
};