import React, { Component } from 'react'
import { MDBBtn} from 'mdbreact';

export default class Department extends Component {
  render() {
    return (
        <div>
            <h5>Department</h5>
              <MDBBtn  color="light-blue" className="mb-1" block>
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
