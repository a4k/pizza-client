import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
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
  componentDidMount() {
    const { props } = this;
    props.updateSession({
      loggedIn: true,
      session: 'my_session',
      userName: 'myName',
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/cart">
              <CartContainer />
            </Route>
            <Route path="/">
              <ProductsContainer {...this.props} />
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
