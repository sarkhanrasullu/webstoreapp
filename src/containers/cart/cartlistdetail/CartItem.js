import React, { Component } from 'react'
import { MDBBtn, MDBCardImage, MDBInput } from 'mdbreact';

export default class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>
          <MDBCardImage
              className="img-fluid mx-auto d-block"
              src="https://mcdn01.gittigidiyor.net/43354/tn24/433548254_tn24_0.jpg"
              waves
              style={{width:'5rem'}}
            />
            <span>Gallic Cock</span>
        </td>
        <td>
          <p>Size: S</p>
          <p>Color: White</p>
        </td>
        <td>
          <div className="inputWrapper">
            <MDBInput type="number" />
          </div>
        </td>
        <td>16.99$</td>
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
