import axios from 'axios';

const initialState = {
    user: null
}

const CHECK_LOGIN = 'CHECK_LOGIN';
const LOGOUT = 'LOGOUT';

export default ( state = initialState, action) => {
    const { payload } = action;

    switch( action.type ){

        case CHECK_LOGIN + '_FULFILLED':
        return Object.assign( {}, state, { user: payload });

        case LOGOUT + '_FULFILLED':
        return Object.assign( {}, state, { user: null });

        default: return state; 
    }
};

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