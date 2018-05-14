import React, { Component } from 'react';
import Header from '../Header/Header.js';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { salesBrand } from '../../ducks/reducer.js';



class Sales extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                labels: ["Nike", "Titleist", "Taylormade"],
                datasets: [{
                label: "Sales",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [4523, 6341, 8930],
                }]
            },
        }

    }

    componentDidMount(){
        this.props.salesBrand();
        
        
    }
    
    viewSales(){
    const {labels}= this.state.data.labels;
    let brand = this.props.sales.map( e => {
        return    
        this.setState({
              labels: brand  
            })
        });
    }
    



    render(){
        console.log('sales:', this.props.sales);
        console.log('labels', this.state.data.labels)
        return(
            <div>
            <div><Header/></div>
            
            <Bar data={this.state.data}/>
            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        sales: state.sales
    }
}
export default connect(mapStateToProps, { salesBrand })(Sales);