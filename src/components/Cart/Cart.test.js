import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';

describe(Cart, () => {
  const mockCartItems = [{
    id: 1,
    productName: 'Banana',
    quantity: 2,
    price: 40,
    url: 'xyz.com',
  }];
  test('should display number of items in basket', () => {
    render(<Cart cartItems={mockCartItems} />);
    expect(screen.getByText('Your Basket (1 items)'));
  });
});
