/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './Normalize.css';
import Header from './components/Nav/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      productObjects: [
        {
          id: 1,
          productName: 'Banana',
          quantity: 0,
          price: 40,
          url: 'assets/banana.png',
        },
        {
          id: 2,
          productName: 'Cherry',
          quantity: 0,
          price: 40,
          url: 'assets/cherry.png',
        },
        {
          id: 3,
          productName: 'Grape',
          quantity: 0,
          price: 40,
          url: 'assets/grape.png',
        },
        {
          id: 4,
          productName: 'Mango',
          quantity: 0,
          price: 40,
          url: 'assets/mango.png',
        }, {
          id: 5,
          productName: 'Orange',
          quantity: 0,
          price: 40,
          url: 'assets/orange.png',
        }, {
          id: 6,
          productName: 'Peach',
          quantity: 0,
          price: 40,
          url: 'assets/peach.png',
        }, {
          id: 7,
          productName: 'Pineapple',
          quantity: 0,
          price: 40,
          url: 'assets/pineapple.png',
        }, {
          id: 8,
          productName: 'Strawberry',
          quantity: 0,
          price: 40,
          url: 'assets/strawberry.png',
        },
      ],
      cartCount: 0,
      orders: [
        {
          orderId: 1,
          itemsCount: 3,
          date: 'Sun 04 Mar 2018',
          time: '10:01pm',
          amount: 883.00,
          items: [
            {
              id: 1,
              productName: 'Banana',
              quantity: 1,
              price: 40,
              url: 'assets/banana.png',
            },
            {
              id: 2,
              productName: 'Cherry',
              quantity: 2,
              price: 40,
              url: 'assets/cherry.png',
            },
            {
              id: 3,
              productName: 'Grapes',
              quantity: 1,
              price: 40,
              url: 'assets/grape.png',
            },
          ],
        }, {
          orderId: 2,
          itemsCount: 3,
          date: 'Sun 04 Mar 2018',
          time: '10:01pm',
          amount: 883.00,
          items: [
            {
              id: 1,
              productName: 'Banana',
              quantity: 1,
              price: 40,
              url: 'assets/banana.png',
            },
            {
              id: 2,
              productName: 'Cherry',
              quantity: 2,
              price: 40,
              url: 'assets/cherry.png',
            },
            {
              id: 3,
              productName: 'Grapes',
              quantity: 1,
              price: 40,
              url: 'assets/grape.png',
            },
          ],
        }],
    };
  }

  onIncrement = (id) => { // make it  arrow function
    const { productObjects } = this.state;
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        cartCount: prevState.cartCount + 1,
        productObjects: productObjects.map((eachProduct) => {
          if (eachProduct.id === id) {
            return { ...eachProduct, quantity: eachProduct.quantity + 1 };
          }
          return eachProduct;
        }),
      };

      newState = {
        ...newState,
        cartItems: newState.productObjects.filter((product) => product.quantity > 0),
      };
      // this.setState(newState, () => console.log('bb', this.state));
      return newState;
    });
  }

  onDecrement(item) {
    if (item.quantity === 0) {
      return;
    }
    const { productObjects } = this.state;
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount - 1,
      productObjects: productObjects.map((eachProduct) => {
        if (eachProduct.id === item.id) {
          return { ...eachProduct, quantity: eachProduct.quantity - 1 };
        }
        return { ...eachProduct };
      }),
    };
    this.setState(newState);
  }

  render() {
    const {
      cartCount, productObjects, cartItems, orders,
    } = this.state;
    return (
      <>
        <BrowserRouter>
          <Header cartCount={cartCount} />
          <Switch>
            <Route path="/" exact>
              <Home
                productObjects={productObjects}
                onIncrement={(id) => { this.onIncrement(id); }}
                onDecrement={(item) => { this.onDecrement(item); }}
              />
            </Route>
            <Route path="/cart">
              <Cart
                cartItems={cartItems}
              />
            </Route>
            <Route path="/orders">
              <Orders
                orders={orders}
              />

            </Route>
            <Route path="/checkout"><CheckoutForm /></Route>

          </Switch>
        </BrowserRouter>

      </>
    );
  }
}

export default App;
