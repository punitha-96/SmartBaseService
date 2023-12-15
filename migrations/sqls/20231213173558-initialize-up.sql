/* Replace with your SQL commands */

CREATE TABLE userSchema (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    email VARCHAR(100) UNIQUE NOT NULL,
    profile_image_url VARCHAR(255), 
    role_of_person VARCHAR(10) CHECK (role_of_person IN ('user', 'admin')) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);
