CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    email VARCHAR(40), 
    phone INTEGER,
    address VARCHAR(40),
    city VARCHAR(20),
    home_state VARCHAR(20),
    zip VARCHAR(10),
    admin BOOLEAN
        

);