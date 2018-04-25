UPDATE users
SET admin = true,
    email = $3
WHERE firstname LIKE $1 AND lastname LIKE $2;

SELECT u.id ,u.firstname, u.lastname, u.admin FROM users u
WHERE admin = true;