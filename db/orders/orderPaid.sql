UPDATE orders
SET paid = true
WHERE user_id = $1;

delete from cart
where user_id = $1;