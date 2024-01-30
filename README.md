# Sequelize Migration and Rate Limiter Project

This project manages database migrations for a PostgreSQL database using Node.js and Sequelize. Additionally, it includes rate limiting middleware using `express-rate-limit`.

## Prerequisites

Before you start, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (version 8.0 or later)

## Installation

```bash
npm install

Getting Started
Database Configuration
Configure your PostgreSQL credentials in config/config.js.

Running Migrations
Generating Migration Files
To create new migration files, run the following command:
node generateMigrations.js 5
This command generates 5 migration files in the migrations folder.
Applying Migrations
To apply migrations and update the database schema:
npx sequelize-cli db:migrate

Rolling Back Migrations
To rollback migrations:
npx sequelize-cli db:migrate:undo

Rate Limiter Middleware
Rate limiting middleware has been added to restrict the number of requests to the Express application.

Configuration
Rate limiter configuration can be adjusted in the .env file. Current configuration:
RATE_LIMIT_MAX=2

Starting the Server
To start the server with rate limiting:
node index.js

The server will run on http://localhost:3000. Rate limiting is applied, allowing a maximum of 2 requests within a 15-minute window.

Models
The models folder contains Sequelize models for interacting with the database. Modify and extend these models as needed.

Directory Structure
config: Contains configuration files.
migrations: Stores Sequelize migration scripts.
models: Sequelize models for database interactions.
generateMigrations.js: Script to generate new migration files.
index.js: Main entry point containing migration and rate limiter code.
.env: Configuration file for environment variables.
Contributing
If you'd like to contribute to this project, please follow standard contribution guidelines. Create a pull request with your proposed changes or improvements.

Contact
For any questions or issues, please contact [punithakathirvel6@gmail.com].

Make sure to replace the contact email with your actual contact information. This README gives a comprehensive overview of the project, including the newly added components.
```
