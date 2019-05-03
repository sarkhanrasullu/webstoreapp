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
    return (
      <MDBCard bg="secondary" className="mb-2">
      <MDBCardHeader>
          <h6>Gallic</h6>
          <DeleteButton/>
      </MDBCardHeader>
        <MDBCardBody>
          <MDBCardImage
            style={{width: "5rem"}}
            className="img-fluid mx-auto d-block"
            src="https://mcdn01.gittigidiyor.net/43354/tn24/433548254_tn24_0.jpg"
            waves
          />
          <MDBCardText className="text-center" style={{fontSize:'0.8rem'}}>
            size: S<br />
            color: white<br />
            count: 1
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
