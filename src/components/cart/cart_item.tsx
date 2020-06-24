import React from 'react';
import { CartProduct } from '../../store/cart/types';
import { Button } from '../common/button';

interface CartItemProps {
  item: CartProduct;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({
  item,
}: CartItemProps) => {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src="" alt="" />
      </div>
      <div className="cart__item-info">
        <h3>Сырный цыпленок</h3>
        <p>26 см.</p>
      </div>
      <div className="cart__item-count">
        <div className="cart__item-count-minus">-</div>
        <b>2</b>
        <div className="cart__item-count-minus">+</div>
      </div>
      <div className="cart__item-price">
        <b>770 Р</b>
      </div>
      <div className="cart__item-remove">
        <Button>x</Button>
      </div>
    </div>
  );
};

export default CartItem;
