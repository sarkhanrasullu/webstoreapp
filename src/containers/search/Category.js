import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap';
import { MDBBtn, MDBBtnGroup, MDBContainer } from 'mdbreact';

export default class Category extends Component {
  render() {
    return (
        <div>
            <h4>Category</h4>
              <MDBBtn group color="light-blue" className="mb-1 info-color" block>
                Regional
              </MDBBtn>
              <MDBBtn group color="light-blue" className="mb-1" block>
                Nature
              </MDBBtn>
              <MDBBtn group color="light-blue" className="mb-1" block>
                Seasonal
              </MDBBtn>
        </div>
    )
  }
}
