import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Layout from './components/Layouts/Layout';
import ProductListContainer from './containers/productlist/ProductListContainer';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ProductDetail from './components/productdetail/ProductDetail';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Layout>
            <Switch>
            <Route exact path="/" component={ProductListContainer} />
            <Route exact path="/product" component={ProductDetail} />
              <Route component={ProductListContainer} />
            </Switch>
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
