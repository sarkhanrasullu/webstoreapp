import React, { Component } from 'react'
import {  MDBBtn, MDBNavLink } from 'mdbreact';
import ModalWrapper from '../../UI/ModalWrapper';
import './cartlistdetails.css'
import CartListDetails from './CartListDetails';
export default class CartListDetailsButton extends Component {

  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const modalBody = <CartListDetails/>
    const modalFooter = (
          <React.Fragment>
                <MDBBtn color="light-blue" className="badge badge-pill p-3" onClick={this.toggle}>Continue Shopping</MDBBtn>
                <MDBNavLink to="checkout">
                   <MDBBtn color="danger" className="badge badge-pill p-3">Checkout</MDBBtn>
                </MDBNavLink>
          </React.Fragment>
    );
 
    return ( 
      <React.Fragment>
        <div className="text-center">
              Total price:<span className="text-danger"> $49.93</span>
              <MDBBtn className="badge badge-pill p-3" color="danger" onClick={this.toggle}>
                  View Details
              </MDBBtn>
        </div>
        <ModalWrapper 
            show={this.state.modal} 
            toggle={this.toggle} 
            modalBody={modalBody}
            modalFooter={modalFooter}
            />
      </React.Fragment>
    )
  }

}