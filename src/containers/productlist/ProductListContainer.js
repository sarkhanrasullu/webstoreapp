import React, { Component } from 'react'
import PaginationWrapper from '../../components/UI/PaginationWrapper';
import LeftContainer from './LeftContainer';
import ProductList from '../../components/productlist/ProductList';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

export default class ProductListContainer extends Component {
  render() {
    return (
        <MDBContainer fluid={true}>
            <MDBRow>
                <MDBCol >
                    <PaginationWrapper/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol xs="4" sm="4"  md="4" lg="3" xl="2" >
                    <LeftContainer/>
                </MDBCol>
                <MDBCol>
                    <ProductList/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
  }
}
