import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBNavLink
} from "mdbreact";
import DropDownList from "../UI/DropDownList";
import AddtoCartButton from "../UI/AddtoCartButton";

export default class ProductOverlay extends Component {
  render() {
    const {product_id, name, price, discounted_price, attributeValues} = this.props.product;
    
    let dropDownList = [];
    if(this.props.product.attributeValues){
      dropDownList =  attributeValues.map((value, index)=>{
          return <DropDownList key={index} attributeValueList={value} />
      })
    }
    
    return (
      <MDBCard
        className="text-center h-100 w-100"
        style={{  opacity: 0.9 }}
      >
        <MDBCardBody className="mb-2">
          <MDBCardTitle>{name}</MDBCardTitle>
            <MDBNavLink to={"product/"+product_id}>
              <p className="card-price h4" style={{ color: "#f4425f" }}>
                <strong>{price}</strong>
              </p>
              <del style={{ color: "#c6c4c4" }}>{discounted_price}</del>
            </MDBNavLink>
            {dropDownList}
            <AddtoCartButton/>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
