INSERT INTO sales(user_id, product_id, product_quantity, sale_date)
VALUES ( $1, $2, $3, $4);

DELETE FROM orders
WHERE id = $5;