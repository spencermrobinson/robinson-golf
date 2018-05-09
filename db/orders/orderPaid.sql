UPDATE orders
SET paid = true,
WHERE user_id = $1;