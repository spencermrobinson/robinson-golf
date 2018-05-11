DELETE FROM orders 
WHERE user_id = $1 AND paid is false;

INSERT INTO orders(user_id, product_id, product_quantity, paid, fulfilled, order_date)
VALUES($1, $2, $3, false, false, $4);