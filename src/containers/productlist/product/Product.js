import React from "react";
import ProductPrimary from "./ProductPrimary";
import ProductOverlay from "./ProductOverlay";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Product extends React.Component {
  render() {
    return (
      <MDBView hover className='overflow-visible'>
        <ProductPrimary />
        <MDBMask className="flex-center">
          <ProductOverlay />
        </MDBMask>
      </MDBView>
    );
  }
}

export default Product;
