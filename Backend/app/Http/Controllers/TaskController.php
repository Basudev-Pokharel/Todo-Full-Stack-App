<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function completeTask(Request $request, $task_id)
    {
        $task = Task::find($task_id);
        if (!$task) {
            return response()->json([
                'status' => false,
                'message' => 'Task not found'
            ], 404);
        }
        $task->is_completed = 1;
        $task->save();
        return response()->json([
            'status' => true,
            'message' => 'Task marked as completed',
            'task' => $task
        ], 200);
    }
    public function deleteTask(Request $request, $task_id)
    {
        $task = Task::find($task_id);
        if (!$task) {
            return response()->json([
                'status' => false,
                'message' => 'Task not found'
            ], 404);
        }
        $task->delete();
        return response()->json([
            'status' => true,
            'message' => 'Task deleted successfully',
            'task' => $task
        ], 200);
    }
    public function createTask(Request $request, $project_id)
    {
        $validate = Validator::make($request->all(), [
            'task' => 'required|string'
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validate->errors()
            ], 422);
        }
        $task = Task::insert([
            'project_id' => $request->project_id,
            'task' => $request->task,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        if ($task) {
            return response()->json([
                'status' => true,
                'message' => 'Task created successfully',
                'task' => $task
            ], 201);
        }
        return response()->json([
            'status' => false,
            'message' => 'Task creation failed'
        ], 500);
    }
}
