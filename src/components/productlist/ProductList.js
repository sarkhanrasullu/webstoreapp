import React, { Component } from 'react'
import Product from '../product/Product';
import { MDBRow, MDBCol } from 'mdbreact';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class ProductList extends Component {

  render() {
    return ( 
      <MDBRow>
                {
                 this.props.products.map((p, index)=> {
                  return (
                          <MDBCol key={index} xs="7" sm="7"  md="5" lg="4" xl="4">
                              <Product product={p} />
                          </MDBCol>
                        )
                    })
                }
      </MDBRow>
    )
}
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}
 

export default connect(mapStateToProps)(ProductList);