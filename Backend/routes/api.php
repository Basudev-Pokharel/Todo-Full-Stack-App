<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

// Projects get here
Route::get('/projects', [ProjectController::class, 'index'])->middleware('auth:sanctum');
Route::post('/create_project', [ProjectController::class, 'createProject'])->middleware('auth:sanctum');
Route::delete('/delete_project/{project_id}', [ProjectController::class, 'deleteProject'])->middleware('auth:sanctum');

// Tasks routes here
Route::patch('/task_complete/{task_id}', [TaskController::class, 'completeTask'])->middleware('auth:sanctum');
Route::delete('/task_delete/{task_id}', [TaskController::class, 'deleteTask'])->middleware('auth:sanctum');
Route::post('/task_create/{project_id}', [TaskController::class, 'createTask'])->middleware('auth:sanctum');
