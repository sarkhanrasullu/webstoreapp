import React, { Component } from "react";
import './cart.css'

import {
  MDBCard,
  MDBCardBody, 
  MDBCardText,
  MDBCardImage,
  MDBCardHeader
} from "mdbreact";
import DeleteButton from "../../../components/UI/DeleteButton";

export default class Cart extends Component {
  render() {
    const {cart} = this.props;

    return (
      <MDBCard bg="secondary" className="mb-2">
      <MDBCardHeader>
          <h6>{cart.name}</h6>
          <DeleteButton/>
      </MDBCardHeader>
        <MDBCardBody>
          {/* <MDBCardImage
            style={{width: "5rem"}}
            className="img-fluid mx-auto d-block"
            src="https://mcdn01.gittigidiyor.net/43354/tn24/433548254_tn24_0.jpg"
            waves
          /> */}
          <MDBCardText style={{fontSize:'0.8rem'}}>
            {cart.attributes}<br />
            count: {cart.quantity}<br/>
            subtotal: {cart.subtotal}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
