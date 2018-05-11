import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { getOrders } from '../../ducks/reducer.js';
import { Link } from 'react-router-dom';
import './Orders.css'

class Orders extends Component{
    constructor(){
        super();
        
    }

    componentDidMount(){
        this.props.getOrders();
    }
    

    render(){
        console.log('orders:', this.props.orders)
        
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="admin_ribbon">
                    <span className='admin_ribbon_text'>Orders</span>
                </div>
                { this.props.orders.length > 0 ? <div>
                    { this.props.orders.map( (e) => {
                        return(
                            <div key={e.user_id} className="orders_display_parent">
                                <div className="orders_display_container">
                                    <Link to={`/order/${e.user_id}`}><div>
                                        <span className="orders_name_text">{e.firstname}</span>
                                        <span className="orders_name_text">{e.lastname}</span>
                                    </div></Link> 
                                    <div>
                                        <span className='orders_date_text'>{e.order_date}</span>
                                    </div> 
                                </div> 
                            </div> 
                        )
                    })}
                    </div> : <div><h6>No Current Orders</h6></div>  }
            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        orders: state.orders
    }
}
export default connect(mapStateToProps, {getOrders})(Orders);