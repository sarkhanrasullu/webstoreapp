import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap';
import { MDBBtn, MDBBtnGroup, MDBContainer } from 'mdbreact';

export default class Department extends Component {
  render() {
    return (
        <div>
            <h5>Department</h5>
              <MDBBtn group color="light-blue" className="mb-1" block>
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
