import React, { useState } from 'react';
import { ProductSort } from '../../store/product_sort/types';
import ProductSortItem from './product_sort_item';

interface ProductSortListProps {
  items: ProductSort[];
  selectSort: (sortKey: string) => void;
  activeSort: string;
}

const ProductSortList: React.FunctionComponent<ProductSortListProps> = ({
  items,
  selectSort,
  activeSort,
}: ProductSortListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortIsOpenClassName = isOpen ? 'active' : '';
  let itemActiveSort: ProductSort = { key: '', value: '' };
  items.map(item => {
    if (item.key === activeSort) {
      itemActiveSort = item;
    }
    return item;
  });

  function selectSortItem(sortKey: string) {
    setIsOpen(!isOpen);
    selectSort(sortKey);
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{itemActiveSort.value}</span>
      </div>
      <div className={`sort__popup  ${sortIsOpenClassName}`}>
        <ul>
          {items.map(sort => (
            <ProductSortItem
              key={sort.key}
              sort={sort}
              activeSort={activeSort}
              selectSort={selectSortItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductSortList;
