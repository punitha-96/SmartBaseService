# Migration

This project is a Node.js and Express application that connects to a PostgreSQL database. It includes a set of migration files to set up and modify the database schema.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (check if npm is also installed)
- [git](https://git-scm.com/download/mac)
- [brew](https://brew.sh/)
- [postman](https://www.postman.com/downloads/)
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
sudo -i -u postgres
createuser --interactive --pwprompt your-username
createdb -O your-username your-database
psql
GRANT ALL PRIVILEGES ON DATABASE your-database TO your-username;
quit
```

Configure your PostgreSQL credentials in database.json file and .env files. Copy the contents of database-template.md and env-template.md file provided in the documentation and create your own database.json and .env files with your specific configurations.

## Run Locally

### Starting the Server

In iterm2, start the postgresql server :

```bash
brew services start postgresql
```

In vscode, start the web server :

```bash
npm start
```

The server will run on http://localhost:your-port.

Using Postman tool, you can verify the output.

2. **Database Migrations**

   (i). In vscode, Rollback the migrations with:

```bash
        npx db-migrate down
```

(ii).In vscode, Apply the migrations with:

```bash
        npx db-migrate up
```

You can verify the data in the database by following the steps outlined below:
In iterm2,

```bash
psql -d your-database -U your-username
\list
\c your-database
\dt
SELECT * FROM your-table;
```

## Support

For any questions, please contact [punithakathirvel6@gmail.com].
