# Sequelize Migration and Rate Limiter Project

Basic Node.js and Express application that serves as an API interacting with a PostgreSQL database.

## API Endpoints

```bash
GET /: Description of the root endpoint.
GET /users: Get a list of all users.
GET /users/:id: Get details of a specific user.
POST /users: Create a new user.
PUT /users/:id: Update a user.
DELETE /users/:id: Delete a user.
```

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (check if npm is also installed)
- [git](https://git-scm.com/download/mac)
- [brew](https://brew.sh/)
- [postman](https://www.postman.com/downloads/)

## Usage

To get started with the project, follow these steps:

1. **Clone the repository:**

```bash
git clone git@github.com:your-username/your-project.git
cd your-project
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

## Run Locally

### Starting the Server

To start the server with rate limiting:

```bash
brew services start postgresql
node index.js
```

The server will run on http://localhost:your-port.

Using Postman tool, you can verify the output.

## Support

For any questions, please contact [punithakathirvel6@gmail.com].
