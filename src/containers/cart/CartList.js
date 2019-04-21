import React, { Component } from 'react'
import Cart from './Cart';

export default class CartList extends Component {
  render() {
    return (
      <div>
        <h4>Cart</h4>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
    )
  }
}
