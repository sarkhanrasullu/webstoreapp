import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact';
import AddtoCartButton from '../../UI/AddtoCartButton';

export default class ProductProperties extends Component {
    
  render() {

    const productSize = ['S','M','L','XL','XXL'];
    const productColor = ['White','Black','Red','Orange','Green'];

    return (
      <MDBContainer>
          <MDBRow>
              <h5><strong>Gallic Glock</strong></h5>
          </MDBRow>
          <MDBRow>
            <div>
                <p className="card-price h2" style={{ color: "#f4425f" }}>
                <strong>16.99$</strong> <del className="h5" style={{ color: "#c6c4c4" }}>16.99$</del>
                </p>
            </div>
          </MDBRow>
          <MDBRow>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda veniam commodi, minus obcaecati rem impedit sit nisi explicabo suscipit aperiam harum eaque perferendis consequuntur omnis laborum dignissimos ex exercitationem.</p>
          </MDBRow>
          <MDBRow>
              <div>
            <p className="h5">Quantity</p>
            <MDBInput containerClass="mt-0" type="number" className="border border-light p-1 w-25 mt-0"/>
            </div>
          </MDBRow>

          <MDBRow>
            <div>
                <p className="h5">Size</p>
                {
                    productSize.map((value, index)=>{
                            return (
                                <MDBBtn key={index} color="light z-depth-0">
                                    {value}
                                </MDBBtn>
                            )
                    })
                }
            </div>
          </MDBRow>

          <MDBRow>
            <div>
                <p className="h5">Color</p>
                {
                    productColor.map((value, index)=>{
                            return (
                                <MDBBtn key={index} color="light z-depth-0">
                                    {value}
                                </MDBBtn>
                            )
                    })
                }
            </div>
          </MDBRow>
          <MDBRow>
                <AddtoCartButton/>
          </MDBRow>
      </MDBContainer>
    )
  }
}
