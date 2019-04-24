import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import ModalWrapper from '../../../components/UI/ModalWrapper';
import CartItem from './CartItem'
import './cartlistdetails.css'
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

    const modalFooter = (
          <React.Fragment>
                <MDBBtn color="light-blue" className="badge badge-pill p-3" onClick={this.toggle}>Continue Shopping</MDBBtn>
                <MDBBtn color="danger" className="badge badge-pill p-3">Checkout</MDBBtn>
          </React.Fragment>
    );

    const modalBody = (
        <React.Fragment>
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
            <div className="text-center float-right pt-3">
              Total price:<span className="text-danger"> $49.93</span>
            </div>
        </React.Fragment>
    )
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