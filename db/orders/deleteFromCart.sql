DELETE FROM cart 
WHERE product_id = $1 AND user_id =$2;

SELECT c.user_id, c.product_id, c.product_quantity, p.brand, p.model, p.picture, p.flex, p.length, p.loft, p.gender, p.color, p.size, p.price, p.sale, p.new_price FROM  products p 
RIGHT JOIN cart c 
ON p.id = c.product_id
WHERE c.user_id = $2;