# Sequelize Migration Project

This project is a Node.js and Sequelize application that manages database migrations for PostgreSQL. It includes Sequelize models and migration scripts.

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (v8.0 or later)

## Installation

```bash
npm install

Getting Started
Database Configuration
Configure your PostgreSQL credentials in config/config.js.

Running Migrations
To create a new migration file:
node generateMigrations.js number_of_files
This generates number_of_files migration files in the migrations folder.
To apply migrations:
npx sequelize-cli db:migrate
To rollback migrations:
npx sequelize-cli db:migrate:undo
Models
Models are defined in the models folder. Modify and extend them as needed.

Directory Structure
config: Contains configuration files.
migrations: Stores your Sequelize migration scripts.
models: Sequelize models for interacting with the database.
generateMigrations.js: Script to generate new migration files.
package.json: Project configuration and dependencies.

Contributing
If you'd like to contribute to this project, please follow standard contribution guidelines. Create a pull request with your proposed changes or improvements.

Contact
For any questions or issues, please contact [punithakathirvel6@gmail.com].






```
