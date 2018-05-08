import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import './Cart.css';


class CheckOut extends Component {
    constructor(){
        super();
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            address: null,
            city: null, 
            home_state: null,
            zip: null,
            phone: null

        }
        this.infoHandler = this.infoHandler.bind(this);

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
                <button type='button' className='complete_purchase'>Complete Purchase</button>
                </div>  
            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        user: state.user,
        total: state.total
    }
}
export default connect(mapStateToProps, {})(CheckOut);