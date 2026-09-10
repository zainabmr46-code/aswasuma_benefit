<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('claims', function (Blueprint $table) {

            $table->id();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->cascadeOnDelete();

            $table->string('claim_name');

            $table->string('claim_nic');

            $table->date('claim_dob');

            $table->string('gender');

            $table->text('claim_address');

            $table->string('claim_landline')
                ->nullable();

            $table->string('claim_mobile')
                ->nullable();

            $table->string('claim_province');

            $table->string('claim_district');

            $table->string('claim_divisional');

            $table->string('claim_gn_division');
            $table->string('reference_number');
            $table->string('preferred_notification');

            $table->boolean('address_changed')
                ->default(false);

            $table->text('new_address')
                ->nullable();

            $table->boolean('members_changed')
                ->default(false);

            $table->integer('total_members')
                ->nullable();

            $table->longText('signature')
                ->nullable();

            $table->string('status')->default('Pending');

            $table->string('assigned_category')->nullable();
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('claims');
    }
};
