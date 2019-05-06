import React, { Component } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import CartItem from './CartItem';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

class CartListDetails extends Component {

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
        cartList.push( <CartItem key={index} cart={cart}/>);
      })
    return (
      <React.Fragment>
          <div>
          <MDBTable 
                scrollY 
                maxHeight='500px' 
                small
                striped
            >
              <MDBTableHead>
                <tr>
                  <th >Item</th>
                  <th >Options</th>
                  <th >Quantity</th>
                  <th >Price</th>
                  <th >Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                  {cartList}
              </MDBTableBody>
            </MDBTable>
            </div>
            <div className="text-center float-right pt-3">
              Total price:<span className="text-danger"> {totalPrice}$</span>
            </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartListDetails);