import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Manage from './components/Dashboard/Manage/Manage.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Admin from './components/Admin/Admin.js';
import Add_Admin from './components/Admin/Add_Admin.js';
import Inventory from './components/Inventory/Inventory.js';
import Step2 from './components/Inventory/Step2';
import Step3 from './components/Inventory/Step3';
import Orders from './components/Orders/Orders.js';
import Products from './components/Products/Products.js';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={ Dashboard}/>
            <Route path='/manage' component={ Manage } />
            <Route path='/admin' component={ Admin }/>
            <Route path='/add_admin' component={ Add_Admin }/>
            <Route path='/inventory' component={ Inventory }/>
            <Route exact path='/step2' component={ Step2 }/>
            <Route path='/step3' component={ Step3 } />
            <Route path='/orders' component={ Orders }/>
            <Route path='/products/:destination' component={ Products}/>
        </Switch>
    )
}