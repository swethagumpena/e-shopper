/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

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
          productName: 'Grapes',
          quantity: 0,
          price: 40,
          url: 'assets/grape.png',
        },
      ],
      cartCount: 0,
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
    const { cartCount, productObjects, cartItems } = this.state;
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
          </Switch>
        </BrowserRouter>

      </>
    );
  }
}

export default App;
