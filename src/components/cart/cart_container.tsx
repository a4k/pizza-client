import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store';
import { CartItemModel } from '../../store/cart/types';
import { addToCart, changeQuantity, emptyCart, orderCart } from '../../store/cart/actions';
import CartList from './cart_list';
import { Button } from '../common/button';
import { CurrencyModel } from '../../store/system/types';
import { calculatePrice } from '../../utils/price';

interface CartContainerProps {
  cartItems: CartItemModel[];
  addToCart: typeof addToCart;
  orderCart: typeof orderCart;
  emptyCart: typeof emptyCart;
  changeQuantity: typeof changeQuantity;
  quantity: number;
  totalPrice: number;
  currencyItem: CurrencyModel;
}

class CartContainer extends React.Component<CartContainerProps> {
  state = {
    step: 1,
  };

  setStep(step: number) {
    this.setState({ step });
  }

  order = () => {
    const { props, state } = this;
    const step = state.step + 1;
    this.setStep(step);
    props.orderCart();
  }

  render() {
    let { props, state } = this;
    const currency = props.currencyItem.value;

    if (props.quantity === 0 && state.step === 1) {
      return (
        <div className="container--cart">
          <div className="cart--empty">
            <h2>Empty basket</h2>
            <p className="cart--empty__info">Let's add something!</p>
            <Link to="/">
              <Button className="button--black">Back to menu</Button>
            </Link>
          </div>
        </div>
      );
    }
    if (state.step === 2) {
      return (
        <div className="container--cart">
          <div className="cart__top">
            <h2 className="content__title">Carryout order</h2>
          </div>
          <div className="cart__form">
            <div className="form__row">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" className="form__input" />
            </div>
            <div className="form__row">
              <label htmlFor="phone">Cell phone</label>
              <input id="phone" type="text" className="form__input" />
            </div>
            <div className="form__row">
              <label htmlFor="address">Pizzeria address</label>
              <input
                id="address"
                type="text"
                value="614 Jackson E Ave"
                className="form__input"
              />
            </div>
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-buttons">
              <Button
                className="go-back-btn"
                outline={true}
                onClick={() => this.setStep(state.step - 1)}
              >
                <span>Back to the cart</span>
              </Button>
              <Button className="pay-btn" onClick={this.order}>
                Order
              </Button>
            </div>
          </div>
        </div>
      );
    }
    if (state.step === 3) {
      return (
        <div className="container--cart">
          <div className="cart__top">
            <h2 className="content__title">Order is placed</h2>
          </div>
          <div className="cart__success">Success</div>
          <div className="cart__bottom">
            <div className="cart__bottom-buttons">
              <Link to="/">
                <Button className="go-back-btn" outline={true}>
                  <span>Back to menu</span>
                </Button>
              </Link>
              <Button className="pay-btn" onClick={() => this.setStep(1)}>
                Open cart
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container--cart">
        <div className="cart__top">
          <h2 className="content__title">My order</h2>
          <div className="cart__clear" onClick={props.emptyCart}>
            <span>Clear basket</span>
          </div>
        </div>
        <CartList
          onChangeQuantity={props.changeQuantity}
          items={props.cartItems}
          currencyItem={props.currencyItem}
        />
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Total quantity: <b>{props.quantity}</b>
            </span>
            <span>
              Total price:{' '}
              <b>
                {currency}
                {calculatePrice(props.currencyItem.name, props.totalPrice)}
              </b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/">
              <Button className="go-back-btn" outline={true}>
                <span>Back to menu</span>
              </Button>
            </Link>
            <Button
              className="pay-btn"
              onClick={() => this.setStep(state.step + 1)}
            >
              Next
            </Button>
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
  const { defaultCurrency } = state.system;
  let currencyItem = state.system.currency.find(
    item => item.name === defaultCurrency
  );
  if (!currencyItem) {
    currencyItem = { name: 'dollar', value: '$' };
  }
  state.cart.items.forEach(item => {
    const product = state.product.data.find(
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
    currencyItem,
  };
};

export default connect(
  mapStateToProps,
  {
    addToCart,
    orderCart,
    emptyCart,
    changeQuantity,
  }
)(CartContainer);
