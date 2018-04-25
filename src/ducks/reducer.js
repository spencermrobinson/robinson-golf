import axios from 'axios';

const initialState = {
    user: null,
    admins: null
}

const CHECK_LOGIN = 'CHECK_LOGIN';
const LOGOUT = 'LOGOUT';
const GET_ADMINS = 'GET_ADMINS';
const REMOVE_ADMIN = 'REMOVE_ADMIN';

export default ( state = initialState, action) => {
    const { payload } = action;

    switch( action.type ){

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