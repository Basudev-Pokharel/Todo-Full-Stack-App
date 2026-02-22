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
    ├─ images/ 
    │
    └─ README.md <-- This file
```

## Technologies Used

**Backend**: Laravel, PHP, MySQL, Sanctum

**Frontend**: React, Axios, CSS(Vanilla)

**Version Control**: Git & GitHub

## Running Instructions
```bash
git clone https://github.com/Basudev-Pokharel/Todo-Full-Stack-App.git

cd Todo-Full-Stack-App

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


# Images for your reference
## Desktop 
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; max-width: 800px; margin: auto;">
  <img src="./images/Desktop_home.png" alt="Desktop Home" style="width: 100%; border-radius: 5px;" />
  <img src="./images/Desktop_login.png" alt="Desktop Login" style="width: 100%; border-radius: 5px;" />
  <img src="./images/Desktop_dashboard.png" alt="Desktop Dashboard" style="width: 100%; border-radius: 5px;" />
</div>

## Mobile
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; max-width: 800px; margin: auto;">
  <img src="./images/movile_home.png" alt="Mobile Home" style="width: 100%; border-radius: 5px;" />
  <img src="./images/mobile_dashboard.png" alt="Mobile Dashboard" style="width: 100%; border-radius: 5px;" />
  <img src="./images/mobile_add-project.png" alt="Mobile project add" style="width: 100%; border-radius: 5px;" />
  <img src="./images/mobile_task_add.png" alt="MobileTask add" style="width: 100%; border-radius: 5px;" />
  <img src="./images/mobile_finished.png" alt="MobileTask add" style="width: 100%; border-radius: 5px;" />
</div>