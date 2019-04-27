import *  as actionTypes from './actionTypes';
import axios from '../../services/CommonAxios'

export const setProducts = (productsWrapper, currentPage) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: productsWrapper.raws,
        count: productsWrapper.count,
        currentPage: currentPage
    }
}

export const loadProductsFailed = () => {
    return {
        type: actionTypes.LOAD_PRODUCTS_FAILED
    }
}

export const loadProductsInDepartment = (departmentId, currentPage = 1, limit = 9) => {
    return dispatch => {
        axios.get('/products/inDepartment/'+departmentId+'?page='+currentPage+'&limit='+limit)
        .then(resp=>{
             dispatch(setProducts(resp.data, currentPage));
        })
        .catch(error=>{
            dispatch(loadProductsFailed()); 
        }); 
    }
}

export const loadProductsInCategory = (categoryId, currentPage = 1, limit=9) => {
    return dispatch => {
        axios.get('/products/inCategory/'+categoryId+'?page='+currentPage+'&limit='+limit)
        .then(resp=>{
             dispatch(setProducts(resp.data, currentPage));
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

export const loadProductsSearch = (query_string, all_words='on', currentPage=1, limit=9, description_length=100) => {
    return dispatch => {
        axios.get('/products/search?query_string='+query_string+'&all_words='+all_words+'&page='+currentPage+'&limit='+limit+'&description_length='+description_length)
        .then(resp=> {
            dispatch(setProducts(resp.data, currentPage));
        })
        .catch(error=> {
            dispatch(loadProductsSearchFailed()); 
        }); 
    }
}