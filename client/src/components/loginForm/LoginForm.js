import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class LoginForm extends React.Component {

  state = {
      email: '',
      password: '',
      errorMsg: null
  }

 login = () => {
      const user = {
          email: this.state.email,
          password: this.state.password
      }
      this.props.login(user);
  }

  render(){
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
                    getValue={value=> this.setState({email: value})}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    getValue={value=> this.setState({password: value})}
                  />
                  <span className="text-danger">{this.props.errorMsg}</span>
                </div>
                <div className="text-center">
                  <MDBBtn color="light-blue" onClick={this.login}>Login</MDBBtn>
                </div>
            </form>
      );
    }
};

const mapStateToProps = (state) => {
  return {
    errorMsg: state.customers.errorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(actions.login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
