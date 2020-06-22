import React from 'react';
import HeaderCart from '../cart/header_cart';

export const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <div>
            <h1>Innoscripta Pizza</h1>
            <p>the most delicious pizza</p>
          </div>
        </div>
        <HeaderCart />
      </div>
    </div>
  );
};
