import axios from 'axios';

const initialState = {
    user: null,
    admins: null,
    cart: [],
    total: null,
    orders: [],
    order: [],
    client: [],
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
        sale: false,
        new_price: null,
        size: null,
        color: null,
        gender: null,
        image: null
    },
};

const CHECK_LOGIN = 'CHECK_LOGIN';
const LOGOUT = 'LOGOUT';
const GET_ADMINS = 'GET_ADMINS';
const REMOVE_ADMIN = 'REMOVE_ADMIN';
const ADD_ADMIN = 'ADD_ADMIN';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const RESET_PRODUCTS = 'RESET_PRODUCTS';
const GET_CART = 'GET_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
const UPDATE_TOTAL = 'UPDATE_TOTAL';
const GET_ORDERS = 'GET_ORDERS';
const GET_SPECIFIC_ORDER = 'GET_SPECIFIC_ORDER';
const PRODUCT_FULFILLED = 'PRODUCT_FULFILLED';
const GET_CLIENT = 'GET_CLIENT';



export default ( state = initialState, action) => {
    const { payload } = action;

    switch( action.type ){

        case UPDATE_TOTAL: {
            return Object.assign( {}, state, {total: payload});
        }

        case UPDATE_QUANTITY: {
            let newState = Object.assign({}, state);
            for( var l = 0; newState.cart.length > l; l++){
                if(newState.cart[l].product_id === payload.product_id){
                newState.cart[l].product_quantity = payload.product_quantity
                }
            }
            return newState
        }
        case PRODUCT_FULFILLED: {
            let newState = Object.assign({}, state );
            for( var o = 0; newState.order.length > o; o++ ){
                if(newState.order[o].id === payload.id){
                    newState.order[o].fulfilled = payload.fulfilled
                }
            }
            return newState
        }

        case RESET_PRODUCTS: {
            let newState = Object.assign({}, state);
            for( var j in newState.products ) {
              newState.products[j] = null;
            }
            return newState
            
          }

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

        case GET_CART + '_FULFILLED': 
        return Object.assign( {}, state, {cart: payload});

        case REMOVE_FROM_CART + '_FULFILLED':
        return Object.assign( {}, state, {cart: payload});

        case UPDATE_CART_QUANTITY + '_FULFILLED':
        return Object.assign( {}, state, { cart: payload});

        case GET_ORDERS + '_FULFILLED': 
        return Object.assign({}, state, {orders: payload});

        case GET_SPECIFIC_ORDER + '_FULFILLED':
        return Object.assign({}, state, {order: payload});

        case GET_CLIENT + '_FULFILLED':
        return Object.assign({}, state, {client: payload});
        
        
        
        

        default: return state; 
    }
};

export function getClient(id){
    const promise = axios(`/api/getClient/${id}`).then(response => 
    response.data
    )
    return {
        type: GET_CLIENT,
        payload: promise
    }
}

export function getSpecificOrder(id){
    const promise = axios.get(`/api/getSpecificOrder/${id}`).then( response =>
    response.data
    )
    return {
        type: GET_SPECIFIC_ORDER,
        payload: promise
    }
}

export function getOrders(){
    const promise = axios.get('/api/getOrders').then( response => 
        response.data
    )
    return {
        type: GET_ORDERS,
        payload: promise
    }
}

export function updateTotal(num){
    return{
        type: UPDATE_TOTAL,
        payload: num
    }
}

export function updateCartQuantity(quantity ,product_id){
    console.log('hit update', quantity, product_id)
    const promise = axios.put(`/api/updateQuantity/${quantity}/${product_id}`).then( response =>
    response.data
    )
    return {
        type: UPDATE_CART_QUANTITY,
        payload: promise
    }
}

export function productFulfilled(obj){
    return {
        type: PRODUCT_FULFILLED,
        payload: obj
    }
}

export function removeFromCart(id){
    const promise = axios.delete(`/api/deleteFromCart/${id}`).then(response => 
    response.data
    )
    return {
        type: REMOVE_FROM_CART, 
        payload: promise
    }
}

export function updateQuantity(obj){
    console.log('reducer hit: ', obj)
    return {
        type: UPDATE_QUANTITY,
        payload: obj
    }
}

export function getCart(){
    const promise = axios.get('/api/getCart').then(response => 
    response.data
    )
    return{
        type: GET_CART,
        payload: promise
    }
}

export function resetProducts() {
    return {
      type: RESET_PRODUCTS,
      payload: null
    }
  }

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