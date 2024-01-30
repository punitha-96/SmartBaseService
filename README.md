# My Project

This project is a Node.js and Express application that connects to a PostgreSQL database. It includes a set of migration files to set up and modify the database schema using `pg-migrate`.

## Installation

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (included with Node.js)

**Install Dependencies:**
npm install

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

In the terminal,
git clone git@github.com:your-username/your-project.git
cd your-project
git checkout your-branch
code .

## Edit database configuration:

In the terminal,
sudo -i -u postgres
createuser --interactive --pwprompt your-username
createdb -O your-username your-database
psql
GRANT ALL PRIVILEGES ON DATABASE your-database TO your-username;
quit

Open database.json and replace the credentials with your own.
{
"dev": {
"driver": "pg",
"user": "your-username",
"password": "your-password",
"host": "localhost",
"database": "your-database"
}
}

psql -d your-database -U your-username
\list
\c your-database
\dt

## Usage

To get started with the project, follow these steps:

1. Run the application with:
   In package.json,
   "scripts": {
   "start": "node your_filename.js",
   }
   npm start

The application will be accessible at http://localhost:3000.

## Database Migrations

brew services start postgresql

All migration scripts are stored in the migrations folder.
Apply migrations with:
npx db-migrate up
Rollback migrations with:
npx db-migrate down

## Contributing

If you'd like to contribute, please follow these guidelines...

## Contact

For any questions, please contact [punithakathirvel6@gmail.com].

Replace "your-username," "your-project," and "your-email@example.com" with your actual GitHub username, project name, and email address. Feel free to adjust the wording and details based on your project's specific needs.
