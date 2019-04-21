import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdbreact';

export default class ProductPrimary extends Component {
  render() {
    return (
        <MDBCard  
        className={"text-center mb-2"} 
          >
          <MDBCardBody>
            <MDBCardImage 
              style={{ width: "20rem" }}
              className="img-fluid mx-auto d-block"
              src="https://mcdn01.gittigidiyor.net/43515/tn50/435154338_tn50_0.jpg" 
              />
                <MDBCardTitle>Gallic Cocks</MDBCardTitle>
                <div>
                    <h4 className="card-price" style={{color: '#f4425f'}}>
                      <strong>16.99$</strong>
                    </h4>
                    <del style={{color: '#c6c4c4'}}>16.99$</del>
                </div>
            </MDBCardBody>
      </MDBCard>
    )
  }
}
