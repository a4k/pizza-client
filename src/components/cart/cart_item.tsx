import React from 'react';
import { CartItemModel } from '../../store/cart/types';
import { Button } from '../common/button';
import { getImageUrl } from '../../utils/image';
import { CurrencyModel } from '../../store/system/types';
import { calculatePrice } from '../../utils/price';

interface CartItemProps {
  item: CartItemModel;
  onChangeQuantity: (
    productId: number,
    sizeId: number,
    quantity: number
  ) => void;
  currencyItem: CurrencyModel;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({
  item,
  onChangeQuantity,
  currencyItem,
}: CartItemProps) => {
  const currency = currencyItem.value;
  const productSize = item.product.size.find(
    sizeItem => sizeItem.id === item.cart.size
  );
  const productPrice = productSize ? productSize.price : 0;
  const productImage = productSize
    ? productSize.image
      ? productSize.image
      : ''
    : '';
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src={getImageUrl(productImage)} alt="" />
      </div>
      <div className="cart__item-info">
        <h3>{item.product.title}</h3>
        <p>{productSize ? productSize.title : ''}</p>
      </div>
      <div className="cart__item-count">
        <div
          className="cart__item-count-minus"
          onClick={() =>
            onChangeQuantity(
              item.cart.product,
              item.cart.size,
              item.cart.quantity - 1
            )
          }
        >
          -
        </div>
        <b>{item.cart.quantity}</b>
        <div
          className="cart__item-count-minus"
          onClick={() =>
            onChangeQuantity(
              item.cart.product,
              item.cart.size,
              item.cart.quantity + 1
            )
          }
        >
          +
        </div>
      </div>
      <div className="cart__item-price">
        <b>
          {currency}
          {calculatePrice(currencyItem.name, item.cart.quantity * productPrice)}
        </b>
      </div>
      <div className="cart__item-remove">
        <Button
          outline={true}
          onClick={() => onChangeQuantity(item.cart.product, item.cart.size, 0)}
        >
          x
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
