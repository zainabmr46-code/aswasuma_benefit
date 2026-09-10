<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('objections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');

            $table->string('obj_name');
            $table->string('obj_nic');
            $table->text('obj_address');
            $table->string('obj_mobile');
            $table->string('obj_province');
            $table->string('obj_district');
            $table->string('obj_divisional');
            $table->string('obj_gn_division');
            $table->string('reference_number');
            $table->string('reason');
            $table->text('reason_detail');
            $table->longText('signature')->nullable();

            $table->string('status')->default('Pending');
            $table->string('assigned_category')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('objections');
    }
};