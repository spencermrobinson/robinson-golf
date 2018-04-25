UPDATE USERS
SET admin = false
WHERE id = $1;

SELECT u.id ,u.firstname, u.lastname, u.admin FROM users u
WHERE admin = true;

