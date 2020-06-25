import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from '../cart/header_cart';

export const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <div>
              <h1>Pizza</h1>
              <p>The most delicious pizza</p>
            </div>
          </div>
        </Link>
        <HeaderCart />
      </div>
    </div>
  );
};
