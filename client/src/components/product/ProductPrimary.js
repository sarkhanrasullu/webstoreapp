import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdbreact';
import './product.css'

export default class ProductPrimary extends Component {
  render() {
    const {name, price, discounted_price, thumbnail} = this.props.product;
    return (
        <MDBCard  
        className={"text-center mb-2"} 
          >
          <MDBCardBody>
            <MDBCardImage 
              className="img-fluid mx-auto d-block img-primary"
              src={"/product_images/"+thumbnail}
              />
                <MDBCardTitle>{name}</MDBCardTitle>
                <div>
                    <h4 className="card-price" style={{color: '#f4425f'}}>
                      <strong>{price}</strong>
                    </h4>
                    <del style={{color: '#c6c4c4'}}>{discounted_price}</del>
                </div>
            </MDBCardBody>
      </MDBCard>
    )
  }
}
