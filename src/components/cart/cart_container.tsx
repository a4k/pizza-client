import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store';
import { CartItemModel } from '../../store/cart/types';
import { addToCart, changeQuantity, emptyCart } from '../../store/cart/actions';
import CartList from './cart_list';
import { Button } from '../common/button';

interface CartContainerProps {
  cartItems: CartItemModel[];
  addToCart: typeof addToCart;
  emptyCart: typeof emptyCart;
  changeQuantity: typeof changeQuantity;
  quantity: number;
  totalPrice: number;
}

class CartContainer extends React.Component<CartContainerProps> {
  render() {
    let { props } = this;

    if (props.quantity === 0) {
      return (
        <div className="container--cart">
          <div className="cart--empty">
            <h2>Корзина пустая</h2>
            <p className="cart--empty__info">
              Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того,
              чтобы заказать пиццу, перейдите на главную страницу
            </p>
            <Link to="/">
              <Button className="button--black">Вернуться назад</Button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="container--cart">
        <div className="cart__top">
          <h2 className="content__title">Корзина</h2>
          <div className="cart__clear" onClick={props.emptyCart}>
            <span>Очистить корзину</span>
          </div>
        </div>
        <CartList
          onChangeQuantity={props.changeQuantity}
          items={props.cartItems}
        />
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{props.quantity} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{props.totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/">
              <Button className="go-back-btn" outline={true}>
                <span>Вернуться назад</span>
              </Button>
            </Link>
            <Button className="pay-btn">Оплатить сейчас</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const cartItems: CartItemModel[] = [];
  let quantity = 0;
  let totalPrice = 0;
  state.cart.items.forEach(item => {
    const product = state.product.items.find(
      productItem => item.product === productItem.id
    );
    if (product) {
      const productSize = product.size.find(
        sizeItem => sizeItem.id === item.size
      );
      if (productSize) {
        const cartItem: CartItemModel = { cart: item, product };
        cartItems.push(cartItem);
        quantity += item.quantity;
        totalPrice += item.quantity * productSize.price;
      }
    }
  });
  return {
    cartItems,
    quantity,
    totalPrice,
  };
};

export default connect(
  mapStateToProps,
  {
    addToCart,
    emptyCart,
    changeQuantity,
  }
)(CartContainer);
