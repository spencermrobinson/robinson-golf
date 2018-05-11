select distinct o.user_id, o.order_date, u.firstname, u.lastname  from  users u
right join orders o
on o.user_id = u.id
where paid is not false
order by order_date desc;