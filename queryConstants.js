const FETCH_USERS_DETAIL = "SELECT id, name, email FROM users ORDER BY id ASC";
const FETCH_USER = "SELECT name, email FROM users WHERE id = $1";
const INSERT_USER =
  "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id";
const UPDATE_USER_BY_ID =
  "UPDATE users SET name = $1, email = $2 WHERE id = $3";
const DELETE_USER_BY_ID = "DELETE FROM users WHERE id = $1";

module.exports = {
  FETCH_USERS_DETAIL,
  FETCH_USER,
  INSERT_USER,
  UPDATE_USER_BY_ID,
  DELETE_USER_BY_ID,
};
