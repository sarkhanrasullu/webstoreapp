import React, { Component } from 'react'
import Cart from './Cart';
import CartListDetails from './cartlistdetail/CartListDetails';

export default class CartList extends Component {

  render() {
    return (
        <div>
          <h4>Cart</h4>
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
