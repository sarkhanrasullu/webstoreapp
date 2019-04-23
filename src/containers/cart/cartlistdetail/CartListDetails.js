import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import ModalWrapper from '../../../components/UI/ModalWrapper';
import CartItem from './CartItem'

export default class CartListDetails extends Component {

  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-center">
              <span>Total price: $49.93</span>
              <MDBBtn className="badge badge-pill p-3" color="danger" onClick={this.toggle}>View Details</MDBBtn>
        </div>
        <ModalWrapper 
            show={this.state.modal} 
            toggle={this.toggle} 
            okButtonLabel="Checkout" 
            noButtonLabel="Continue shopping">
            <MDBTable scrollY maxHeight='500px' >
              <MDBTableHead>
                <tr>
                  <th style={{ width: "7rem" }}>Item</th>
                  <th style={{ width: "7rem" }}>Options</th>
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
        </ModalWrapper>
      </React.Fragment>
    )
  }

}