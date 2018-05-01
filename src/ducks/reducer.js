import axios from 'axios';

const initialState = {
    user: null,
    admins: null,
    products: {
        product_type: null,
        product_class: null,
        brand: null,
        model: null,
        price: null,
        quantity: null,
        loft: null,
        length: null,
        flex: null,
        sale: null,
        new_price: null,
        size: null,
        color: null,
        gender: null,
        image: null
    },
}

const CHECK_LOGIN = 'CHECK_LOGIN';
const LOGOUT = 'LOGOUT';
const GET_ADMINS = 'GET_ADMINS';
const REMOVE_ADMIN = 'REMOVE_ADMIN';
const ADD_ADMIN = 'ADD_ADMIN';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export default ( state = initialState, action) => {
    const { payload } = action;

    switch( action.type ){

        case UPDATE_PRODUCT :
        console.log('hititit')
        let newState = Object.assign( {}, state);
        console.log('newState: ', newState)
        for( var i in payload ){
            newState.products[i] = payload[i];
            console.log('newState: ', newState)
        }
        return newState;

        case ADD_ADMIN + '_FULFILLED':
        return Object.assign( {}, state, { admins: payload });

        case CHECK_LOGIN + '_FULFILLED':
        return Object.assign( {}, state, { user: payload });

        case LOGOUT + '_FULFILLED':
        return Object.assign( {}, state, { user: null });

        case GET_ADMINS + '_FULFILLED':
        return Object.assign( {}, state, { admins: payload });

        case REMOVE_ADMIN + '_FULFILLED':
        return Object.assign( {}, state, { admins: payload });

        default: return state; 
    }
};

export function updateProduct(obj){
    console.log('reducer hit: ', obj)
    return {
        type: UPDATE_PRODUCT,
        payload: obj
    }
}

export function newAdmin(firstname, lastname, email){
    console.log('addAdmin hit reducer')
    const promise = axios.put(`/api/newAdmin/${firstname}/${lastname}/${email}`).then( response =>
response.data
    )
    return {
        type: ADD_ADMIN,
        payload: promise
    }
}

export function removeAdmin(id){
    const promise = axios.put(`/api/removeadmin/${id}`).then(response => 
    response.data
    )
    return {
        type: REMOVE_ADMIN,
        payload: promise
    }
}

export function getAdmins(){
    const promise = axios.get('/api/admins').then( response => 
    response.data 
    )   
    return{
        type: GET_ADMINS,
        payload: promise
    }
}

export function checkLogin(){
    const promise = axios.get('/api/check').then( response => 
        response.data
        
    
    )
    return {
        type: CHECK_LOGIN,
        payload: promise
    }
}

export function logout(){
    return {
        type: LOGOUT, 
        payload: null
    }
}