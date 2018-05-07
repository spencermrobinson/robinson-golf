import React, { Component } from 'react';
import Header from "../Header/Header.js";
import axios from 'axios';
import { connect } from 'react-redux';
import './Product.css';


class Product extends Component {
    constructor(){
        super();
        this.state = {
            product: null,
            quantity: 1,
        }
        this.quantityHandler = this.quantityHandler.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }
    componentDidMount(){
        const product = this.props.match.params.id;
        axios.get(`/api/getBrand/${product}`).then(response => {
            console.log('product', response.data)
            this.setState({ 
                product: response.data
            })
        })
    }

    quantityHandler(prop, val){
        this.setState({
            [prop]: val
        })
    }
    addToCart(){
        const { product , quantity} = this.state;
        axios.post(`/api/addToCart/${product[0].id}/${quantity}`).then( () => {
            this.props.history.push(`/cart/${this.props.user.id}`)
        })
    }

    render(){
        
        
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                <div>{ this.state.product !== null ? 
                    <div className="product_display_container">{this.state.product.map( (e) => {
                        return(
                            <div key={ e.id } className="product_display_child">
                            <img src={ e.picture} alt='' className="product_displays_image"/>
                            
                            <span className='product_displays_text'>{e.brand} {e.model}</span>
                            <div className="optional_product_displays">
                            { e.flex === null ? <div></div> : <div> <span className='optional_product_displays_text'>Flex: {e.flex}</span>
                            </div>  }
                            { e.length === null ? <div></div> : <span className='optional_product_displays_text'>Length: {e.length}</span> }
                            { e.loft === "--Select--" ? <div></div> : <span className='optional_product_displays_text'>Loft: {e.loft}</span> }

                            { e.gender === null ? <div></div> : <span className='optional_product_displays_text'>{e.gender}</span> }
                            { e.color === null ? <div></div> : <span className='optional_product_displays_text'>Color: {e.color}</span> }
                            { e.size === null ? <div></div> : <span className='optional_product_displays_text'>Size: {e.size}</span> }
                            </div>
                            <span className="price_text_no_sale">${e.price}</span>
                            { this.props.user === "puppie" ? 
                            <div className="add_cart_container">
                            <input type="number" className='quantity' min="1" max="20" placeholder={this.state.quantity} onChange={(e) => this.quantityHandler('quantity', e.target.value)}/>
                            <a href={process.env.REACT_APP_LOGIN}><button type='' className='add_cart_button' >Add To Cart</button></a>
                            </div> : 
                            <div className="add_cart_container">
                            <input type="number" className='quantity' min="1" max="20" placeholder={this.state.quantity} onChange={(e) => this.quantityHandler('quantity', e.target.value)}/>
                            <button type='' className='add_cart_button' onClick={() => this.addToCart()}>Add To Cart</button>
                            </div>}
                            </div>
                              
                        )
                    })}</div> : <div></div>  }</div>  
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
export default connect(mapStateToProps)(Product);