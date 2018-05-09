require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const ctrl = require('./controller/controller.js');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL
}=process.env;

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
    console.log('db connected!')
    
}).catch((err) => console.log(err));



app.use( session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db')
    console.log('test:', profile)
   db.users.find_user([profile.id]).then(users => {
       if(!users[0]){
           db.users.create_user([profile.id, profile.name.givenName, profile.name.familyName, false]).then(users => {    
           done(null, users[0].id);  
           })
       }else{
           done(null, users[0].id)
       }
   })
}));

    passport.serializeUser( function(profile, done){
        done(null, profile)
        
    });
    passport.deserializeUser( (profile, done) => {
        console.log('Profile:', profile)
        app.get('db').users.find_session_user([profile]).then( user => {
            done(null, user[0]);
        })
    });

    app.get('/auth0', passport.authenticate('auth0'));
    app.get('/auth/callback', passport.authenticate('auth0', {
        successRedirect: 'http://localhost:3000/#/',
        failureRedirect: 'http://localhost:3000/#/auth'
        
    }));

    app.get('/auth/authenticate', (req, res) => {
        if(req.user){
            res.status(200).send(req.user);    
        }else{
            res.status(401).send('YOU ARE NOT AUTHORIZED! PLEASE LOGIN. THANK YOU!')
        }
    })
    app.get('/auth/logout', (req, res) => {
        req.logOut();
        res.redirect('http://localhost:3000/#/')
        console.log('User logout successful', req.user)
    });

    app.get('/api/check', ctrl.checkLogin)
    app.get('/api/admins', ctrl.getAdmins);
    app.put('/api/removeadmin/:id', ctrl.removeAdmin);
    app.put('/api/newAdmin/:firstname/:lastname/:email', ctrl.addAdmin);
    app.post('/api/add_inventory', ctrl.addInventory);
    app.get('/api/searchBrand/:brand', ctrl.searchBrand);
    app.get('/api/product_type/:product_type', ctrl.getByProduct_Type);
    app.get('/api/product_class/:product_class', ctrl.getByProduct_Class);
    app.get('/api/apparelBrandSearch/:brand', ctrl.apparelBrandSearch);
    app.get('/api/getBrand/:id', ctrl.getBrand );
    app.post('/api/addToCart/:product_id/:quantity', ctrl.addToCart);
    app.get('/api/getCart', ctrl.getCart );
    app.delete('/api/deleteFromCart/:product_id', ctrl.deleteFromCart);
    app.put('/api/updateQuantity/:quantity/:product_id', ctrl.updateQuantity);
    app.put('/api/userCheckout', ctrl.updateUserCheckout);

    app.post('/api/payment', function(req, res, next){
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for (var i = 0; i < amountArray.length; i++) {
          if(amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
              pennies.push(amountArray[i + 1]);
            } else {
              pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
              pennies.push(amountArray[i + 2]);
            } else {
              pennies.push("0");
            }
              break;
          } else {
              pennies.push(amountArray[i])
          }
        }
        const convertedAmt = parseInt(pennies.join(''));
      
        const charge = stripe.charges.create({
        amount: convertedAmt,
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
      }, function(err, charge) {
          if (err) return res.sendStatus(500)
          return res.sendStatus(200);
      });
      });
    
    app.listen( SERVER_PORT, () => console.log(`Listening to port: ${SERVER_PORT} `));
