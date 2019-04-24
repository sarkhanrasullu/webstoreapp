import React, { Component} from 'react'
import { MDBBtn } from 'mdbreact';

export default class Category extends Component {
  render() {
    return (
        <div>
              <h5>Category</h5>
              <MDBBtn  color="light-blue" className="mb-1 info-color" block>
                Regional
              </MDBBtn>
              <MDBBtn  color="light-blue" className="mb-1" block>
                Nature
              </MDBBtn>
              <MDBBtn  color="light-blue" className="mb-1" block>
                Seasonal
              </MDBBtn>
        </div>
    )
  }
}
