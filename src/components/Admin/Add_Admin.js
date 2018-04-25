import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { newAdmin } from '../../ducks/reducer.js';
import { Link } from 'react-router-dom';
import './Admin.css';

class Add_Admin extends Component {
    constructor(){
        super();
        this.state ={
            firstname: '',
            lastname: '',
            email: ''
        }
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler(prop, val){
        this.setState({
            [prop]: val
        })
    }

    render(){
        console.log('state:', this.state.lastname)
        const { firstname, lastname, email } = this.state;
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <div className="admin_ribbon">
                        <span className='admin_ribbon_text'>Add New Administrator</span>
                    </div>
                </div>
                <div>
                    <div className="admin_input_container">
                        <span className="admin_input_titles">Firstname</span>
                        <input type='text' className='add_admin_inputs' onChange={(e)=> this.inputHandler('firstname', e.target.value)}/>
                        <span className="admin_input_titles">Lastname</span>
                        <input type='text' className='add_admin_inputs' onChange={(e)=> this.inputHandler('lastname', e.target.value)}/>
                        <span className="admin_input_titles_email">Email</span>
                        <input type='text' className='add_admin_inputs' onChange={(e)=> this.inputHandler('email', e.target.value)}/>
                    </div>
                    <div className="add_admin_container">
                    <Link to="/admin"><button type='' className='add_admin_button' onClick={ () => this.props.newAdmin(firstname, lastname, email)}>Add Administrator</button></Link>
                    </div>  
                </div>    
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{

    }
}
export default connect( mapStateToProps ,{ newAdmin })(Add_Admin);