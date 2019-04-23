import React, { Component } from "react";
import './cart.css'

import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCardHeader
} from "mdbreact";

export default class Cart extends Component {
  render() {
    return (
      <MDBCard bg="secondary" className="mb-2">
      <MDBCardHeader>
      <MDBBtn
            size="sm"
            color="danger"
            className="float-right badge badge-pill p-1"
          >
            <span>x</span>
          </MDBBtn>
          Gallic
      </MDBCardHeader>
        <MDBCardBody>
          <MDBCardImage
            style={{ width: "5rem" }}
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
