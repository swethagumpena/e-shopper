/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  onIncrement(id) { // make it  arrow function
    const { productObjects } = this.state;
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount + 1,
      productObjects: productObjects.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, quantity: eachProduct.quantity + 1 };
        }
        return { ...eachProduct };
      }),
    };
    // console.log('aa', newState);
    // this.setState(newState, () => console.log('bb', this.state));
    this.setState(newState);
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
    const { cartCount, productObjects } = this.state;
    return (
      <>
        <Header cartCount={cartCount} />
        <Home
          productObjects={productObjects}
          onIncrement={(id) => { this.onIncrement(id); }}
          onDecrement={(item) => { this.onDecrement(item); }}
        />
        {/* <Header cartValue="1" /> */}
      </>
    );
  }
}

export default App;
