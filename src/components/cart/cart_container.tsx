import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { Product, ProductSize, ProductState } from '../../store/product/types';
import {CartProduct, CartProductItem, CartState} from '../../store/cart/types';
import { addProductToCart } from '../../store/cart/actions';
import CartList from './cart_list';


interface CartContainerProps {
  cartProducts: CartProductItem[];
  product: ProductState;
  cart: CartState;
  addProductToCart: typeof addProductToCart;
}

class CartContainer extends React.Component<CartContainerProps> {
  render() {
    let { props } = this;

    return (
      <div className="container--cart">
        <div className="cart__top">
          <h2 className="content__title">Корзина</h2>
        </div>
        <CartList items={props.cartProducts} />
      </div>
    );
  }
}

function getProductById(products: Product[], productId: number): Product {
  let findProduct: Product = {
    id: 0,
    description: '',
    title: '',
    image: '',
    size: [],
  };
  products.map(product => {
    if (productId === product.id) {
      findProduct = product;
    }
    return product;
  });
  return findProduct;
}

function getCartProductById(
  productItems: CartProductItem[],
  productId: number,
  sizeId: number
): CartProductItem {
  let findProduct: CartProductItem = {
    id: 0,
    description: '',
    title: '',
    image: '',
    size: { id: 0, price: 0, size: 0, title: '' },
    quantity: 0,
  };
  productItems.map(product => {
    if (productId === product.id && sizeId === product.size.id) {
      findProduct = product;
    }
    return product;
  });
  return findProduct;
}

const mapStateToProps = (state: AppState) => {
  let arCart: CartProductItem[] = [];
  state.cart.items.map(item => {
    let product = getProductById(state.product.items, item.product);
    let cartProduct = getCartProductById(arCart, item.product, item.size);
    if (cartProduct.id > 0) {
      cartProduct.quantity += 1;
    } else {
      let productSize: ProductSize = { id: 0, title: '', size: 0, price: 0 };
      product.size.map(sizeItem => {
        if (sizeItem.id === item.size) {
          productSize = sizeItem;
        }
        return sizeItem;
      });
      let cartItem = {
        id: item.product,
        description: product.description,
        title: product.title,
        image: product.image,
        size: productSize,
        quantity: 1,
      };
      arCart.push(cartItem);
    }
    return item;
  });
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
