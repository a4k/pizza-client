import * as React from 'react';
import { CategorySort } from '../../store/category/types';

interface CategorySortItemProps {
  sort: CategorySort;
  selectSort: (categoryId: number) => void;
  activeSort: number;
}

const CategorySortItem: React.FunctionComponent<CategorySortItemProps> = ({
  sort,
  selectSort,
  activeSort,
}: CategorySortItemProps) => {
  const activeClass = activeSort === sort.id ? 'active' : '';
  return (
    <li className={activeClass} key={sort.id}>
      <button onClick={() => selectSort(sort.id)}>{sort.title}</button>
    </li>
  );
};

export default CategorySortItem;
