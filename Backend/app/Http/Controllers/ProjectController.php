<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with('tasks')->where('user_id', Auth::id())->get();
        return response()->json([
            'status' => true,
            'message' => 'Project List',
            'projects' => $projects
        ], 200);
    }

    //carete project name and those herer
    public function createProject(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'nullable|string'
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validate->errors()
            ], 422);
        }
        $project = Project::insert([
            'project_name' => $request->name,
            'description' => $request->description,
            'user_id' => Auth::id(),
            'created_at' => now(),
            'updated_at' => now()
        ]);
        if ($project) {

            return response()->json([
                'status' => true,
                'message' => 'Project created successfully',
                'project' => $project
            ], 201);
        }
        return response()->json([
            'status' => false,
            'message' => 'Project creation failed'
        ], 500);
    }

    // Delete project here
    public function deleteProject($project_id)
    {
        $project = Project::where('id', $project_id)->where('user_id', Auth::id())->first();
        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ], 404);
        }
        $project->delete();
        return response()->json([
            'status' => true,
            'message' => 'Project deleted successfully',
            'project' => $project
        ], 201);
    }
}
