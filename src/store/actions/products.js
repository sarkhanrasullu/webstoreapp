import *  as actionTypes from './actionTypes';
import axios from '../../services/CommonAxios'

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    }
}

export const setPagination = (count, currentPage) => {
    return {
        type: actionTypes.SET_PAGINATION,
        count: count,
        currentPage: currentPage
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


export const loadProductsSearchFailed = () => {
    return {
        type: actionTypes.LOAD_PRODUCTS_SEARCH_FAILED
    }
}

export const loadProductsSearch = (query_string, all_words, currentPage, limit, description_length) => {
    return dispatch => {
        axios.get('/products/search?query_string='+query_string+'&all_words='+all_words+'&page='+currentPage+'&limit='+limit+'&description_length='+description_length)
        .then(resp=>{
            dispatch(setProducts(resp.data.raws));
            dispatch(setPagination(resp.data.count, currentPage));
        })
        .catch(error=>{
            dispatch(loadProductsSearchFailed()); 
        }); 
    }
}