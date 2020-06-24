import * as React from 'react';
import { Category } from '../../store/category/types';

interface CategoryItemProps {
  category: Category;
  selectCategory: (categoryId: number) => void;
  activeCategory: number;
}

const CategoryItem: React.FunctionComponent<CategoryItemProps> = ({
  category,
  selectCategory,
  activeCategory,
}: CategoryItemProps) => {
  const activeClass = activeCategory === category.id ? 'active' : '';
  return (
    <li className={activeClass} onClick={() => selectCategory(category.id)}>
      {category.title}
    </li>
  );
};

export default CategoryItem;
