require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const ctrl = require('./controller/controller.js');

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


    
    app.listen( SERVER_PORT, () => console.log(`Listening to port: ${SERVER_PORT} `));
