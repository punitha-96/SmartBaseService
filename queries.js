require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const { queries } = require("./queryconstants");
const { HttpStatus } = require("./httpStatus");

const getUsers = (request, response) => {
  pool.query(queries.SELECT_ID_NAME_EMAIL, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(HttpStatus.OK.code).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(queries.SELECT_NAME_EMAIL_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(HttpStatus.OK.code).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(queries.INSERT_NAME_EMAIL, [name, email], (error, results) => {
    if (error) {
      throw error;
    }
    const userId = results.rows[0].id;
    response
      .status(HttpStatus.CREATED.code)
      .send(`User added with ID: ${userId}`);
  });
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    queries.UPDATE_NAME_EMAIL_BY_ID,
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(HttpStatus.OK.code).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(queries.DELETE_NAME_EMAIL_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(HttpStatus.OK.code).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
