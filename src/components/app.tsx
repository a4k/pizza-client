import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { AppState } from '../store';

import { SystemState } from '../store/system/types';
import { updateSession } from '../store/system/actions';

import { Header } from './common/header';
import ProductsContainer from './products/products_container';

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
      <div className="wrapper">
        <Header />
        <div className="content">
          <ProductsContainer />
        </div>
      </div>
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
