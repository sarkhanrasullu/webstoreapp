import React, { Component } from 'react'
import { MDBBtn, MDBCardImage, MDBInput } from 'mdbreact';

export default class CartItem extends Component {
  render() {
    const {cart} = this.props;
    return (
      <tr>
        <td>
          {/* <MDBCardImage
              className="img-fluid mx-auto d-block"
              src="https://mcdn01.gittigidiyor.net/43354/tn24/433548254_tn24_0.jpg"
              waves
              style={{width:'5rem'}}
            /> */}
            <p>{cart.name}</p>
        </td>
        <td>
          <p> {cart.attributes}</p>
        </td>
        <td>
          <div className="inputWrapper">
            <MDBInput type="number" valueDefault={cart.quantity} />
          </div>
        </td>
        <td>{cart.subtotal}$</td>
        <td>
            <MDBBtn
              size="sm"
              floating
              color="danger"
              className="badge badge-pill p-2"
            >
              <span>x</span>
            </MDBBtn>
        </td>
      </tr>         
    )
  }
}
