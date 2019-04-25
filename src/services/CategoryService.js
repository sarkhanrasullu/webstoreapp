import axios from './CommonAxios'

export default class CategoryService {
  
  static findAll = (departmentId, callBack) => {
    return axios 
        .get('categories/inDeparment/'+departmentId)
        .then(res => {
            callBack(res.data);
        })
        .catch(err => {
            console.log(err)
        })
  }

}