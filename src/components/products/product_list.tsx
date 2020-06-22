import React from 'react';
import { Product } from '../../store/product/types';
import ProductItem from './product_item';

interface ProductListProps {
  items: Product[];
  selectProduct: (product: number, size: number, price: number) => void;
}

const ProductList: React.FunctionComponent<ProductListProps> = ({
  items,
}: ProductListProps) => {
  return (
    <div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
