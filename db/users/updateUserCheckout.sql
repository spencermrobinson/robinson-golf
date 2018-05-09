UPDATE users
SET email = $2,
    address = $3,
    city = $4,
    home_state = $5,
    zip = $6,
    phone = $7
WHERE id = $1;
