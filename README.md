# Migration

This project is a Node.js and Express application that connects to a PostgreSQL database. It includes a set of migration files to set up and modify the database schema.

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
npm install
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

Open database.json and replace the credentials with your own.

```bash
{
"dev": {
"driver": "pg",
"user": "your-username",
"password": "your-password",
"host": "localhost",
"database": "your-database"
}
}
```

## Run Locally

1. **Start the server**

```bash
    brew services start postgresql
    npm start
```

The application will be accessible at http://localhost:your-port.

2. **Database Migrations**

   (i). Rollback the migrations with:

```bash
        npx db-migrate down
```

(ii).Apply the migrations with:

```bash
        npx db-migrate up
```

You can verify the data in the database by following the steps outlined below:

```bash
psql -d your-database -U your-username
\list
\c your-database
\dt
SELECT * FROM your-table;
```

## Support

For any questions, please contact [punithakathirvel6@gmail.com].
