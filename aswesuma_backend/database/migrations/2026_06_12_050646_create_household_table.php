<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('household', function (Blueprint $table) {

            $table->id();

            $table->string('head_name');
            $table->string('nic')->nullable();
            $table->date('dob')->nullable();

            $table->enum('gender',['Male','Female'])->nullable() ->change();

            $table->string('address')->nullable();

            $table->string('landline')->nullable();
            $table->string('mobile')->nullable();

            $table->string('province')->default('Central Province');
            $table->string('district')->default('Kandy');
            $table->string('divisional_secretariat')->default('Pasbage Korale');

            $table->string('gn_division')->nullable();

            $table->enum(
                'preferred_notification',
                ['telephone','sms','post']
            )->nullable();

            
            $table->string('status')->default('Pending');

            $table->string('assigned_category')->nullable();

            $table->longText('signature')->nullable();

            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('household');
    }
};