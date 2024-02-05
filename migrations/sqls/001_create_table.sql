-- 001_create_table.sql
CREATE TABLE IF NOT EXISTS example (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
