import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { getAdmins, removeAdmin } from '../../ducks/reducer.js';
import './Admin.css';

class Admin extends Component{
    componentDidMount(){
        this.props.getAdmins();
    }

    
    render(){
        const { removeAdmin } = this.props;
        let adminlist = <div> Gathering Administrators...</div> 
        if(this.props.admins){
        adminlist = this.props.admins.map( (e) =>{
            return(
    <div key={  e.id } className="admin_info_container">
    <span className='admin_profile_name_text'>{e.firstname}</span>
    <span className='admin_profile_name_text'>{e.lastname}</span>
    <div>
    <span className='admin_profile_administrator'>Administrator</span>
    <button type='' className='admin_delete_button' onClick={() => removeAdmin(e.id)}>DELETE</button>
    </div> 
    </div> 
        )})}
        console.log('administrators: ', this.props.admins )
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
                <div className="admin_profile_parent"> 
                    <div className="admin_profile_display">
                        {adminlist} 
                    </div>
                </div>
                <div>
                <Link to="add_admin"><button type='' className='add_admin_button'>Add New Administrator</button></Link></div> 
                  
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{
        admins: state.admins
    }
}
export default connect( mapStateToProps, { getAdmins, removeAdmin })(Admin);