import React from "react";
import ProductPrimary from "./ProductPrimary";
import ProductOverlay from "./ProductOverlay";
import { MDBMask, MDBView} from "mdbreact";

class Product extends React.Component {
  render() {
    return (
      <MDBView hover className='overflow-visible'>
        <ProductPrimary product={this.props.product}/>
        <MDBMask className="flex-center overflow-visible">
          <ProductOverlay product={this.props.product}/>
        </MDBMask>
      </MDBView>
    );
  } 
}

export default Product;
