import React from 'react';
import { Product } from '../../store/product/types';
import ProductItem from './product_item';
import { CartProduct } from '../../store/cart/types';
import {CurrencyModel} from "../../store/system/types";

interface ProductListProps {
  activeSort: string;
  activeCategory: string;
  items: Product[];
  cart: CartProduct[];
  addToCart: (product: number, size: number) => void;
  currencyItem: CurrencyModel;
}

const ProductList: React.FunctionComponent<ProductListProps> = ({
  activeSort,
  activeCategory,
  items,
  cart,
  addToCart,
  currencyItem,
}: ProductListProps) => {
  const compareName = (a: Product, b: Product): number => {
    const bandA = a.title.toUpperCase();
    const bandB = b.title.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  };
  const comparePrice = (a: Product, b: Product): number => {
    const bandA = a.size[0].price;
    const bandB = b.size[0].price;
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  };
  let productItems = [];
  switch (activeSort) {
    case 'name':
      productItems = [...items].sort(compareName);
      break;
    case 'price':
      productItems = [...items].sort(comparePrice);
      break;
    default:
      productItems = items;
      break;
  }
  return (
    <div>
      <h2 className="content__title">Pizza</h2>
      <div className="content__items">
        {productItems.map(item => (
          <ProductItem
            key={item.id}
            currencyItem={currencyItem}
            activeCategory={activeCategory}
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
