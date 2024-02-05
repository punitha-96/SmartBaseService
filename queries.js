const databaseConfig = require("./database.json").dev; // Assuming your config is in dev environment
const Pool = require("pg").Pool;
const pool = new Pool(databaseConfig);

const {
  SELECT_SPECIFIC_COLUMNS,
  SELECT_ROW_BY_ID,
  INSERT_ROW,
  UPDATE_ROW_BY_ID,
  DELETE_ROW_BY_ID,
} = require("./queryconstants");

const getUsers = (request, response) => {
  pool.query(SELECT_SPECIFIC_COLUMNS, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(SELECT_ROW_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(INSERT_ROW, [name, email], (error, results) => {
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

  pool.query(UPDATE_ROW_BY_ID, [name, email, id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User modified with ID: ${id}`);
  });
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(DELETE_ROW_BY_ID, [id], (error, results) => {
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
