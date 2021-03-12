/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Product from './Product';

describe('example', () => {
  test('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
});

describe(Product.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockProps = {
    product: {
      id: 1,
      name: 'Banana',
      price: 40,
      count: 2,
      inCartCount: 0,
      category: 'Fruits',
    },
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };

  test('should match snapshot', () => {
    const { container } = render(<Product {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  test('should display product content', () => {
    render(<Product {...mockProps} />);
    //   product={
    //     {
    //       id: 1,
    //       name: 'Banana',
    //       quantity: 0,
    //       price: 40,
    //       url: 'xyz.com',
    //     }
    //   }
    //   onIncrement={() => {}}
    //   onDecrement={() => {}}

    expect(screen.getByText('Banana'));
    expect(screen.getByText('MRP 40/-'));
    expect(screen.getByText('Stock: 2'));
    expect(screen.getByTestId('product-img'));
    expect(screen.getByTestId('counter'));
  });
});
