import *  as actionTypes from './actionTypes';
import axios from '../../services/CommonAxios'



export const setProducts = (productsWrapper, currentPage, loadFunc) => {
        return {
            type: actionTypes.SET_PRODUCTS,
            products: productsWrapper.raws,
            count: productsWrapper.count,
            currentPage: currentPage,
            loadFunc: loadFunc
            } 
}

export const setProductAttributes = (productsWrapper)=>{
    return new Promise(
        (resolve, reject)=>{
                    const products = productsWrapper.raws;
                    let length = products.length;
                    products.forEach(p => {
                        axios.get('/attributes/inProduct/'+p.product_id)
                        .then(resp=>{
                            length--;
                            const attributeValues = resp.data;
                            const temp = {};

                            const set = new Set(attributeValues);
                            set.forEach(av=>{
                                const attrName = av["attribute_name"];
                                temp[attrName] = [];
                            })

                            attributeValues.forEach(av=>{
                                const attrName = av["attribute_name"];
                                temp[attrName].push(av);
                            })

                            var result = Object.keys(temp).map(function(key) {
                                var r = {key: key, attributeValues: temp[key]};
                                
                                return r;
                            });
                            p.attributeValues = result;
                            if(length===0) {
                                resolve(200);
                            };
                        })
                        .catch(error=>{
                            
                        }); 
                    });
            }
    )
}

export const loadProductsInDepartment = (departmentId, currentPage = 1, limit = 9) => {
    
    return dispatch => {
        axios.get('/products/inDepartment/'+departmentId+'?page='+currentPage+'&limit='+limit)
        .then(resp=>{
             const loadFunc = (currentPage)=>dispatch(loadProductsInDepartment(departmentId, currentPage, limit));
             setProductAttributes(resp.data)
             .then(res=> {
                 dispatch(setProducts(resp.data, currentPage, loadFunc));
            });
             
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
             const loadFunc = (currentPage)=>dispatch(loadProductsInCategory(categoryId, currentPage, limit));
             setProductAttributes(resp.data)
             .then(res=> {
                 dispatch(setProducts(resp.data, currentPage, loadFunc));
            });
        })
        .catch(error=>{
            dispatch(loadProductsFailed()); 
        }); 
    }
}

export const loadProductsSearch = (query_string, all_words='on', currentPage=1, limit=9, description_length=100) => {
    return dispatch => {
        axios.get('/products/search?query_string='+query_string+'&all_words='+all_words+'&page='+currentPage+'&limit='+limit+'&description_length='+description_length)
        .then(resp=> {
            const loadFunc =  (currentPage)=>dispatch(loadProductsSearch(query_string,all_words, currentPage, limit, description_length));
            setProductAttributes(resp.data)
             .then(res=> {
                 dispatch(setProducts(resp.data, currentPage, loadFunc));
            });
        })
        .catch(error=> {
            dispatch(loadProductsSearchFailed()); 
        }); 
    }
}

export const loadProductsSearchFailed = () => {
    return {
        type: actionTypes.LOAD_PRODUCTS_SEARCH_FAILED
    }
}

export const loadProductsFailed = () => {
    return {
        type: actionTypes.LOAD_PRODUCTS_FAILED
    }
}