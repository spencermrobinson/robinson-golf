import React, {Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { updateProduct } from '../../ducks/reducer.js';
import Drop from '../../utilities/Drop.js';


class Step2 extends Component{
    constructor(){
        super();
       

    }

    renderInputFields(){
        const { product_type} = this.props;
        if( product_type === 'Clubs'){
            return(
                <div></div> 
            )
        }
    }

    render(){

        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="admin_ribbon">
                    <span className='admin_ribbon_text'>Manage Inventory</span>
                </div>
                
            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        product_type: state.products.product_type
    }
}
export default connect( mapStateToProps , { updateProduct })(Step2);