CREATE TABLE IF NOT EXISTS cart(
id SERIAL, 
user_id INTEGER REFERENCES users(id), 
product_id INTEGER REFERENCES products(id),
product_quantity INTEGER
);