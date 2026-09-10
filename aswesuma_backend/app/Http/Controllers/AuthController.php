<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeUserMail;
use App\Mail\LoginSuccessMail;
use Exception;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'nic' => 'required|string|unique:users,nic',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|string|max:15',
            'password' => 'required|min:6',
        ]);


        $user = User::create([
            'name' => $request->name,
            'nic' => $request->nic,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'role' => 'citizen'
        ]);

        return response()->json([
            'message' => 'Registered Successfully',
            'user' => $user
        ], 201);
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)
            ->orWhere('nic', $request->email)
            ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $token = JWTAuth::fromUser($user);

        try {
            Mail::to($user->email)->send(new LoginSuccessMail($user));
        } catch (Exception $e) {
            report($e);
        }

        return response()->json([
            'message' => 'Login Successfully',
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'role' => $user->role,
                'gn_division' => $user->gn_division,
            ]
        ], 200);
    }
}
