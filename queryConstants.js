const SELECT_ALL_ROWS = "SELECT name, email FROM users ORDER BY id ASC";
const SELECT_ROW_BY_ID = "SELECT name, email FROM users WHERE id = ?";
const INSERT_ROW =
  "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id";
const UPDATE_ROW_BY_ID =
  "UPDATE your_table_name SET column1 = ?, column2 = ?, column3 = ? WHERE id = ?";
const DELETE_ROW_BY_ID = "DELETE FROM your_table_name WHERE id = ?";

module.exports = {
  SELECT_ALL_ROWS,
  SELECT_ROW_BY_ID,
  INSERT_ROW,
  UPDATE_ROW_BY_ID,
  DELETE_ROW_BY_ID,
};
