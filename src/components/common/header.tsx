import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from '../cart/header_cart';
import { CurrencyModel } from '../../store/system/types';

interface HeaderProps {
  currency: string;
  currencyItems: CurrencyModel[];
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
            <div
              key={itemCurrency.name}
              className={`header__currency-item ${
                currency === itemCurrency.name ? 'active' : ''
              }`}
              onClick={() => selectCurrency(itemCurrency.name)}
            >
              {itemCurrency.value}
            </div>
          ))}
        </div>
        <HeaderCart />
      </div>
    </div>
  );
};
