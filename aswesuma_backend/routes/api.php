<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserApplicationController;
use App\Http\Controllers\GnDivisionController;
use App\Http\Controllers\EligibleController;
use App\Http\Controllers\ContactNumberController;
use App\Http\Controllers\ObjectionController;
use App\Http\Controllers\ApplyBenefitsController;
use App\Http\Controllers\ClaimBenefits;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::get('/gn-divisions', [GnDivisionController::class, 'index']);

Route::get('/eligible', [EligibleController::class, 'tax']);

Route::get('/contact-numbers', [ContactNumberController::class, 'index']);


/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:api'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Citizen Routes
    |--------------------------------------------------------------------------
    */

    Route::get('/my-applications', [UserApplicationController::class, 'myApplications']);

    Route::post('/apply-benefit', [ApplyBenefitsController::class, 'store']);

    Route::post('/claim-benefit', [ClaimBenefits::class, 'store']);

    Route::post('/objection', [ObjectionController::class, 'store']);


    /*
    |--------------------------------------------------------------------------
    | Admin Dashboard
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);


    /*
    |--------------------------------------------------------------------------
    | Applications
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/applications/{gn}', [AdminController::class, 'applications']);

    Route::get('/admin/application/{id}', [AdminController::class, 'viewApplication']);

    Route::put('/admin/application/status/{id}', [AdminController::class, 'updateStatus']);

    Route::put('/admin/application/category/{id}', [AdminController::class, 'updateCategory']);


    /*
    |--------------------------------------------------------------------------
    | Claims
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/claims/{gn}', [AdminController::class, 'claims']);

    Route::get('/admin/claim/{id}', [AdminController::class, 'show']);

    Route::put('/admin/claim/status/{id}', [AdminController::class, 'updateClaimStatus']);

    Route::put('/admin/claim/category/{id}', [AdminController::class, 'updateClaimCategory']);


    /*
    |--------------------------------------------------------------------------
    | Objections
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/objections/{gn}', [AdminController::class, 'objections']);

    Route::get('/admin/objection/{id}', [AdminController::class, 'viewObjection']);

    Route::put('/admin/objection/status/{id}', [AdminController::class, 'updateObjectionStatus']);

    Route::put('/admin/objection/category/{id}', [AdminController::class, 'updateObjectionCategory']);


    /*
    |--------------------------------------------------------------------------
    | Eligible Families
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/eligible-refnos/{gn}', [AdminController::class, 'eligibleRefNos']);

    Route::get('/admin/eligible-family/{refNo}', [AdminController::class, 'eligibleFamily']);

});