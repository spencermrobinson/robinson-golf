import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { getCart, updateQuantity } from '../../ducks/reducer.js';
import axios from 'axios';
import './Cart.css';


class Cart extends Component{
    constructor(){
        super();
        this.state= {
            cartTotal: null,
            quantity: 1
        }
        this.addTotal = this.addTotal.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
    }
    componentDidMount(){
       this.props.getCart();
        
       }

    
    addTotal(){
        let cart = this.props.cart;
        console.log('cart', cart)
        let total = cart.reduce((acc, cur)=> {
            console.log(acc, cur)
          return acc + (cur.product_quantity * cur.price)  
        }, 0 );
        
        return total
        
    }
    removeFromCart(id){
        axios.delete(`/api/deleteFromCart/${id}`).then()
    }

    changeQuantity(prop, val, num){
        const quantity = parseInt(this.state.quantity) +1;
        this.setState({
            [prop]: val
        })
        this.props.updateQuantity({product_id: num, product_quantity: quantity})
    }

    render(){
        let total = this.addTotal();
        let tax = total * .075;
        let finalTax = tax.toFixed(2, 6);
        let finalTotal = (total + tax).toFixed(2);
       
        
       

        console.log('cartT:', this.props.cart)
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>{ this.props.cart.length > 0 ? 
                    <div className="cart_display_container">{this.props.cart.map( (e, i) => {
                        return(
                            <div key={ e.id } className="cart_display_child">
                            <img src={ e.picture} alt='' className="cart_displays_image"/>
                            
                           <span className='product_displays_text'>{e.brand} {e.model}</span>
                            <div className="optional_displays">
                            { e.flex === null ? <div></div> : <div> <span className='optional_product_displays_text'>  Flex:</span>
                            <br/>
                            <span className='optional_product_displays_text'>{e.flex}</span></div>  }
                            { e.length === null ? <div></div> : <span className='optional_product_displays_text'>Length: {e.length}</span> }
                            { e.loft === "--Select--" ? <div></div> : <span className='optional_product_displays_text'>Loft: {e.loft}</span> }

                            { e.gender === null ? <div></div> : <span className='optional_product_displays_text'>{e.gender}</span> }
                            { e.color === null ? <div></div> : <span className='optional_product_displays_text'>Color: {e.color}</span> }
                            { e.size === null ? <div></div> : <span className='optional_product_displays_text'>Size: {e.size}</span> }
                            
                            </div>
                            <span className='optional_product_displays_text'>Qty:</span>
                            <input type="number" className='quantity' min="1" max="20" placeholder={ (e.product_quantity) } onChange={(m) => this.changeQuantity( 'quantity' , m.target.value, e.product_id )}/>
                            <span className="price_text_no_sale">${e.price}</span>
                            </div> 
                        )
                    })}</div> : <div></div>  }</div>
                
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{
        user: state.user,
        cart: state.cart
    }
}
export default connect(mapStateToProps, { getCart, updateQuantity })(Cart);