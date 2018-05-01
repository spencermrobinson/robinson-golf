import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { updateProduct } from '../../ducks/reducer.js';
import { Link } from 'react-router-dom';
import "./Inventory.css";

class Step3 extends Component{
    constructor(props){
        super(props);
        this.state={
            product_type: this.props.product_type || null,
            product_class: this.props.product_class || null,
            brand: this.props.brand || null,
            model: this.props.model || null,
            price: this.props.price || null,
            quantity: this.props.quantity || null,
            loft: this.props.loft || null,
            length: this.props.length || null,
            flex: this.props.flex || null,
            sale: this.props.sale || false,
            new_price: this.props.new_price || null,
            size: this.props.size || null,
            color: this.props.color || null,
            gender: this.props.gender || null,
            image: this.props.image || null
        }
        this.imageHandler = this.imageHandler.bind(this);
    }

    imageHandler(prop, val){
        this.setState({
            [prop]: val
        })
    }

    render(){
        console.log('state', this.state)
        const { product_type, product_class, brand, model, price, quantity, loft, length, flex, sale, new_price, size, color, gender, image } = this.state;
        return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="admin_ribbon">
                <span className='admin_ribbon_text'>Manage Inventory</span>
            </div>
            <div className="inventory_image_display_container">
                { image === null ? <div className="gray_image"></div> : <img className="product_image" src={ image } alt=""/> }
                <div className="add_image_container">
                    <span className='image_url_text'>Image URL</span>
                    <input type='text' className='add_image_input' onChange={(e) => this.imageHandler('image', e.target.value)}/>
                </div> 
            </div> 
         
            <div>
                <Link to="/inventory"><button type='' className='inventory_next_step_button2'>Back</button></Link>
            
                <Link to="/step3"><button type='' className='inventory_next_step_button2'>Add</button></Link>
            </div>
        </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        product_type: state.products.product_type,
        product_class: state.products.product_class,
        brand: state.products.brand,
        model: state.products.model,
        price: state.products.price,
        quantity: state.products.quantity,
        loft: state.products.loft,
        length: state.products.length,
        flex: state.products.flex,
        sale: state.products. sale,
        new_price: state.products.new_price,
        size: state.products.size,
        color: state.products.color,
        gender: state.products.gender,
        image: state.products.image
    }
}
export default connect( mapStateToProps , { updateProduct })(Step3);