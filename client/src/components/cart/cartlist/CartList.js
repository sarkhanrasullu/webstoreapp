import React, { Component } from 'react'
import Cart from './Cart';
import CartListDetailsButton from '../cartlistdetails/CartListDetailsButton';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

class CartList extends Component {

  componentDidMount(){
    let cart_id = localStorage.getItem('cart_id');
    if(cart_id === null){
      cart_id = 1;
      // const uniqueId = Math.random().toString(36).substring(2) 
      //          + (new Date()).getTime().toString(36);
      // cart_id = uniqueId;
    }
    localStorage.setItem('cart_id', cart_id);
    this.props.onLoad(cart_id);
  }
  
  render() {

    const cartList = [];

    const {carts} = this.props;
    let totalPrice = 0;
    if(carts)
      carts.map((cart, index) => {
        totalPrice+= parseFloat(cart.subtotal );
        cartList.push( <Cart key={index} cart={cart}/>);
      })

    return (
        <div>
          <h5>Cart</h5>
          <div>
            {cartList}
          </div>
          <CartListDetailsButton totalPrice={totalPrice}/>
        </div>
        
    )
  }
}


const mapStateToProps = (state) => {
  return {
      carts: state.carts.carts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (cart_id) => dispatch(actions.loadCarts(cart_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);