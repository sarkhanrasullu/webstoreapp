import React, { Component } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import CartItem from './CartItem';

export default class CartListDetails extends Component {
  render() {
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
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
              </MDBTableBody>
            </MDBTable>
            </div>
            <div className="text-center float-right pt-3">
              Total price:<span className="text-danger"> $49.93</span>
            </div>
      </React.Fragment>
    )
  }
}
