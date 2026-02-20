# Todo App - Laravel & React

A full-stack **Todo app** built with **Laravel** (backend) and **React** (frontend). Users can register, log in, create projects, and manage tasks.  

---

## Features

- User **registration** and **login**  
- Create, read, update, delete (**CRUD**) **projects**  
- Create, read, update, delete (**CRUD**) **tasks** under projects  
- Authentication using **Laravel Sanctum**  
- Responsive **React frontend** interacting with Laravel API  

---

## Folder Structure
```
todo-app/
    │
    ├─ backend/ <-- Laravel backend
    │ └─ ...
    │
    ├─ frontend/ <-- React frontend
    │ └─ ...
    │
    └─ README.md <-- This file
```

## Technologies Used

**Backend**: Laravel, PHP, MySQL, Sanctum

**Frontend**: React, Axios (or Fetch API), CSS/Bootstrap/Tailwind (optional)

**Version Control**: Git & GitHub

## Running Instructions
```bash
git clone <this-repo-link>

cd <this-repo-local-name>

# Run Backend First
cd Backend
composer install
cd .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve

# Run Frontend now
cd Frontend
npm install
npm run dev
```