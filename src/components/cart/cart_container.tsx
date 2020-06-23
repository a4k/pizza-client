import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ProductState } from '../../store/product/types';
import { CartState } from '../../store/cart/types';
import { addProductToCart } from '../../store/cart/actions';

interface CartContainerProps {
  product: ProductState;
  cart: CartState;
  addProductToCart: typeof addProductToCart;
}

class CartContainer extends React.Component<CartContainerProps> {
  addToCart = (product: number, size: number, price: number) => {
    let { props } = this;
    props.addProductToCart(product, size, price);
  };

  render() {
    let { props } = this;

    return (
      <div className="container">
        <div className="content__top">ss</div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    product: state.product,
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  {
    addProductToCart,
  }
)(CartContainer);
