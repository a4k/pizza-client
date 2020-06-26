import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { ProductSortState } from '../../store/product_sort/types';
import { sendCategory } from '../../store/category/actions';
import { CategoriesState } from '../../store/category/types';
import { AppState } from '../../store';
import CategoryList from '../category/category_list';
import ProductSortList from '../product_sort/product_sort';
import ProductList from './product_list';
import { ProductState } from '../../store/product/types';
import { CartState } from '../../store/cart/types';
import { addToCart } from '../../store/cart/actions';
import { fetchProductRequest } from '../../store/product/actions';

interface ProductsContainerProps {
  fetchProductRequest: typeof fetchProductRequest;
  sendCategory: typeof sendCategory;
  category: CategoriesState;
  productSort: ProductSortState;
  product: ProductState;
  cart: CartState;
  addToCart: typeof addToCart;
}

class ProductsContainer extends React.Component<ProductsContainerProps> {
  state = {
    activeCategory: 0,
    activeSort: 'popularity',
  };

  componentDidMount = (): void => {
    const { fetchProductRequest } = this.props;
    fetchProductRequest();
  };

  selectCategory = (categoryId: number): void => {
    this.setState({ activeCategory: categoryId });
  };

  selectSort = (sortKey: string): void => {
    this.setState({ activeSort: sortKey });
  };

  render() {
    let { props, state } = this;

    return (
      <div className="container container--home">
        <div className="content__top">
          <CategoryList
            activeCategory={state.activeCategory}
            items={props.category.items}
            selectCategory={this.selectCategory}
          />
          <ProductSortList
            activeSort={state.activeSort}
            items={props.productSort.items}
            selectSort={this.selectSort}
          />
        </div>
        <ProductList
          items={props.product.data}
          cart={props.cart.items}
          addToCart={props.addToCart}
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
    fetchProductRequest,
    addToCart,
  }
)(ProductsContainer);
