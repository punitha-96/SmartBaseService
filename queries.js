const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});
const {
  FETCH_USERS_DETAIL,
  FETCH_USER,
  INSERT_USER,
  UPDATE_USER_BY_ID,
  DELETE_USER_BY_ID,
} = require("./queryconstants");

const getUsers = (request, response) => {
  pool.query(FETCH_USERS_DETAIL, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(FETCH_USER, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(INSERT_USER, [name, email], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    const userId = results.rows[0].id;
    response.status(201).send(`User added with ID: ${userId}`);
  });
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(UPDATE_USER_BY_ID, [name, email, id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User modified with ID: ${id}`);
  });
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(DELETE_USER_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
