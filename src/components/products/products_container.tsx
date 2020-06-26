import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { ProductSortState } from '../../store/product_sort/types';
import { CategoriesState } from '../../store/category/types';
import { AppState } from '../../store';
import CategoryList from '../category/category_list';
import ProductSortList from '../product_sort/product_sort';
import ProductList from './product_list';
import { ProductState } from '../../store/product/types';
import { CartState } from '../../store/cart/types';
import { addToCart } from '../../store/cart/actions';
import { fetchProductRequest } from '../../store/product/actions';
import { fetchCategoryRequest } from '../../store/category/actions';
import { CurrencyModel } from '../../store/system/types';

interface ProductsContainerProps {
  fetchProductRequest: typeof fetchProductRequest;
  fetchCategoryRequest: typeof fetchCategoryRequest;
  category: CategoriesState;
  productSort: ProductSortState;
  product: ProductState;
  cart: CartState;
  addToCart: typeof addToCart;
  currencyItem: CurrencyModel;
}

class ProductsContainer extends React.Component<ProductsContainerProps> {
  state = {
    activeCategory: 'all',
    activeSort: 'popularity',
  };

  componentDidMount = (): void => {
    const { fetchProductRequest, fetchCategoryRequest } = this.props;
    fetchCategoryRequest();
    fetchProductRequest();
  };

  selectCategory = (categoryCode: string): void => {
    this.setState({ activeCategory: categoryCode });
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
            items={props.category.data}
            selectCategory={this.selectCategory}
          />
          <ProductSortList
            activeSort={state.activeSort}
            items={props.productSort.items}
            selectSort={this.selectSort}
          />
        </div>
        <ProductList
          currencyItem={props.currencyItem}
          activeSort={state.activeSort}
          items={props.product.data}
          activeCategory={state.activeCategory}
          cart={props.cart.items}
          addToCart={props.addToCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const { defaultCurrency } = state.system;
  let currencyItem = state.system.currency.find(
    item => item.name === defaultCurrency
  );
  if (!currencyItem) {
    currencyItem = { name: 'dollar', value: '$' };
  }
  return {
    product: state.product,
    category: state.category,
    productSort: state.productSort,
    cart: state.cart,
    currencyItem,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchProductRequest,
    fetchCategoryRequest,
    addToCart,
  }
)(ProductsContainer);
