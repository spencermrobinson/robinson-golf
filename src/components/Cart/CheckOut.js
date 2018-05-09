import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


import './Cart.css';


class CheckOut extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            address: null,
            city: null, 
            home_state: null,
            zip: null,
            phone: null

        }
        this.infoHandler = this.infoHandler.bind(this);
        this.checkOut = this.checkOut.bind(this);
        this.onToken = this.onToken.bind(this);
        this.addToOrders = this.addToOrders.bind(this);
        this.paidTrue = this.paidTrue.bind(this);

    }

    onToken = (token) => {
        
        const total = this.props.total;
        token.card = void 0;
        console.log('token:', token);
        axios.post('/api/payment', { token, amount: total}).then(response => {
            alert('We are in business')
        });
    }

    addToOrders(){
        this.props.cart.map( e => { 
            axios.post(`/api/addToOrders/${e.product_id}/${e.product_quantity}`).then(()=>
        console.log('success'))
            }
        )
    }
    paidTrue(){
        axios.put('/api/paidTrue').then(()=>
        console.log('paidTrue') 
    )
    }

    checkOut(){
        const { email, address, city, home_state, zip, phone} =this.state;
        axios.put('/api/userCheckout', {
            email,
            address,
            city,
            home_state,
            zip,
            phone
        }).then(()=> console.log('success'))
    }

    infoHandler(prop, val){
        this.setState({
            [prop]: val
        })
    }

    render(){
        console.log('state:', this.state);
        const user= this.props.user;
        return(
            <div>
                <div>
                    <Header/>
                </div>
                { this.props.user === null ? <div></div>: this.props.user === "puppie" ? <div></div> : <div className="checkout_display_container">
                <div className="input_text_container">
                    <span className='checkout_display_text'>Firstname:</span>
                    <input type='text' className='checkout_inputs' value={user.firstname} />
                </div>
                <div className="input_text_container">
                    <span className='checkout_display_text'>Lastname:</span>
                    <input type='text' className='checkout_inputs' value={user.lastname} />
                </div>
                <div className="input_text_container">
                    <span className='checkout_display_text'>Email:</span>
                    <input type='text' className='checkout_inputs_address' placeholder={user.email} onChange={(e) => this.infoHandler('email', e.target.value)}/>
                </div>
                <div className="input_text_container">
                    <span className='checkout_display_text'>Address:</span>
                    <input type='text' className='checkout_inputs_address' placeholder={user.address} onChange={(e) => this.infoHandler('address', e.target.value)}/>
                </div>
                <div className="input_text_container">
                    <span className='checkout_display_text'>City:</span>
                    <input type='text' className='checkout_inputs' placeholder={user.city} onChange={(e) => this.infoHandler('city', e.target.value)}/>
                </div>
                <div className="input_text_container">
                    <span className='checkout_display_text'>State:</span>
                    <input type='text' className='checkout_inputs' placeholder={user.home_state} onChange={(e) => this.infoHandler('home_state', e.target.value)}/>
                </div>
                <div className="input_text_container">
                    <span className='checkout_display_text'>Zip:</span>
                    <input type='number' className='checkout_inputs' placeholder={user.zip} onChange={(e) => this.infoHandler('zip', e.target.value)}/>
                </div>
                <div className="input_text_container">
                    <span className='checkout_display_text'>Phone:</span>
                    <input type='number' className='checkout_inputs' placeholder={user.phone} onChange={(e) => this.infoHandler('phone', e.target.value)}/>
                </div>
                </div>   }
                <div>
                <button type='button' className='complete_purchase' onClick={()=> {
                    this.addToOrders();
                    this.checkOut()}}>Update Info</button>
                <StripeCheckout
                token={this.onToken}
                stripeKey={process.env.REACT_APP_PUBLIC_KEY}
                amount={this.props.total}/> 
                </div>  
            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        user: state.user,
        total: state.total,
        cart: state.cart
    }
}
export default connect(mapStateToProps, {})(CheckOut);