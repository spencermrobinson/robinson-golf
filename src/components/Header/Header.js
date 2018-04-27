import React, { Component } from 'react';
import { checkLogin, logout } from '../../ducks/reducer.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            if( user === null || user ==="puppie"){
                return (
                    <div>
                    <a href={process.env.REACT_APP_LOGIN}><img src={user_profile} alt="" className="header_user_profile"/></a>
                    </div>
                )
            }else if(  user.admin === true ){
                return(
                    <div>
                    <span className="header_user_name"
                    >{user.firstname}</span>
                    <a href={'http://localhost:7272/auth/logout'}><img src={user_profile} alt="" className="header_user_profile"/></a>
                    <Link to="/manage"><img src={ inventory } alt="" className="header_inventory"/></Link>
                    </div> 
                )
            }else{
                if(user !== null && user !== undefined){
                return(
                    <div>
                    <span className="header_user_name"
                    >{user.firstname}</span>
                        <a href={'http://localhost:7272/auth/logout'}><img src={user_profile} alt="" className="header_user_profile"/></a>
                    </div> 
                )}
            }
        }
        return(
            <div className="header_container">
                <div className="header_logo_container">
                    <Link to="/"><span className="robinson_logo"
                    >R{<img src={ robinson_ball } className="robinson_ball" alt=""/>}G</span></Link>
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