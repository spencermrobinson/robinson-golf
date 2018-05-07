import React, { Component } from 'react';
import Header from "../Header/Header.js";
import Drop from '../../utilities/Drop.js';
import axios from 'axios';
import DropClubs from '../Dashboard/dashboard_assets/drop_clubs.png';
import { Link } from 'react-router-dom';
import './Products.css';




class Products extends Component{
    constructor(){
        super();
        this.state = {
            selection:   null,
            brand: null,
            displayProducts: null,
            product_type: null, 
            apparelSearch: false,
            apparelSearchVal: null,
            product_class: null
        }
        this.updateHandler = this.updateHandler.bind(this);
        this.selectionOptions = this.selectionOptions.bind(this);
        this.searchBrand = this.searchBrand.bind(this);
        this.getProductType = this.getProductType.bind(this);
        this.getProductClass = this.getProductClass.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.apparelBrandSearch = this.apparelBrandSearch.bind(this);
        this.getApparelProductClass = this.getApparelProductClass.bind(this);
    }

    componentDidMount(){
        this.getProductType();
    }

    handleDrop(){
        let apparelSearch = this.state.apparelSearch;
        if( apparelSearch === false){
            this.setState({
                apparelSearch: true
            })
        }else{
          this.setState({
              apparelSearch: false
          })      
        }
    }

    updateHandler(prop, val ){
        this.setState({
            [prop]: val
        })
    }
    apparelBrandSearch(){
        const brand = this.state.brand;
        const displayProducts = this.state.displayProducts;
        axios.get(`/api/apparelBrandSearch/${brand}`).then(response => {
            this.setState({
                displayProducts: response.data
            })
        })
    }
    searchBrand(){
        const brand = this.state.brand;
        const displayProducts = this.state.displayProducts;
        axios.get(`/api/searchBrand/${brand}`).then(response =>{
            console.log(response.data);
        this.setState({
            displayProducts:response.data
        })  })
    }
    getProductType(){
        const selection = this.props.match.params.destination;
        axios.get(`/api/product_type/${selection}`).then(response =>{
            console.log(response.data);
        this.setState({
            displayProducts:response.data
        })  });
    }
    getApparelProductClass(){
        const product_class = this.state.product_class;
        axios.get(`/api/product_class/${product_class}`).then(response =>{
            console.log(response.data);
        this.setState({
            displayProducts:response.data
        })  });
    }
    getProductClass(){
        const product_class = this.state.product_class;
        axios.get(`/api/product_class/${product_class}`).then(response =>{
            console.log(response.data);
        this.setState({
            displayProducts:response.data
        })  });
    }

    selectionOptions(){
        const club_brand = Drop.club_brand;
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
        const clothe_brand = Drop.clothe_brand;

        const selection = this.props.match.params.destination;
        if( selection === 'Brand'){
            return(
                <div>
                <span className="add_inventory_text"
                >Brand:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
                <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
                { brand.map( brand =>(
                    <option key={ brand.value} value={ brand.value}>{brand.label}</option>
                )) }
                </select>
                <button type='button' className='products_search_button' onClick={ () => this.searchBrand()}>Search</button>
                </div> 
            )
        }else if( selection === "Clubs"){
            
            return(
                <div>
                <span className="add_inventory_text"
                >Club Type:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('product_class', e.target.value)}>
                <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
                { club_class.map( club_class =>(
                    <option key={ club_class.value} value={club_class.value}>{club_class.label}</option>
                )) }
                </select>
                <button type='button' className='products_search_button' onClick={ () => this.getProductClass()}>Search</button>
                </div>
            )
        }else if( selection === "Apparel"){
            return(
                
                <div>
                <img src={DropClubs} alt="" className="drop_clubs" onClick={() => this.handleDrop()}/>
                { this.state.apparelSearch === false ? <div></div> : <div><span className="add_inventory_text"
                >Search By:</span>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('apparelSearchVal', e.target.value)}>
                <option value='null'>{this.state.apparelSearchVal === null ? "--Select--" : this.state.apparelSearchVal}</option>
                <option value='brand'>Brand</option>
                <option value='product_class'>Apparel Type</option>
                </select>
                </div> }
                { this.state.apparelSearchVal === 'brand' ? 
                <div>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('brand', e.target.value)}>
                <option value={null}>{ this.state.brand === null ? "--Select--" : this.state.brand }</option>
                { clothe_brand.map( clothe_brand =>(
                    <option key={ clothe_brand.value} value={clothe_brand.value}>{clothe_brand.label}</option>
                )) }
                </select>
                <button type='button' className='products_search_button' onClick={ () => this.apparelBrandSearch()}>Search</button>
                </div> : <div></div>  }
                { this.state.apparelSearchVal === "product_class" ? 
                <div>
                <select className="inventory_drop_down" onChange={ (e) => this.updateHandler('product_class', e.target.value)}>
                <option value={null}>{ this.state.product_class === null ? "--Select--" : this.state.product_class }</option>
                { apparel_class.map( apparel_class =>(
                    <option key={ apparel_class.value} value={apparel_class.value}>{apparel_class.label}</option>
                )) }
                </select>
                <button type='button' className='products_search_button' onClick={ () => this.getApparelProductClass()}>Search</button>
                </div> : <div></div>  }
                </div>
            )
        }
    }

    render(){
        console.log('display', this.state.displayProducts )
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="options_selector">{ this.selectionOptions()}</div>

                <div>{ this.state.displayProducts !== null ? 
                    <div className="products_display_container">{this.state.displayProducts.map( (e) => {
                        return(
                            <div key={ e.id } className="products_display_child">
                            <img src={ e.picture} alt='' className="products_displays_image"/>
                            
                            <Link to={`/product/${e.id}`}><span className='product_displays_text'>{e.brand} {e.model}</span></Link>
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
                            <span className="price_text_no_sale">${e.price}</span>
                            </div> 
                        )
                    })}</div> : <div></div>  }</div>   
            </div> 
        )
    }
} 
export default Products;