import React, { Component } from 'react';
import { checkLogin, logout } from '../../ducks/reducer.js';
import { connect } from 'react-redux';
import user_profile from './header-assets/user.png';
import inventory from './header-assets/inventory.png';
import robinson_ball from './header-assets/golf_robinson_ball.png';

import './Header.css'

class Header extends Component {
    
    componentDidMount(){
        const {  checkLogin } = this.props;
        checkLogin();
    }
    
  
    
    
    render(){
        console.log('user', this.props.user)
        
        
        
        let headerRender = function(user){
            if( user == null || user =="puppie"){
                return (
                    <div>
                    <a href={process.env.REACT_APP_LOGIN}><img src={user_profile} className="header_user_profile"/></a>
                    </div>
                )
            }else if(  user.admin === false ){
                return(
                    <div>
                    <span className="header_user_name"
                    >{user.firstname}</span>
                    <a href={'http://localhost:7272/auth/logout'}><img src={user_profile} className="header_user_profile"/></a>
                    <img src={ inventory } className="header_inventory"/>
                    </div> 
                )
            }else{
                if(user !== null && user !== undefined){
                return(
                    <div>
                    <span className="header_user_name"
                    >{user.firstname}</span>
                        <a href={'http://localhost:7272/auth/logout'}><img src={user_profile} className="header_user_profile"/></a>
                    </div> 
                )}
            }
        }
        return(
            <div className="header_container">
                <div className="header_logo_container">
                    <span className="robinson_logo"
                    >Rob{<img src={ robinson_ball } className="robinson_ball"/>}nson Golf</span>
                </div> 
                <div className="header_icons">
                    { headerRender(this.props.user) }
                </div> 
            </div>
        )
    }

}
function mapStateToProps(state){
    return { 
        user: state.user
    }
}
export default connect( mapStateToProps, { logout, checkLogin})(Header);