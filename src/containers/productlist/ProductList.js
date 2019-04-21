import React, { Component } from 'react'
import Product from './product/Product';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class ProductList extends Component {
  render() {
    return ( 
        <MDBContainer fluid="true">
            <MDBRow>
                <MDBCol>
                    <Product/>
                </MDBCol>
                <MDBCol>
                    <Product/>
                </MDBCol>
                <MDBCol>
                    <Product/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
  }
}
