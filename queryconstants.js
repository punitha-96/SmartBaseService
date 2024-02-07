const queries = {
  SELECT_ID_NAME_EMAIL: "SELECT id, name,email FROM users ORDER BY id ASC",
  SELECT_NAME_EMAIL_BY_ID: "SELECT name, email FROM users WHERE id = $1",
  INSERT_NAME_EMAIL:
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id",
  UPDATE_NAME_EMAIL_BY_ID:
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
  DELETE_NAME_EMAIL_BY_ID: "DELETE FROM users WHERE id = $1",
};

module.exports = { queries };
