import React, { Component } from 'react';
import Header from "../Header/Header.js";
import Drop from '../../utilities/Drop.js';
import './Products.css'




class Products extends Component{
    constructor(){
        super();
        this.state = {
            selection:   null,
            brand: null
        }
        this.updateHandler = this.updateHandler.bind(this);
        this.selectionOptions = this.selectionOptions.bind(this);
    }

    updateHandler(prop, val ){
        this.setState({
            [prop]: val
        })
    }

    selectionOptions(){
        const club_brand = Drop.club_brand;
        const selection = this.props.match.params.destination;
        if( selection == 'Brand'){
            return(
                <div>
                <span className="add_inventory_text"
                >Brand:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
                <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
                { club_brand.map( club_brand =>(
                    <option key={ club_brand.value} value={club_brand.value}>{club_brand.label}</option>
                )) }
                </select>
                <button type='button' className='products_search_button'>Search</button>
                </div> 
            )
        }else{return(
            <div><h6>hit</h6></div> 
        )}
    }

    render(){
        console.log('destination', this.props.match.params.destination)
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>{ this.selectionOptions()}</div>  
            </div> 
        )
    }
} 
export default Products;