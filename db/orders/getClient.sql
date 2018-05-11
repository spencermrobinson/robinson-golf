select o.user_id, u.firstname, u.lastname, u.email   from  users u
right join orders o
on o.user_id = u.id
where paid is not false AND user_id = $1;