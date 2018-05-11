import React, { Component } from 'react';
import Header from '../Header/Header.js';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';



class Sales extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                labels: null,
                datasets: [{
                label: "Sales",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: null,
                }]
            },


        }

    }
    
    



    render(){
        return(
            <div>
            <div><Header/></div>
            <Bar data={this.state.data}/>
            </div> 
        )
    }
}

export default connect()(Sales);