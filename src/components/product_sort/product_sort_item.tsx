import * as React from 'react';
import { ProductSort } from '../../store/product_sort/types';

interface ProductSortItemProps {
  sort: ProductSort;
  selectSort: (sortKey: string) => void;
  activeSort: string;
}

const ProductSortItem: React.FunctionComponent<ProductSortItemProps> = ({
  sort,
  selectSort,
  activeSort,
}: ProductSortItemProps) => {
  const activeClass = activeSort === sort.key ? 'active' : '';
  return (
    <li
      className={activeClass}
      onClick={() => selectSort(sort.key)}
    >
      {sort.value}
    </li>
  );
};

export default ProductSortItem;
