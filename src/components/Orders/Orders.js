import React, { Component } from 'react';
import Header from '../Header/Header.js';
import axios from 'axios';

class Orders extends Component{
    constructor(){
        super();
        this.state = {
            orders: []
        }
    }
    componentDidMount(){
        const orders = this.state.orders;
        axios.get('/api/getOrders').then(response => {
            orders.push(response.data)
        })
    }

    render(){
        console.log('orders:', this.state.orders)
        const orders = this.state.orders;
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="admin_ribbon">
                    <span className='admin_ribbon_text'>Orders</span>
                </div>
                { orders.length < 0 ? <div>
                    { this.state.orders.map( (e) => {
                        return(
                            <div key={e.user_id}>
                                <div className="orders_display_container">
                                <span className="">{e.firstname}</span>
                                <span className=""
                                >{e.lastname}</span>
                                </div> 
                            </div> 
                        )
                    })}
                    </div> : <div><h6>No Current Orders</h6></div>  }
            </div> 
        )
    }
}
export default Orders;