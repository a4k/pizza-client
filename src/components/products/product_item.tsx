import React, { useState } from 'react';
import { Product } from '../../store/product/types';
import { CartProduct } from '../../store/cart/types';
import { getImageUrl } from '../../utils/image';
import { CurrencyModel } from '../../store/system/types';
import { calculatePrice } from '../../utils/price';

interface ProductItemProps {
  activeCategory: string;
  item: Product;
  cart: CartProduct[];
  addToCart: (product: number, size: number) => void;
  currencyItem: CurrencyModel;
}

const ProductItem: React.FunctionComponent<ProductItemProps> = ({
  activeCategory,
  item,
  cart,
  addToCart,
  currencyItem,
}: ProductItemProps) => {
  const currency = currencyItem.value;
  const [activeSize, setActiveSize] = useState(item.size[0]);

  let countOfProduct = 0;
  const activeCartItem = cart.find(
    cartItem => cartItem.product === item.id && cartItem.size === activeSize.id
  );
  if (activeCartItem) {
    countOfProduct = activeCartItem.quantity;
  }
  if (activeCategory !== 'all' && activeCategory !== item.category.code) {
    return <></>;
  }

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={getImageUrl(activeSize.image ? activeSize.image : '')}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{item.title}</h4>
      <div className="pizza-block__description">{item.description}</div>
      <div className="pizza-block__selector">
        <ul>
          {item.size.map(sizeItem => (
            <li
              key={sizeItem.id}
              className={sizeItem.id === activeSize.id ? 'active' : ''}
              onClick={() => setActiveSize(sizeItem)}
            >
              {sizeItem.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {currency}
          {calculatePrice(currencyItem.name, activeSize.price)}
        </div>
        <div
          className="button button--outline button--add"
          onClick={() => addToCart(item.id, activeSize.id)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add to cart</span>
          <i>{countOfProduct}</i>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
