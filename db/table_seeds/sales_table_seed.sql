CREATE TABLE IF NOT EXISTS sales(
id SERIAL,
user_id INTEGER REFERENCES users(id), 
product_id INTEGER REFERENCES products(id),
product_quantity INTEGER, 
sale_date VARCHAR(40));