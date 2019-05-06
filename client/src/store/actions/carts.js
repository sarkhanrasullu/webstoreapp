import *  as actionTypes from './actionTypes';
import commonAxios from '../../services/CommonAxios'
const querystring = require('querystring');

export const setCarts = (carts, errorMsg) => {
    return {
        type: actionTypes.SET_CARTS,
        carts: carts,
        errorMsg: errorMsg
    }
} 

export const loadCarts = (cart_id) => {
    return dispatch=> {
        commonAxios 
        .get('shoppingcart/'+cart_id)
        .then(res => {
            dispatch(setCarts(res.data));
        })
        .catch(err => {
            dispatch(setCarts(null, err.response.data.message));
      })
    }
}