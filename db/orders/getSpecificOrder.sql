select o.user_id, o.fulfilled, o.id, o.product_id, o.order_date, p.product_type, p.product_class, p.brand, p.model, p.picture, p.flex, p.length, p.loft, p.gender, p.color, p.size, p.price, o.product_quantity   from  products p
right join orders o
on o.product_id = p.id
where paid is not false AND user_id = $1;