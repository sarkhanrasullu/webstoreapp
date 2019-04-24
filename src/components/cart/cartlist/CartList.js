import React, { Component } from 'react'
import Cart from './Cart';
import CartListDetails from '../cartlistdetails/CartListDetails';

export default class CartList extends Component {

  render() {
    return (
        <div>
          <h5>Cart</h5>
          <div>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
          </div>
          <CartListDetails/>
        </div>
        
    )
  }
}
