import React, { Component } from 'react'
import { MDBContainer, MDBCard, MDBCardBody, MDBRow} from 'mdbreact';
import CartListDetails from '../../components/cart/cartlistdetails/CartListDetails';
import PayPalButton from '../../components/checkout/PayPalButton';

export default class CheckoutContainer extends Component {

  render() {
    const {cartTotal, clearCart, history} = this.props;
    return (
        <React.Fragment>
            <MDBContainer fluid={true}>
            <MDBCard bg="light" className="mt-3 border border-light z-depth-0">
                <MDBCardBody> 
                  <CartListDetails/>
                  <PayPalButton total={10} clearCart={clearCart} history={history}/>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </React.Fragment>
    )
  }
}
