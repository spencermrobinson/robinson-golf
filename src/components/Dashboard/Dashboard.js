import React, { Component } from 'react';
import Header from '../Header/Header.js';
import greenclubs from './dashboard_assets/drop_clubs.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard.css";


class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            dropdown: false,
            destination: null,
            temperature: null
        }
        this.dropDown = this.dropDown.bind(this);
        this.checkWeather = this.checkWeather.bind(this);
        
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
    checkWeather(){
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=0e272227d036b559c795d4cd3073ad11').then( response => {    
        this.setState({
                temperature: response.data.main.temp
            })
        })
    }


    render(){
        console.log('temperature', this.state.temperature);
        return(
            <div>
                <div>
                    <Header/>
                </div> 
                <div className="drop_down_container">
                    <img src={greenclubs} alt="" className="greenclubs" onClick={ () => this.dropDown()}/>
                    { this.state.dropdown === true ? 
                        <div className="drop_down_buttons">
                            <Link to='/products/Brand' className='dash_menu' ><div>Brand</div></Link>
                            <Link to='/products/Clubs' className='dash_menu' ><div>Clubs</div></Link>
                            <Link to='/products/Balls' className='dash_menu' ><div>Balls</div></Link>
                            <Link to='/products/GPS' className='dash_menu' ><div>GPS</div></Link>
                            <Link to='/products/Shoes' className='dash_menu' ><div>Shoes</div></Link>
                            <Link to='/products/Apparel' className='dash_menu' ><div>Apparel</div></Link>
                            <Link to='/products/Accessories' className='dash_menu' ><div>Accessories</div></Link>
                            <Link to='/products/Sale' className='dash_menu' ><div>Sale</div></Link>
                        </div> : <div></div> }
                </div>
                <div><button type='button' className='weather_button' onClick={() => this.checkWeather()}>Current Temp</button></div>  
            </div> 
        )
    }
}
export default Dashboard;