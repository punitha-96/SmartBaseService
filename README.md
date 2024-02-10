# Sequelize Migration

This project is a Node.js and Sequelize application that manages database migrations for PostgreSQL. It includes Sequelize models and migration scripts.

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
- [iterm2](https://iterm2.com/)

## Usage

To get started with the project, follow these steps:

In vscode,

1. **Clone the repository:**

```bash
git clone git@github.com:your-username/your-project.git
cd your-project
code .
npm install
```

In iterm2,

2. **Edit database configuration:**

```bash
brew install postgresql
sudo -i -u postgres
createuser --interactive --pwprompt your-username
createdb -O your-username your-database
psql
GRANT ALL PRIVILEGES ON DATABASE your-database TO your-username;
quit
```

Configure your PostgreSQL credentials in _.env_ file. Copy the contents of _.env-template.md_ file provided in the documentation and create your own .env file with your specific configurations.

## Run Locally

1. In iterm2, to start postgresql server:

```bash
brew services start postgresql
```

2. In vscode, To automatically generate new migration files:

```bash
node generateMigrations.js number-of-files
```

This generates _number_of_files_ migration files in the migrations folder.

2. **Database Migrations**

   (i). In vscode, Apply migrations with:

```bash
        npx sequelize-cli db:migrate
```

This will execute the _up_ function in the pending migration files, making the corresponding changes to your database schema.

(ii).In vscode, Rollback recent migration with:

```bash
        npx sequelize-cli db:migrate:undo
```

This command will execute the _down_ function in most recently applied migration, reverting the changes made by that migration.

(iii).In vscode, Rollback all migrations with:

```bash
        npx sequelize-cli db:migrate:undo:all
```

This command will execute the _down_ function for each previously applied migration in reverse order, effectively undoing all the migrations.

in iterm2, You can then verify the data in the database by following the steps outlined below:

```bash
psql -d your-database -U your-username
\list
\c your-database
\dt
SELECT * FROM your-table;
brew services stop postgresql
```

## Support

For any questions, please contact [punithakathirvel6@gmail.com].
