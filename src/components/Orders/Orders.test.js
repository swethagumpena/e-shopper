import {
  render, screen,
} from '@testing-library/react';
import React from 'react';
import Orders from './Orders';

describe(Orders, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockOrders = [{
    items: [
      {
        id: 7,
        name: 'banana',
        price: 5,
        count: 46,
        category: 'Fruits & Vegatables',
        inCartCount: 2,
      },
    ],
    id: 1,
    date: 1615525171927,
  }];

  test('should match snapshot', () => {
    const { container } = render(<Orders orders={mockOrders} />);
    expect(container).toMatchSnapshot();
  });

  test('should display All orders', () => {
    render(<Orders orders={mockOrders} />);
    screen.logTestingPlaygroundURL();
    expect(screen.getByText('All Orders'));
  });

  test('should display Past orders and number of orders', () => {
    render(<Orders orders={mockOrders} />);
    expect(screen.getByText('Past Orders (1)'));
  });

  test('should display all orders table', () => {
    render(<Orders orders={mockOrders} />);
    expect(screen.getByTestId('all-orders-table'));
  });
});
