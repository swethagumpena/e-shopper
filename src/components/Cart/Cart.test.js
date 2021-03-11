import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe(Cart, () => {
  const mockCartItems = [{
    id: 1,
    name: 'Banana',
    quantity: 2,
    price: 40,
    url: 'xyz.com',
  }];

  test('should display number of items in basket', () => {
    render(<Cart cartItems={mockCartItems} />);
    expect(screen.getByText('Your Basket (1 items)'));
  });

  test.only('should display a checkout button', () => {
    render(<BrowserRouter><Cart cartItems={mockCartItems} /></BrowserRouter>);
    const checkoutElement = screen.getByText('CHECKOUT');
    expect(checkoutElement.tagName).toBe('BUTTON');
    fireEvent.click(checkoutElement);
    expect(document.location.href).toBe('http://localhost/checkout');
  });
});
