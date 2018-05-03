import React, { Component } from 'react';
import Header from '../Header/Header.js';
import greenclubs from './dashboard_assets/drop_clubs.png';
import { Link } from 'react-router-dom';
import "./Dashboard.css";


class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            dropdown: false,
            destination: null
        }
        this.dropDown = this.dropDown.bind(this);
        
    }

    dropDown(){
        if(this.state.dropdown === false){
            this.setState({
                dropdown: true
            })
        }else{
            this.setState({
                dropdown: false
            })
        }
    }
    


    render(){
        console.log('destination:', this.state);
        return(
            <div>
                <div>
                    <Header/>
                </div> 
                <div className="drop_down_container">
                    <img src={greenclubs} alt="" className="greenclubs" onMouseEnter={ () => this.dropDown()} onMouseLeave={ () => this.dropDown()}/>
                    { this.state.dropdown === true ? 
                        <div className="drop_down_buttons">
                            <Link to={`/products/${'Brand'}`} className='dash_menu'><button type='button'>Brand</button></Link>
                            <button type='button' className='dash_menu' >Clubs</button>
                            <button type='button' className='dash_menu' >Balls</button>
                            <button type='button' className='dash_menu' >GPS</button>
                            <button type='button' className='dash_menu' >Shoes</button>
                            <button type='button' className='dash_menu' >Apparel</button>
                            <button type='button' className='dash_menu' >Accessories</button>
                            <button type='button' className='dash_menu' >Sale</button>
                        </div> : <div></div> }
                </div> 
            </div> 
        )
    }
}
export default Dashboard;