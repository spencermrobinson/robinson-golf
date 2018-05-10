select distinct o.user_id, u.firstname, u.lastname  from  users u
right join orders o
on o.user_id = u.id
where paid is not false;