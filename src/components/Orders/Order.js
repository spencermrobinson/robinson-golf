import React, {Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { getSpecificOrder, productFulfilled } from '../../ducks/reducer.js';
import axios from 'axios';
import './Orders.css'

class Order extends Component{
    constructor(){
        super();
        this.state = {
            fulfilled: true
        }

        this.addTotal = this.addTotal.bind(this);
        this.fulfillProduct = this.fulfillProduct.bind(this);
        this.orderFulfilled = this.orderFulfilled.bind(this);
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getSpecificOrder(id);
       
    }

    fulfillProduct(num){
        const fool = this.state.fulfilled;
        if(this.state.fulfilled == false){
            this.setState({
                fulfilled: true
            });
            this.props.productFulfilled({id: num , fulfilled: fool});
            this.setState({
                fulfilled: false
            })
            
        }else{
            this.setState({
                fulfilled: false
            });
            this.props.productFulfilled({id: num , fulfilled: fool});
            this.setState({
                fulfilled: true
            })
        }
         
    }

    addTotal(){
        let order = this.props.order;
        let total = order.reduce((acc, cur)=> {
          return acc + (cur.product_quantity * cur.price)  
        }, 0 );
        
        return total
        
    }

    orderFulfilled(){
        const order = this.props.order;
        const order_id = this.props.match.params.id;
        
        order.map((e) => {
            if(e.fulfilled == true ){
            axios.post('/api/addToSales', {
                user_id: e.user_id,
                product_id: e.product_id, 
                product_quantity: e.product_quantity,
                sale_date: e.order_date,
                id: e.id
            }).then(() => this.props.getSpecificOrder(order_id)
                )
            }else if( this.props.order.length = 0){
                this.props.history.push('/orders')
            }
        })
    }
    render(){
        console.log('order#:', this.props.order);
        let total = this.addTotal();
        let tax = total * .075;
        let finalTax = tax.toFixed(2, 6);
        let finalTotal = (total + tax).toFixed(2);
        const fool = this.state.fulfilled;
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>{ this.props.order.length > 0 ? 
                    <div className="cart_display_container">{this.props.order.map( (e, i) => {
                        return(
                            <div key={ e.id } className="cart_display_child">
                            
                            <img src={ e.picture} alt='' className="cart_displays_image"/>
                            <div className="cart_description"> 
                           <span className='product_displays_text'>{e.brand} {e.model}</span>
                           </div>
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
                            <div>
                            <span className='optional_product_displays_text'>Qty: {e.product_quantity}</span>
                            </div>
                            <div>
                            <span className="optional_product_displays_text">Product Fulfilled:</span>
                            <input type='checkbox' className='' onClick={() =>{ this.fulfillProduct(e.id);
                                }}/>
                            </div>  
                            
                            
                            
                            </div> 
                        )
                    })}</div> : <div><span className=''
                    >Gathing Order...</span></div>  }</div>
                    <div>
                        <span className="order_total">Order Total: { finalTotal }</span>
                    </div>
                    <div>
                    <button type='button' className='fulfilled_button' onClick={() => this.orderFulfilled()}>Order Fulfilled</button>
                    </div>  

            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        order: state.order
    }
}
export default connect(mapStateToProps, { getSpecificOrder, productFulfilled })(Order);