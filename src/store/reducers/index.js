import { combineReducers } from 'redux'
import categories from './categories'
import departments from './departments'
import products from './products'

export default combineReducers({
    categories,
    departments,
    products
})