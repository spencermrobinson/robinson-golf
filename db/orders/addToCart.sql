INSERT INTO cart( user_id, product_id, product_quantity)
VALUES($1, $2, $3);

SELECT * FROM cart;