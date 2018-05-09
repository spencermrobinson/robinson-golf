CREATE TABLE IF NOT EXISTS orders(
id SERIAL, 
user_id INTEGER REFERENCES users(id), 
product_id INTEGER REFERENCES products(id),
product_quantity INTEGER,
paid BOOLEAN,
fulfilled BOOLEAN
);