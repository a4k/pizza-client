import React from 'react';
import { CartProduct } from '../../store/cart/types';
import CartItem from './cart_item';
import { Product } from '../../store/product/types';

interface CartListProps {
  cartProducts: CartProduct[];
}

const CartList: React.FunctionComponent<CartListProps> = ({
  items,
}: CartListProps) => {
  return (
    <div>
      <div className="content__items">
        {items.map(item => (
          <CartItem key={`${item.product}_${item.size}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
