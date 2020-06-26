import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../store';

import { SystemState } from '../store/system/types';
import { updateCurrency, updateSession } from '../store/system/actions';

import { Header } from './common/header';
import ProductsContainer from './products/products_container';
import CartContainer from './cart/cart_container';

interface AppProps {
  updateSession: typeof updateSession;
  updateCurrency: typeof updateCurrency;
  system: SystemState;
}

class App extends React.Component<AppProps> {
  selectCurrency = (currency: string) => {
    const { props } = this;
    props.updateCurrency(currency);
  };

  render() {
    const { props } = this;
    return (
      <Router>
        <div>
          <Header
            currency={props.system.defaultCurrency}
            currencyItems={props.system.currency}
            selectCurrency={this.selectCurrency}
          />
          <Switch>
            <Route path="/cart">
              <CartContainer />
            </Route>
            <Route path="/">
              <ProductsContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    system: state.system,
  };
};

export default connect(
  mapStateToProps,
  { updateSession, updateCurrency }
)(App);
