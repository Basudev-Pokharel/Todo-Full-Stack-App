<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tasks = [
            // Project 1
            ['project_id' => 1, 'task' => 'Create wireframes', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 1, 'task' => 'Design UI mockups', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 1, 'task' => 'Implement frontend', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 1, 'task' => 'Deploy to production', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 1],

            // Project 2
            ['project_id' => 2, 'task' => 'Define app requirements', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 2, 'task' => 'Setup backend API', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 2, 'task' => 'Develop mobile UI', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 2, 'task' => 'Publish to app stores', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],

            // Project 3
            ['project_id' => 3, 'task' => 'Design database schema', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 3, 'task' => 'Implement authentication', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 3, 'task' => 'Build dashboard', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
            ['project_id' => 3, 'task' => 'User testing & QA', 'created_at' => now(), 'updated_at' => now(), 'is_completed' => 0],
        ];
        Task::insert($tasks);
    }
}
