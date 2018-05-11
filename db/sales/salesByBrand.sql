select s.product_id, s.product_quantity, p.brand, p.price from sales s
right join products p
on s.product_id = p.id
where s.product_quantity is not null; 