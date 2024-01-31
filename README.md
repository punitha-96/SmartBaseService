# Sequelize Migration and Rate Limiter Project

This project manages database migrations for a PostgreSQL database using Node.js and Sequelize. Additionally, it includes rate limiting middleware using `express-rate-limit`.

## Directory Structure

```bash
config: Contains configuration files.
migrations: Stores your Sequelize migration scripts.
models: Sequelize models for interacting with the database.
generateMigrations.js: Script to generate new migration files.
package.json: Project configuration and dependencies.
```

## Documentation

[Template for .env file](docs/env-template.md)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (check if npm is also installed)
- [git](https://git-scm.com/download/mac)
- [brew](https://brew.sh/)

## Usage

To get started with the project, follow these steps:

1. **Clone the repository:**

```bash
git clone git@github.com:your-username/your-project.git
cd your-project
git checkout your-branch
code .
```

2. **Edit database configuration:**

```bash
sudo -i -u postgres
createuser --interactive --pwprompt your-username
createdb -O your-username your-database
psql
GRANT ALL PRIVILEGES ON DATABASE your-database TO your-username;
quit
```

Configure your PostgreSQL credentials in _.env_ file.

Rate limiter configuration can also be adjusted in the .env file.

Copy the contents of _.env-template.md_ file provided in the documentation and create your own .env file with your specific configurations.

## Run Locally

1. To automatically generate new migration files:

```bash
brew services start postgresql
node generateMigrations.js number_of_files
```

This generates _number_of_files_ migration files in the migrations folder.

2. **Database Migrations**

   (i). Apply migrations with:

```bash
        npx sequelize-cli db:migrate
```

This will execute the _up_ function in the pending migration files, making the corresponding changes to your database schema.

(ii).Rollback recent migration with:

```bash
        npx sequelize-cli db:migrate:undo
```

This command will execute the _down_ function in the most recently applied migration, reverting the changes made by that migration.

(iii).Rollback all migrations with:

```bash
        npx sequelize-cli db:migrate:undo:all
```

This command will execute the _down_ function for each previously applied migration in reverse order, effectively undoing all the migrations.

You can then verify the data in the database by following the steps outlined below:

```bash
psql -d your-database -U your-username
\list
\c your-database
\dt
SELECT * FROM your-table;
brew services stop postgresql
```

### Starting the Server

To start the server with rate limiting:

```bash
node index.js
```

The server will run on http://localhost:your-port.

Rate limiting is applied, allowing a maximum of _max-number-of-requests_ (example : 2 requests) within a specified window(example : 15 minute window).

## Support

For any questions, please contact [punithakathirvel6@gmail.com].
