import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard } from 'mdbreact';
import ProductImages from './productimages/ProductImages';
import ProductProperties from './productproperties/ProductProperties';

export default class CheckoutWrapper extends Component {
  render() {
    return (
        <MDBContainer fluid={true}>
        <MDBCard bg="light" className="mt-3 border border-light z-depth-0">
            <MDBCardBody> 
                <MDBContainer >
                    <MDBRow>
                        <MDBCol xs="4" sm="4"  md="4" lg="3" xl="3" >
                            <ProductImages/>
                        </MDBCol>
                        <MDBCol>
                            <ProductProperties/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBCardBody>
        </MDBCard>
        </MDBContainer>
    )
  }
}
