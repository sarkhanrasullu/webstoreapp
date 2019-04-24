import React from "react";
import { MDBInput, MDBBtn } from 'mdbreact';

const LoginForm = () => {

  return (
    <form>
    <div className="grey-text">
      <MDBInput
        label="Type your email"
        icon="envelope"
        group
        type="email"
        validate
        error="wrong"
        success="right"
      />
      <MDBInput
        label="Type your password"
        icon="lock"
        group
        type="password"
        validate
      />
    </div>
    <div className="text-center">
      <MDBBtn color="light-blue" >Login</MDBBtn>
    </div>
</form>
  );
};

export default LoginForm;