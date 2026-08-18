# Lara-React-CRUD

This project is testing CRUD (Create, Read, Update, Delete) application built with Laravel for the backend and React for the frontend, scaffolded using the official Laravel React Starter Kit (Inertia.js) for seamless full-stack integration.

## Key Features & Tech Stack
* **Backend:** Laravel (Routing, Controllers, Eloquent ORM)
* **Frontend:** React (Component-driven UI)
* **Adapter / Glue:** Inertia.js (Seamless SPA routing & data passing)
* **Authentication:** Pre-configured via Laravel Starter Kit
* **Styling:** Tailwind CSS, and Shadcn/ui

## Requirements
- PHP >= 8.2 or higher
- Composer
- Node.js >= 14.x
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ZinHt9tHlaing/lara-react-crud
    cd lara-react-crud
    ```

2. Install backend dependencies:
    ```bash
    composer install
    ```

3. Set up the `.env` file:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Configure your database in the `.env` file and run migrations:
    ```bash
    php artisan migrate
    ```

5. Install frontend dependencies:
    ```bash
    npm install
    ```

6. Build the frontend and backend assets and start the development server:
    ```bash
    composer run dev
    ```

## Usage
- Access the application at `http://localhost:8000`.
- Use the interface to perform CRUD operations.
