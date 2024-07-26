# PG-Admin-Backend

PG-Admin-Backend is the backend service for the comprehensive web application PG-Admin-Website, designed to efficiently manage and administer PG (Paying Guest) accommodations. This backend service is built using Node.js and Express.js and connects to a MySQL database. It handles all server-side operations including user management, room management, booking management, payment tracking, notifications, and reporting.

## Features

- **User Management:** Create, read, update, and delete (CRUD) operations for users.
- **Room Management:** Manage room details including availability and occupancy.
- **Booking Management:** Handle bookings, including new bookings, cancellations, and updates.
- **Payment Tracking:** Keep track of payments made by the tenants.
- **Notifications:** Send notifications to users about important updates or reminders.
- **Reporting:** Generate reports on occupancy, payments, and other key metrics.
- **Authentication:** Secure authentication using JWT (JSON Web Tokens).

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pg-admin-backend.git
    cd pg-admin-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the database:
    - Create a MySQL database for the project.
    - Update the database configuration in the `.env` file.

4. Run the development server:
    ```bash
    npm start
    ```

PG-Admin-Backend provides the robust and scalable server-side functionality required to manage PG accommodations effectively.
