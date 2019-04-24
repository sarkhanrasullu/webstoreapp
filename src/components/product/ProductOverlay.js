import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle
} from "mdbreact";
import DropDownList from "../UI/DropDownList";
import AddtoCartButton from "../UI/AddtoCartButton";

export default class ProductOverlay extends Component {
  render() {
    return (
      <MDBCard
        className="text-center h-100 w-100"
        style={{  opacity: 0.9 }}
      >
        <MDBCardBody className="mb-2">
          <MDBCardTitle>Gallic Cocks</MDBCardTitle>
          <div>
            <h4 className="card-price" style={{ color: "#f4425f" }}>
              <strong>16.99$</strong>
            </h4>
            <del style={{ color: "#c6c4c4" }}>16.99$</del>
          </div>
          <DropDownList items={["S", "XS", "L"]} />
          <DropDownList items={["White", "Red"]} />

          <AddtoCartButton/>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
