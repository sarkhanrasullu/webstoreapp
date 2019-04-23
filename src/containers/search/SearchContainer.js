import React, { Component } from 'react'
import Department from '../department/Department';
import Category from '../category/Category';
import CartList from '../cart/cartlist/CartList';
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
