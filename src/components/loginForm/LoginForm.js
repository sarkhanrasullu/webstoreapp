import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import CustomerService from "../../services/CustomerService";
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  state = {
      email: '',
      password: ''
  }

 login = () => {
      const user = {
          email: this.state.email,
          password: this.state.password
      }

      CustomerService.login(user).then(res => {
          if (res) {
              this.props.history.push(`/`)
          }
      })
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
                </div>
                <div className="text-center">
                  <MDBBtn color="light-blue" onClick={this.login} >Login</MDBBtn>
                </div>
            </form>
      );
    }
};

export default withRouter(LoginForm);