<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AuthController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');



// Route::get('/blogs', [BlogController::class, 'index'])->name("blogs-listing");
// Route::post('/blogs', [BlogController::class, 'store'])->name("blogs-store");
// Route::get('/blogs/{id}', [BlogController::class, 'show'])->name("blogs-show");
// Route::put('/blogs/{id}', [BlogController::class, 'update'])->name("blogs-update");
// Route::delete('/blogs/{id}', [BlogController::class, 'destroy'])->name("blogs-delete");

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::get('/blogs', [BlogController::class, 'index'])->name("blogs-listing");
    Route::post('/blogs', [BlogController::class, 'store'])->name("blogs-store");
    Route::get('/blogs/{id}', [BlogController::class, 'show'])->name("blogs-show");
    Route::put('/blogs/{id}', [BlogController::class, 'update'])->name("blogs-update");
    Route::delete('/blogs/{id}', [BlogController::class, 'destroy'])->name("blogs-delete");
    Route::post('/logout', [AuthController::class, 'logout']);
});
