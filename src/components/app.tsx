import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../store';

import { SystemState } from '../store/system/types';
import { updateSession } from '../store/system/actions';

import { Header } from './common/header';
import ProductsContainer from './products/products_container';
import CartContainer from './cart/cart_container';

interface AppProps {
  updateSession: typeof updateSession;
  system: SystemState;
}

class App extends React.Component<AppProps> {
  selectCurrency(currency: string) {
    // this.setState({ currency });
  }

  render() {
    const { state } = this;
    return (
      <Router>
        <div>
          <Header
            currency={state.currency}
            currencyItems={state.currencyItems}
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
  { updateSession }
)(App);
