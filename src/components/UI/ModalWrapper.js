import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class ModalWrapper extends Component {
      render() {
        return (
          <MDBContainer>
            <MDBModal isOpen={this.props.show} toggle={this.props.toggle} size="50%" backdrop={true}>
              <MDBModalHeader toggle={this.props.toggle}>
                {this.props.header}
              </MDBModalHeader>
              <MDBModalBody>
                {this.props.children}
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="light-blue" className="badge badge-pill p-3" onClick={this.props.toggle}>{this.props.noButtonLabel}</MDBBtn>
                <MDBBtn color="danger" className="badge badge-pill p-3">{this.props.okButtonLabel}</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        );
      }
}