import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './Admin.css';

class Admin extends Component{


    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <div className="admin_ribbon">
                        <span className='admin_ribbon_text'>Manage Administrators</span>
                    </div> 
                </div> 
                <div>
                
                </div>
                <div>
                    <Link to="add_admin"><button type='' className='add_admin_button'>Add New Administrator</button></Link>
                </div>   
            </div> 
        )
    }
}
export default Admin;