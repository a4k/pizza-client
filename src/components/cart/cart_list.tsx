import React from 'react';
import { CartItemModel } from '../../store/cart/types';
import CartItem from './cart_item';

interface CartListProps {
  items: CartItemModel[];
  onChangeQuantity: (
    productId: number,
    sizeId: number,
    quantity: number
  ) => void;
}

const CartList: React.FunctionComponent<CartListProps> = ({
  items,
  onChangeQuantity,
}: CartListProps) => {
  return (
    <div>
      <div className="content__items">
        {items.map(item => (
          <CartItem
            key={`${item.cart.product}_${item.cart.size}`}
            onChangeQuantity={onChangeQuantity}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
