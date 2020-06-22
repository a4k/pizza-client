import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { ProductSortState } from '../../store/product_sort/types';
import { selectCategory, sendCategory } from '../../store/category/actions';
import { selectProductSort } from '../../store/product_sort/actions';
import { CategoriesState } from '../../store/category/types';
import { thunkSendCategory } from '../../thunks';
import { AppState } from '../../store';
import CategoryList from '../category/category_list';
import ProductSortList from '../product_sort/product_sort';
import ProductList from './product_list';
import { ProductState } from '../../store/product/types';
import { CartState } from '../../store/cart/types';
import { addProductToCart } from '../../store/cart/actions';

interface ProductsContainerProps {
  sendCategory: typeof sendCategory;
  selectCategory: typeof selectCategory;
  category: CategoriesState;
  thunkSendCategory: typeof thunkSendCategory;
  productSort: ProductSortState;
  selectProductSort: typeof selectProductSort;
  product: ProductState;
  cart: CartState;
  addProductToCart: typeof addProductToCart;
}

class ProductsContainer extends React.Component<ProductsContainerProps> {
  componentDidMount() {
    const { props } = this;
    props.sendCategory({
      id: 1,
      title: 'Chat Bot',
    });
    props.thunkSendCategory('test');
  }

  selectCategory = (categoryId: number) => {
    let { props } = this;
    const category = props.category.items
      .filter(item => item.id === categoryId)
      .map(item => item);
    props.selectCategory(category[0]);
  };

  selectSort = (sortKey: string) => {
    let { props } = this;
    const sortItem = props.productSort.items
      .filter(item => item.key === sortKey)
      .map(item => item);
    props.selectProductSort(sortItem[0]);
  };

  selectProduct = (product: number, size: number, price: number) => {
    let { props } = this;
    props.addProductToCart(product, size, price);
  };

  render() {
    let { props } = this;

    return (
      <div className="container">
        <div className="content__top">
          <CategoryList
            activeCategory={props.category.activeCategory}
            items={props.category.items}
            selectCategory={this.selectCategory}
          />
          <ProductSortList
            activeSort={props.productSort.activeItem}
            items={props.productSort.items}
            selectSort={this.selectSort}
          />
        </div>
        <ProductList
          items={props.product.items}
          selectProduct={this.selectProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    product: state.product,
    category: state.category,
    productSort: state.productSort,
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  {
    sendCategory,
    selectCategory,
    thunkSendCategory,
    selectProductSort,
    addProductToCart,
  }
)(ProductsContainer);
