import React from 'react';
import { Product } from '../../store/product/types';
import ProductItem from './product_item';
import { CartProduct } from '../../store/cart/types';

interface ProductListProps {
  items: Product[];
  cart: CartProduct[];
  addToCart: (product: number, size: number) => void;
}

const ProductList: React.FunctionComponent<ProductListProps> = ({
  items,
  cart,
  addToCart,
}: ProductListProps) => {
  return (
    <div>
      <h2 className="content__title">Пицца</h2>
      <div className="content__items">
        {items.map(item => (
          <ProductItem
            key={item.id}
            cart={cart}
            addToCart={addToCart}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
