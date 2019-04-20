import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layouts/Layout';
import ProductList from './components/Pages/ProductList';
import Signin from './components/Pages/Signin';
import Signup from './components/Pages/Signup';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Layout>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signup} />
              <Route component={ProductList} />
            </Switch>
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
