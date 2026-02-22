<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'user_id' => 1,
                'project_name' => 'Website Redesign',
                'description'  => 'Redesign the company marketing website.',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'user_id' => 1,
                'project_name' => 'Mobile App Development',
                'description'  => 'Build the new productivity mobile app.',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'user_id' => 3,
                'project_name' => 'Internal CRM System',
                'description'  => 'Develop internal CRM for sales team.',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
        ];

        Project::insert($projects);
    }
}
