import { combineReducers } from 'redux'
import categories from './categories'
import departments from './departments'
import products from './products'
import customers from './customers'
import carts from './carts'

export default combineReducers({
    categories,
    departments,
    products,
    customers,
    carts
})