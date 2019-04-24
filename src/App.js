import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Layout from './components/Layouts/Layout';
import ProductListContainer from './containers/productlist/ProductListContainer';
import ProductDetailContainer from './containers/productdetail/ProductDetailContainer';
import CheckoutContainer from './containers/checkout/CheckoutContainer';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Layout> 
                <Switch>
                  <Route exact path="/" component={ProductListContainer} />
                  <Route exact path="/product" component={ProductDetailContainer} />
                  <Route exact path="/checkout" component={CheckoutContainer} />
                  <Route component={ProductListContainer} />
                </Switch>
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
