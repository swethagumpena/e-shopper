import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe(Cart, () => {
  const mockCartItems = {
    fruits: [{
      id: 1,
      name: 'Banana',
      price: 40,
      count: 2,
      inCartCount: 0,
      category: 'fruits',
    }],
  };

  test('should display number of items in basket', () => {
    render(<Cart cartCount={1} cartItems={mockCartItems} />);
    expect(screen.getByText('Your Basket (1 items)'));
  });

  test('should display a checkout button', () => {
    render(<BrowserRouter><Cart cartCount={1} cartItems={mockCartItems} /></BrowserRouter>);
    const checkoutElement = screen.getByText('CHECKOUT');
    expect(checkoutElement.tagName).toBe('BUTTON');
    fireEvent.click(checkoutElement);
    expect(document.location.href).toBe('http://localhost/checkout');
  });

  test('should display a continue shopping button', () => {
    render(<BrowserRouter><Cart cartCount={1} cartItems={mockCartItems} /></BrowserRouter>);
    const continueShoppingElement = screen.getByText('Continue Shopping');
    expect(continueShoppingElement.tagName).toBe('BUTTON');
    fireEvent.click(continueShoppingElement);
    expect(document.location.href).toBe('http://localhost/');
  });

  // test('should not display category name if there are no items', () => {
  //   render(<Cart cartCount={0} cartItems={{ fruits: [] }} />);
  //   expect(screen.not.getByText('fruits'));
  // });
});
