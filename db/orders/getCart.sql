select c.user_id, c.product_id, c.product_quantity, p.brand, p.model, p.picture, p.flex, p.length, p.loft, p.gender, p.color, p.size, p.price, p.sale, p.new_price from  products p 
right join cart c 
on p.id = c.product_id
where c.user_id = $1