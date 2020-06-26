import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from '../cart/header_cart';

interface HeaderProps {
  currency: string;
  currencyItems: { [key: string]: string };
  selectCurrency: (currency: string) => void;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  currency,
  currencyItems,
  selectCurrency,
}: HeaderProps) => {
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
        <div className="header__currency">
          {currencyItems.map(itemCurrency => (
            <div key={itemCurrency.key} className="header__currency-dollar" onClick={() => selectCurrency(itemCurrency)}>
              {itemCurrency}
            </div>
          ))}
          <div className="header__currency-dollar" onClick={selectCurrency}>
            $
          </div>
          <div className="header__currency-euro">€</div>
        </div>
        <HeaderCart />
      </div>
    </div>
  );
};
