INSERT INTO users(auth_id, firstname, lastname, admin)
VALUES($1, $2, $3, $4);

SELECT * FROM users
where auth_id = $1;