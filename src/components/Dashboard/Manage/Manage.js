import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import { Link } from 'react-router-dom';
import './Manage.css';

class Manage extends Component{


    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="admin_buttons_container">
                <Link to="/inventory"><button type='' className='admin_buttons'>Manage Inventory</button></Link>
                <Link to="/admin"><button type='' className='admin_buttons'>Manage Administrators</button></Link>
                <Link to="/orders"><button type='' className='admin_buttons'>Orders</button></Link>
                <Link to="/sales"><button type='' className='admin_buttons'>Sales</button></Link>
                </div>  
                
            </div> 
        )
    }
}
export default Manage;