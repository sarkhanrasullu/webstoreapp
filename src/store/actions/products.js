import *  as actionTypes from './actionTypes';
import axios from '../../services/CommonAxios'

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    }
}

export const loadProductsFailed = () => {
    return {
        type: actionTypes.LOAD_PRODUCTS_FAILED
    }
}

export const loadProductsInDepartment = (departmentId) => {
    return dispatch => {
        axios.get('/products/inDepartment/'+departmentId)
        .then(resp=>{
             dispatch(setProducts(resp.data));
        })
        .catch(error=>{
            dispatch(loadProductsFailed()); 
        }); 
    }
}

export const loadProductsInCategory = (categoryId) => {
    return dispatch => {
        axios.get('/products/inCategory/'+categoryId)
        .then(resp=>{
             dispatch(setProducts(resp.data));
        })
        .catch(error=>{
            dispatch(loadProductsFailed()); 
        }); 
    }
}