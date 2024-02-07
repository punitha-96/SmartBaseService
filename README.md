# Sequelize Migration and Rate Limiter Project

It describes rate limiting middleware using `express-rate-limit`.

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

Rate limiter configuration can be adjusted in the .env file.

Copy the contents of _.env-template.md_ file provided in the documentation and create your own .env file with your specific configurations.

## Run Locally

### Starting the Server

In vscode, To start the server with rate limiting:

```bash
npm start
```

The server will run on http://localhost:your-port.

Rate limiting is applied, allowing a maximum of _max-number-of-requests_ (example : 3 requests) within a specified window(example : 15 minute window).

## Support

For any questions, please contact [punithakathirvel6@gmail.com].
