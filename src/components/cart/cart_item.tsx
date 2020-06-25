import React from 'react';
import { CartItemModel } from '../../store/cart/types';
import { Button } from '../common/button';

interface CartItemProps {
  item: CartItemModel;
  onChangeQuantity: (
    productId: number,
    sizeId: number,
    quantity: number
  ) => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({
  item,
  onChangeQuantity,
}: CartItemProps) => {
  const currency = '$';
  const productSize = item.product.size.find(
    sizeItem => sizeItem.id === item.cart.size
  );
  const productPrice = productSize ? productSize.price : 0;
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src={productSize ? productSize.image : ''} alt="" />
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
          {item.cart.quantity * productPrice}
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
