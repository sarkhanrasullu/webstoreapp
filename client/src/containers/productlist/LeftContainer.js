import React, { Component } from 'react'
import Department from '../../components/department/Department';
import Category from '../../components/category/Category';
import CartList from '../../components/cart/cartlist/CartList';
import { MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class LeftContainer extends Component {

  render() {
    return (
      <MDBCard bg="light" className="mb-2">
        <MDBCardBody> 
                <MDBInput label="Search..."  onChange={
                    (obj) => {
                      this.props.loadProductsSearch(obj.target.value)
                    }
                  }/>
                <Department/>
                <Category/>
                <CartList/> 
        </MDBCardBody>
      </MDBCard>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProductsSearch: (query_string) => {
      dispatch(actions.loadProductsSearch(query_string));
    },
    onLoad: () => dispatch(actions.loadDepartments()),
  }
}

export default connect(null, mapDispatchToProps)(LeftContainer);