import React, { Component } from 'react'
import Department from '../../components/department/Department';
import Category from '../../components/category/Category';
import CartList from '../../components/cart/cartlist/CartList';
import { MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

export default class LeftContainer extends Component {
  render() {
    return (
      <MDBCard bg="light" className="mb-2">
        <MDBCardBody> 
                <MDBInput label="Search..."/>
                <Department/>
                <Category/>
                <CartList/> 
        </MDBCardBody>
      </MDBCard>
    )
  }
}
