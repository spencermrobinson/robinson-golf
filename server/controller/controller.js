module.exports = {

    checkLogin: (req, res) => {
        const db = req.app.get('db');

        if(!req.user){
            res.status(200).send('puppie')
            }else{
                    db.users.find_session_user([req.user.id]).then( response => {
                        res.status(200).send(response[0])
                    }).catch( (err) => res.status(500).send(console.log(err)))
                
            }
    }, 

    getAdmins: (req, res) => {
        const db = req.app.get('db')
        db.users.get_admins().then( response => {
            res.status(200).send(response)
        }).catch( (err) => res.status(500).send(console.log(err)))
    },
    removeAdmin: (req, res) => {
        const db = req.app.get('db');
        db.users.remove_admin([req.params.id]).then(response => {
            res.status(200).send(response)
        }).catch( (err) => res.status(500).send(console.log(err)))
    },

    addAdmin: (req, res) => {
        const db = req.app.get('db');
        db.users.add_admin([req.params.firstname, req.params.lastname, req.params.email]).then(response => {
            console.log('addAdmin:', response)
            res.status(200).send(response)
        }).catch( (err) => res.status(500).send(console.log(err)));
    },

    addInventory: (req, res ) => {
        const db = req.app.get('db');
        console.log('product req.body', req.body)
        const { product_type, product_class, brand, model, image, flex, length, loft, gender, color, size, price, quantity, sale, new_price} = req.body;
        db.products.add_new_product([product_type, product_class, brand, model, image, flex, length, loft, gender, color, size, price, quantity, sale, new_price]).then(response => {
            console.log('product created', response)
            res.status(200).send(response)
        }).catch( (err) => res.status(500).send(console.log(err)));
    }, 
     
    searchBrand: (req, res ) => {
        const db = req.app.get('db');
        console.log('search brand:', req.params)
        db.products.search_brand([req.params.brand]).then( response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    getByProduct_Type: (req, res ) => {
        const db = req.app.get('db');
        db.products.getAll_product_type([req.params.product_type]).then( response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));

    },
    
    getByProduct_Class: (req, res ) => {
        const db = req.app.get('db');
        console.log('searchClass:', req.params)
        db.products.getProductClass([req.params.product_class]).then( response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));

    },

    apparelBrandSearch: (req, res) => {
        const db = req.app.get('db');
        db.products.searchByBrandApparel([req.params.brand]).then( response => {
            console.log('apparel brand', response)
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    getBrand: (req, res) => {
        const db = req.app.get('db');
        db.product.getProduct([req.params.id]).then( response => {
            console.log('specific product', response)
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    }
}