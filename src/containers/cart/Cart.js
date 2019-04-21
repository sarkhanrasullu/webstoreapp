import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from "mdbreact";

export default class Cart extends Component {
  render() {
    return (
      <MDBCard bg="secondary" className="mb-2 ">
        <MDBCardBody>
          <MDBBtn
            size="sm"
            floating
            color="light-blue"
            className="float-right badge badge-pill p-1"
          >
            <span>x</span>
          </MDBBtn>
          <MDBCardImage
            style={{ width: "10rem" }}
            className="img-fluid mx-auto d-block"
            src="https://mcdn01.gittigidiyor.net/43515/tn50/435154338_tn50_0.jpg"
            waves
          />
          Gallic <span className="text-danger">x</span> 1
          <MDBCardText>
            size: S<br />
            color: white
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
