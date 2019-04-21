import React, { Component } from 'react'
import Department from './Department';
import Category from './Category';
import CartList from '../cart/CartList';
import { MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

export default class SearchContainer extends Component {
  render() {
    return (
      <MDBCard bg="light" className="mb-2">
        <MDBCardBody> 
                <MDBInput group label="Search..."/>
                <Department/>
                <Category/>
                <CartList/> 
        </MDBCardBody>
      </MDBCard>
        
    )
  }
}
