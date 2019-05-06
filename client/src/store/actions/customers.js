import *  as actionTypes from './actionTypes';
import commonAxios from '../../services/CommonAxios'
const querystring = require('querystring');

export const setUser = (user, errorMsg) => {
    localStorage.setItem('user', JSON.stringify(user))
    return {
        type: actionTypes.SET_USER,
        user: user,
        errorMsg: errorMsg
    }
} 

export const login = (user) => {
    return dispatch=> {
        commonAxios 
        .post('customers/login', querystring.stringify(user))
        .then(res => {
            dispatch(setUser(res.data));
            // this.props.history.push(`/`)
        })
        .catch(err => {
            dispatch(setUser(null, err.response.data.error.message));
      })
    }
}

export const logout = ()=>{
        return dispatch => {
            localStorage.setItem('user',null);
            dispatch(setUser(null,null));
        }
}