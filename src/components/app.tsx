import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

import { SystemState } from '../store/system/types';
import { updateSession } from '../store/system/actions';

import CategoryList from './category/category_list';
import { sendCategory } from '../store/category/actions';
import { CategoriesState } from '../store/category/types';
import { thunkSendCategory } from '../thunks';

import { Header } from './common/header';
import CategorySortList from './category/category_sort';

interface AppProps {
  sendCategory: typeof sendCategory;
  updateSession: typeof updateSession;
  category: CategoriesState;
  system: SystemState;
  thunkSendCategory: typeof thunkSendCategory;
}

class App extends React.Component<AppProps> {
  state = {
    activeCategory: 0,
    activeSort: 0,
  };

  componentDidMount() {
    const { props } = this;
    props.updateSession({
      loggedIn: true,
      session: 'my_session',
      userName: 'myName',
    });
    props.sendCategory({
      id: 2,
      title: 'Chat Bot',
      timestamp: new Date().getTime(),
    });

    props.thunkSendCategory('test');
  }

  selectCategory = (categoryId: number) => {};

  selectSort = (sortId: number) => {};

  render() {
    const { props, state } = this;
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <CategoryList
                activeCategory={state.activeCategory}
                categories={props.category.categories}
                selectCategory={this.selectCategory}
              />
              <CategorySortList
                categorySortItems={props.category.categorySortItems}
                selectSort={this.selectSort}
                activeSort={state.activeSort}
              />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{' '}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    system: state.system,
    category: state.category,
  };
};

export default connect(
  mapStateToProps,
  { sendCategory, updateSession, thunkSendCategory }
)(App);