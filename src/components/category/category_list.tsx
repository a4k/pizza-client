import * as React from 'react';
import { Category } from '../../store/category/types';
import CategoryItem from './category_item';

interface CategoryListProps {
  items: Category[];
  selectCategory: (categoryId: number) => void;
  activeCategory: Category;
}

const CategoryList: React.FunctionComponent<CategoryListProps> = ({
  items,
  selectCategory,
  activeCategory,
}: CategoryListProps) => {
  return (
    <div className="categories">
      <ul>
        {items.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            activeCategory={activeCategory}
            selectCategory={selectCategory}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
