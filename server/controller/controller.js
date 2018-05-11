module.exports = {

    checkLogin: (req, res) => {
        const db = req.app.get('db');

        if(!req.user){
            res.status(200).send('puppie')
            }else{
                    db.users.find_session_user([1]).then( response => {
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
    },
    addToCart: (req, res) => {
        const db = req.app.get('db');
        db.orders.addToCart([req.user.id, req.params.product_id, req.params.quantity]).then( response => {
            console.log('added to cart:', response)
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    }, 
    getCart: (req, res) => {
        const db = req.app.get('db');
        db.orders.getCart([req.user.id]).then(response => {
            console.log('fetched cart:', response)
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    deleteFromCart: (req, res)=> {
        const db = req.app.get('db');
        db.orders.deleteFromCart([req.params.product_id, req.user.id]).then( response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },
    
    updateQuantity: (req, res) => {
        console.log('req.params:', req.params)
        const db = req.app.get('db');
        db.orders.updateQuantity([req.params.quantity, req.params.product_id, req.user.id]).then( response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },
    updateUserCheckout: (req, res) => {
        const db = req.app.get('db');
        console.log('req.body:', req.body)
        db.users.updateUserCheckout([ req.user.id, req.body.email, req.body.address, req.body.city, req.body.home_state, req.body.zip, req.body.phone]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    addToOrders: (req, res) => {
        const d = new Date();
        const date = d.toString();
        const db = req.app.get('db');
        db.orders.addCartToOrders([1, req.params.product_id, req.params.product_quantity, date]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)))
    },
    
    paidTrue: (req, res) => {
        const db = req.app.get('db');
        db.orders.orderPaid([1]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },
    getOrders: (req, res) => {
        const db = req.app.get('db');
        db.orders.getOrders().then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },
    getSpecifOrder: (req, res) => {
        const db = req.app.get('db');
        db.orders.getSpecificOrder([req.params.id]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },
    addToSales: (req, res) => {
        const db = req.app.get('db'); 
        db.sales.add_to_sales([ req.body.user_id, req.body.product_id, req.body.product_quantity, req.body.sale_date, req.body.id]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    getClient: (req, res) => {
        const db = req.app.get('db');
        db.orders.getClient([req.params.id]).then(response =>{

            res.status(200).send(response)
        }).catch((err)=> res.status(500).send(console.log(err)));
    },

    salesByBrand: (req, res) => {
        const db = req.app.get('db');
        db.sales.salesByBrand().then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

   
}