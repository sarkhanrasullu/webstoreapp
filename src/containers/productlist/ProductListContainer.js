import React, { Component } from 'react'
// import {Container, Col, Row} from 'react-bootstrap';
import PaginationWrapper from '../../components/UI/PaginationWrapper';
import SearchContainer from '../search/SearchContainer';
import ProductList from './ProductList';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

export default class ProductListContainer extends Component {
  render() {
    return (
        <MDBContainer fluid="true">
            <MDBRow>
                <MDBCol >
                    <PaginationWrapper/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol xs={2} sm={4}  md={3} lg={3} xl={3} >
                    <SearchContainer/>
                </MDBCol>
                <MDBCol>
                    <ProductList/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
  }
}
