# Todo App - Laravel & React

A full-stack **Todo app** built with **Laravel** (backend) and **React** (frontend). Users can register, log in, create & delete projects, and manage tasks(complete mark, delete).  

---

## Features

- User **registration** and **login**  
- Create, read,  delete **projects**  
- Create, read, mark as complete, delete  **tasks** under projects  
- Authentication using **Laravel Sanctum**  
- Responsive **React frontend** interacting with Laravel API  

---

This project is built using React (frontend) and Laravel (backend).
No additional UI libraries or heavy third-party packages were used. I used vanilla **CSS** for styling
Only core framework features and Axios for API communication are utilized. _⚠⚠ AI, no UI tools_

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
> machine is windows <br>


**Backend**: Laravel(12.0), PHP(8.2), MariaDB(10.4.32), Sanctum(4.0)
I used XAMPP to provide PHP, MySQL.

**Frontend**: React(19.2.0), Axios(1.13.5), CSS(Vanilla), React Router(7.13.0)

**Version Control**: Git & GitHub

## Running Instructions
```bash
git clone https://github.com/Basudev-Pokharel/Todo-Full-Stack-App.git

cd Todo-Full-Stack-App

# Run Backend First
cd Backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve

# Run Frontend now
cd ../Frontend
npm install
npm run dev
```

## Requirements

### Backend (Laravel): 
- PHP 8.2 or higher,  Composer
- MySQL or MariaDB

### Frontend (React)
- Node.js (v18+ recommended)
- npm
- Libraries: react router, axios, mentioned above


# Images for your reference
## Desktop 
<table>
  <tr>
    <td><img src="./images/Desktop_home.png" width="400"/></td>
    <td><img src="./images/Desktop_login.png" width="400"/></td>
  </tr>
  <tr>
    <td><img src="./images/Desktop_dashboard.png" width="400"/></td>
    <td></td>
  </tr>
</table>

## Mobile
<table>
  <tr>
    <td><img src="./images/movile_home.png" width="250"/></td>
    <td><img src="./images/mobile_dashboard.png" width="250"/></td>
    <td><img src="./images/mobile_add-project.png" width="250"/></td>
  </tr>
  <tr>
    <td><img src="./images/mobile_task_add.png" width="250"/></td>
    <td><img src="./images/mobile_finished.png" width="250"/></td>
  </tr>
</table>

# COnnect with me in Socials
[LinkedIN](https://www.linkedin.com/in/basudev-pokharel)