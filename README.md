# Creation of RESTful API with Node.js, Express, and PostgreSQL.

Basic Node.js and Express application that serves as an API interacting with a PostgreSQL database.

## API Reference

#### Get all users

```http
  GET /v1/users
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `api_key` | `string` | **Required**. Your API key (TBD) |

#### Get user

```http
  GET /v1/user/${id}
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch(TBD) |

#### Crete user

```http
  POST /v1/users
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch(TBD) |

#### Update user

```http
  PATCH /v1/users/${id}
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch(TBD) |

#### Delete user

```http
  DELETE /v1/users/${id}
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch(TBD) |

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

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USERNAME`

`DB_PASSWORD`

`DB_PORT`

`API_RATE_LIMIT`

`WHITELISTED_IP's`

`BLACKLISTED_IP's`
Configure your PostgreSQL credentials in .env file. Copy the contents of env-template.md file provided in the documentation and create your own .env file with your specific configurations.

## Run Locally

### Starting the Server

In iterm2, Start the postgresql server :

```bash
brew services start postgresql
```

In vscode, start the web server :

```bash
npm start
```

The server will run on http://localhost:your-port.

Using Postman tool, you can verify the output.

## Support

For any questions, please contact [punithakathirvel6@gmail.com].
