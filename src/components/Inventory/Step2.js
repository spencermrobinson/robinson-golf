import React, {Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { updateProduct } from '../../ducks/reducer.js';
import { Link } from 'react-router-dom';
import Drop from '../../utilities/Drop.js';
import "./Inventory.css";


class Step2 extends Component{
    constructor(props){
        super(props);
        this.state={
        product_type: this.props.product_type || null,
        product_class: this.props.product_class || null,
        brand: this.props.brand || null,
        model: this.props.model || null,
        price: this.props.price || null,
        quantity: this.props.quantity || null,
        loft: this.props.loft || "--Select--",
        length: this.props.length || null,
        flex: this.props.flex || null,
        sale: this.props.sale || false,
        new_price: this.props.new_price || null,
        size: this.props.size || null,
        color: this.props.color || null,
        gender: this.props.gender || null

            
        }
       
        this.renderInputFields = this.renderInputFields.bind(this);
        this.updateHandler = this.updateHandler.bind(this); 
        
    }

    updateHandler(prop, val){
        this.setState({
            [prop]: val
        })
    }


    renderInputFields(){
        const { product_type} = this.props;
        const flex = Drop.flex;
        const length = Drop.length;
        const color = Drop.color;
        const gender = Drop.gender;
        const apparel_size = Drop.apparel_size;
        const shoe = Drop.shoe;
        const brand = Drop.brand;
        const club_class = Drop.club_class;
        const driver_loft = Drop.loft;
        const hybrid_loft = Drop.hybrid_loft;
        const wedges_loft = Drop.wedge_loft;
        const apparel_class = Drop.apparel_class;
        let loft_class = this.state.product_class;
        const loft = this.state.loft;

        
        
    
        

        if( product_type == 'Clubs'){
            return(
                <div className="inventory_input_container">
                <span className="add_inventory_text"
                >Club Class:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('product_class', e.target.value)}>
                <option value={null}>{ this.state.product_class === null ? "--Select--" : this.state.product_class }</option>
                { club_class.map( club_class =>(
                    <option key={ club_class.value} value={club_class.value}>{club_class.label}</option>
                )) }
                </select>
                <span className="add_inventory_text"
                >Brand:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
                <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
                { brand.map( brand =>(
                    <option key={ brand.value} value={brand.value}>{brand.label}</option>
                )) }
                </select>
                <span className="add_inventory_text"
                >Model:</span>
                <input type='text' className='inventory_model_input' placeholder={ this.state.model === null ? "Model" : this.state.model } onChange={ (e) => this.updateHandler('model', e.target.value)}/>
                { loft_class === "Driver"  ? <div className="loft_display_container"><span className="add_inventory_text"
                    >Loft:</span>
                    <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('loft', e.target.value)}>
                    <option value={null}>{ loft === "--Select--" ? "--Select--" : loft }</option>
                    { driver_loft.map( driver_loft =>(
                    <option key={ driver_loft.value} value={driver_loft.value}>{driver_loft.label}</option>
                    )) }
                    </select></div>
                : loft_class === "Fairway" ? 
                    <div className="loft_display_container"><span className="add_inventory_text"
                    >Loft:</span>
                    <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('loft', e.target.value)}>
                    <option value={null}>{ loft === "--Select--" ? "--Select--" : loft }</option>
                    { hybrid_loft.map( hybrid_loft =>(
                        <option key={ hybrid_loft.value} value={hybrid_loft.value}>{hybrid_loft.label}</option>
                    )) }
                    </select></div>
                : loft_class === "Hybrid" ? 
                    <div className="loft_display_container"><span className="add_inventory_text"
                    >Loft:</span>
                    <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('loft', e.target.value)}>
                    <option value={null}>{ loft === "--Select--" ? "--Select--" : loft }</option>
                    { hybrid_loft.map( hybrid_loft =>(
                    <option key={ hybrid_loft.value} value={hybrid_loft.value}>{hybrid_loft.label}</option>
                    )) }
                    </select></div> 
                : loft_class === "Wedges" ?
                    <div className="loft_display_container"><span className="add_inventory_text"
                    >Loft:</span>
                    <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('loft', e.target.value)}>
                    <option value={null}>{ loft === "--Select--" ? "--Select--" : loft }</option>
                    { wedges_loft.map( wedges_loft =>(
                    <option key={ wedges_loft.value} value={wedges_loft.value}>{wedges_loft.label}</option>
                    )) }
                    </select></div> : <div></div>  }
                
                


                <span className="add_inventory_text"
                >Length:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('length', e.target.value)}>
                <option value={null}>{ this.state.length === null ? "--Select--" : this.state.length }</option>
                { length.map( length =>(
                    <option key={ length.value} value={length.value}>{length.label}</option>
                )) }
                </select>
                <span className="add_inventory_text"
                >Flex:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('flex', e.target.value)}>
                <option value={null}>{ this.state.flex === null ? "--Select--" : this.state.flex }</option>
                { flex.map( flex =>(
                    <option key={ flex.value} value={flex.value}>{flex.label}</option>
                )) }
                </select>
                <span className="add_inventory_text"
                >Price:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.price === null ? "Price" : this.state.price } onChange={ (e) => this.updateHandler('price', e.target.value)}/>
                <span className="add_inventory_text"
                >Quantity:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.quantity === null ? "Quantity" : this.state.quantity } onChange={ (e) => this.updateHandler('quantity', e.target.value)}/>
                <span className="add_inventory_text"
                >Sale:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('sale', e.target.value)}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
                </select>
                { this.state.sale ?
                    <div className="new_price_container"><span className="add_inventory_text"
                    >New Price:</span>
                    <br/>
                    <input type='text' className='new_price_input' placeholder={ this.state.new_price === null ? "New Price" : this.state.new_price } onChange={ (e) => this.updateHandler('new_price', e.target.value)}/></div> : <div></div> } 
                </div>

            )
        }else if(product_type === "Balls" ){
            return(<div className="inventory_input_container"><span className="add_inventory_text"
            >Brand:</span>
            <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
            <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
            { brand.map( brand =>(
                <option key={ brand.value} value={brand.value}>{brand.label}</option>
            )) }
            </select>
            <span className="add_inventory_text"
            >Model:</span>
            <input type='text' className='inventory_model_input' placeholder={ this.state.model === null ? "Model" : this.state.model } onChange={ (e) => this.updateHandler('model', e.target.value)}/>
            <span className="add_inventory_text"
                >Quantity:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.quantity === null ? "Quantity" : this.state.quantity } onChange={ (e) => this.updateHandler('quantity', e.target.value)}/>
                <span className="add_inventory_text"
                >Price:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.price === null ? "Price" : this.state.price } onChange={ (e) => this.updateHandler('price', e.target.value)}/>
                <span className="add_inventory_text"
                >Sale:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('sale', e.target.value)}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
                </select>
                { this.state.sale ?
                    <div className="new_price_container"><span className="add_inventory_text"
                    >New Price:</span>
                    <br/>
                    <input type='text' className='new_price_input' placeholder={ this.state.new_price === null ? "New Price" : this.state.new_price } onChange={ (e) => this.updateHandler('new_price', e.target.value)}/></div> : <div></div> } 
            </div> )
        }else if(product_type === "GPS" ){
            return(<div className="inventory_input_container"><span className="add_inventory_text"
            >Brand:</span>
            <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
            <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
            { brand.map( brand =>(
                <option key={ brand.value} value={brand.value}>{brand.label}</option>
            )) }
            </select>
            <span className="add_inventory_text"
            >Model:</span>
            <input type='text' className='inventory_model_input' placeholder={ this.state.model === null ? "Model" : this.state.model } onChange={ (e) => this.updateHandler('model', e.target.value)}/>
            <span className="add_inventory_text"
                >Quantity:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.quantity === null ? "Quantity" : this.state.quantity } onChange={ (e) => this.updateHandler('quantity', e.target.value)}/>
                <span className="add_inventory_text"
                >Price:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.price === null ? "Price" : this.state.price } onChange={ (e) => this.updateHandler('price', e.target.value)}/>
                <span className="add_inventory_text"
                >Sale:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('sale', e.target.value)}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
                </select>
                { this.state.sale ?
                    <div className="new_price_container"><span className="add_inventory_text"
                    >New Price:</span>
                    <br/>
                    <input type='text' className='new_price_input' placeholder={ this.state.new_price === null ? "New Price" : this.state.new_price } onChange={ (e) => this.updateHandler('new_price', e.target.value)}/></div> : <div></div> } 
            </div> )
        }else if( product_type === "Shoes"){
            return(<div className="inventory_input_container"><span className="add_inventory_text"
            >Brand:</span>
            <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
            <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
            { brand.map( brand =>(
                <option key={ brand.value} value={brand.value}>{brand.label}</option>
            )) }
            </select>
            <span className="add_inventory_text"
            >Model:</span>
            <input type='text' className='inventory_model_input' placeholder={ this.state.model === null ? "Model" : this.state.model } onChange={ (e) => this.updateHandler('model', e.target.value)}/>
            <span className="add_inventory_text">Quantity:</span>
            <input type='text' className='inventory_inputs' placeholder={ this.state.quantity === null ? "Quantity" : this.state.quantity } onChange={ (e) => this.updateHandler('quantity', e.target.value)}/>
            
            <span className="add_inventory_text">Gender:</span>
            <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('gender', e.target.value)}>
            <option value={null}>{ this.state.gender === null ? "--Select--" : this.state.gender }</option>
            { gender.map( gender =>(
                <option key={ gender.value} value={gender.value}>{gender.label}</option>
            )) }
            </select>
            <span className="add_inventory_text">Size:</span>
            <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('size', e.target.value)}>
            <option value={null}>{ this.state.size === null ? "--Select--" : this.state.size }</option>
            { shoe.map( shoe =>(
                <option key={ shoe.value} value={shoe.value}>{shoe.label}</option>
            )) }
            </select>
            <span className="add_inventory_text"
            >Price:</span>
            <input type='text' className='inventory_inputs' placeholder={ this.state.price === null ? "Price" : this.state.price } onChange={ (e) => this.updateHandler('price', e.target.value)}/>
                
                <span className="add_inventory_text"
                >Sale:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('sale', e.target.value)}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
                </select>
                { this.state.sale ?
                    <div className="new_price_container"><span className="add_inventory_text"
                    >New Price:</span>
                    <br/>
                    <input type='text' className='new_price_input' placeholder={ this.state.new_price === null ? "New Price" : this.state.new_price } onChange={ (e) => this.updateHandler('new_price', e.target.value)}/></div> : <div></div> } 
            </div>)
        }else if(product_type === "Apparel"){
            return( 
                <div className="inventory_input_container">
                <span className="add_inventory_text"
                >Apparel Class:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('product_class', e.target.value)}>
                <option value={null}>{ this.state.product_class === null ? "--Select--" : this.state.product_class }</option>
                { apparel_class.map( apparel_class =>(
                    <option key={ apparel_class.value} value={apparel_class.value}>{apparel_class.label}</option>
                )) }
                </select>
                <span className="add_inventory_text"
                >Brand:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
                <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
                { brand.map( brand =>(
                    <option key={ brand.value} value={brand.value}>{brand.label}</option>
                )) }
                </select>
                <span className="add_inventory_text"
                >Model:</span>
                <input type='text' className='inventory_model_input' placeholder={ this.state.model === null ? "Model" : this.state.model } onChange={ (e) => this.updateHandler('model', e.target.value)}/>
                <span className="add_inventory_text">Gender:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('gender', e.target.value)}>
                <option value={null}>{ this.state.gender === null ? "--Select--" : this.state.gender }</option>
                { gender.map( gender =>(
                <option key={ gender.value} value={gender.value}>{gender.label}</option>
                )) }
                </select>
                <span className="add_inventory_text">Color:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('color', e.target.value)}>
                <option value={null}>{ this.state.color === null ? "--Select--" : this.state.color }</option>
                { color.map( color =>(
                <option key={ color.value} value={color.value}>{color.label}</option>
                )) }
                </select>
                <span className="add_inventory_text">Size:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('size', e.target.value)}>
                <option value={null}>{ this.state.size === null ? "--Select--" : this.state.size }</option>
                { apparel_size.map( apparel_size =>(
                <option key={ apparel_size.value} value={apparel_size.value}>{apparel_size.label}</option>
                )) }
                </select>
                <span className="add_inventory_text">Quantity:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.quantity === null ? "Quantity" : this.state.quantity } onChange={ (e) => this.updateHandler('quantity', e.target.value)}/>
                <span className="add_inventory_text"
                >Price:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.price === null ? "Price" : this.state.price } onChange={ (e) => this.updateHandler('price', e.target.value)}/>
                <span className="add_inventory_text"
                >Sale:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('sale', e.target.value)}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
                </select>
                { this.state.sale ?
                    <div className="new_price_container"><span className="add_inventory_text"
                    >New Price:</span>
                    <br/>
                    <input type='text' className='new_price_input' placeholder={ this.state.new_price === null ? "New Price" : this.state.new_price } onChange={ (e) => this.updateHandler('new_price', e.target.value)}/></div> : <div></div> }
                </div> 
            )
        }else if(product_type === "Accessories"){
            return(<div className="inventory_input_container"><span className="add_inventory_text"
            >Brand:</span>
            <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
            <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
            { brand.map( brand =>(
                <option key={ brand.value} value={brand.value}>{brand.label}</option>
            )) }
            </select>
            <span className="add_inventory_text"
            >Model:</span>
            <input type='text' className='inventory_model_input' placeholder={ this.state.model === null ? "Model" : this.state.model } onChange={ (e) => this.updateHandler('model', e.target.value)}/>
            <span className="add_inventory_text"
                >Quantity:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.quantity === null ? "Quantity" : this.state.quantity } onChange={ (e) => this.updateHandler('quantity', e.target.value)}/>
                <span className="add_inventory_text"
                >Price:</span>
                <input type='text' className='inventory_inputs' placeholder={ this.state.price === null ? "Price" : this.state.price } onChange={ (e) => this.updateHandler('price', e.target.value)}/>
                <span className="add_inventory_text"
                >Sale:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('sale', e.target.value)}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
                </select>
                { this.state.sale ?
                    <div className="new_price_container"><span className="add_inventory_text"
                    >New Price:</span>
                    <br/>
                    <input type='text' className='new_price_input' placeholder={ this.state.new_price === null ? "New Price" : this.state.new_price } onChange={ (e) => this.updateHandler('new_price', e.target.value)}/></div> : <div></div> } 
            </div> )
        }
    }

    render(){
        
        const { product_type, product_class, brand, model, price, quantity, loft, length, flex, sale, new_price, size, color, gender } = this.state;
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="admin_ribbon">
                    <span className='admin_ribbon_text'>Manage Inventory</span>
                </div>
                <div className="inventory_input_parent">
                {this.renderInputFields()}
                </div> 
                <div>
                    <Link to="/inventory"><button type='' className='inventory_next_step_button2' onClick={ () => this.props.updateProduct({product_type, product_class, brand, model, price, quantity, loft, length, flex, sale, new_price, size, color, gender })}>Back</button></Link>
                    
                    <Link to="/step3"><button type='' className='inventory_next_step_button2' onClick={ () => this.props.updateProduct({product_type, product_class, brand, model, price, quantity, loft, length, flex, sale, new_price, size, color, gender })}>Next</button></Link>
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
        gender: state.products.gender
    }
}
export default connect( mapStateToProps , { updateProduct })(Step2);