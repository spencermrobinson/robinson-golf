import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { updateProduct } from '../../ducks/reducer.js';
import './Inventory.css';

class Inventory extends Component {
    constructor(props){
        super(props);
        this.state = {
            product_type: this.props.product_type || "--SELECT--"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val){
        this.setState({
            product_type: val
        })
    }


    render(){
        console.log("state type: ", this.props.product_type)
        
        const { product_type } = this.state;
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="admin_ribbon">
                    <span className='admin_ribbon_text'>Manage Inventory</span>
                </div>
                <div className="product_type_container">
                    <span className="select_product_type_text">Select Product Type:  </span>
                    <select className="select_product_type_dd" onChange= { (e) => this.handleChange(e.target.value)}>
                    <option value=''>{this.state.product_type}</option>
                    <option value='clubs'>Clubs</option>
                    <option value='balls'>Balls</option>
                    <option value='gps'>GPS</option>
                    <option value='shoes'>Shoes</option>
                    <option value='apparel'>Apparel</option>
                    <option value='accessories'>Accessories</option>
                    </select> 
                </div>
                <div>
                <button type='' className='inventory_next_step_button' onClick={ () => this.props.updateProduct({ product_type :product_type})}>Next Step</button>
                </div>   
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{
        product_type: state.products.product_type
    }
}
export default connect(mapStateToProps, { updateProduct })(Inventory);