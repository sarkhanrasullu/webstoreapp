import React, { Component } from 'react'
import Product from './product/Product';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class ProductList extends Component {
  render() {
    return ( 
        // <MDBContainer fluid="true">
            <MDBRow>
                <MDBCol xs={7} sm={7}  md={5} lg={4} xl={3}>
                    <Product/>
                </MDBCol>
                <MDBCol xs={7} sm={7}  md={5} lg={4} xl={3}>
                    <Product/>
                </MDBCol>
                <MDBCol xs={7} sm={7}  md={5} lg={4} xl={3}>
                    <Product/>
                </MDBCol>
            </MDBRow>
        // </MDBContainer>
    )
  }
}
