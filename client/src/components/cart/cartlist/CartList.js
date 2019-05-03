import React, { Component } from 'react'
import Cart from './Cart';
import CartListDetailsButton from '../cartlistdetails/CartListDetailsButton';

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
          <CartListDetailsButton/>
        </div>
        
    )
  }
}
