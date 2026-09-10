<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'System Administrator',
                'nic' => '712720263V',
                'email' => 'mjmrahman@gmail.com',
                'phone' => '0770620550',
                'password' => Hash::make('Admin@123'),
                'role' => 'admin',
            ]
        );
    }
}
