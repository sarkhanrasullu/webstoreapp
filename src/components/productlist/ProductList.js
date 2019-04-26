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
                  console.log("ProductList="+JSON.stringify(p))

                  console.log(p)
                  return (
                          <MDBCol xs="7" sm="7"  md="5" lg="4" xl="3">
                              <Product product={p}/>
                          </MDBCol>
                        )
                    })
                }
      </MDBRow>
    )
}
}

const mapStateToProps = (state) => {
  console.log(state.products.products)

  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(ProductList);