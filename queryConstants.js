const SELECT_SPECIFIC_COLUMNS =
  "SELECT id, name, email FROM users ORDER BY id ASC";
const SELECT_ROW_BY_ID = "SELECT name, email FROM users WHERE id = $1";
const INSERT_ROW =
  "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id";
const UPDATE_ROW_BY_ID = "UPDATE users SET name = $1, email = $2 WHERE id = $3";
const DELETE_ROW_BY_ID = "DELETE FROM users WHERE id = $1";

module.exports = {
  SELECT_SPECIFIC_COLUMNS,
  SELECT_ROW_BY_ID,
  INSERT_ROW,
  UPDATE_ROW_BY_ID,
  DELETE_ROW_BY_ID,
};
