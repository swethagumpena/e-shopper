import {
  render, screen, fireEvent, getAllByTestId,
} from '@testing-library/react';
import React from 'react';
import Orders from './Orders';

describe(Orders, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockOrders = [{
    orderId: 1,
    itemsCount: 3,
    date: 'Sun 04 Mar 2018',
    time: '10:01pm',
    amount: 883,
    items: [
      {
        id: 1,
        name: 'Banana',
        quantity: 1,
        price: 40,
        url: 'assets/banana.png',
      },
    ],
  }];

//   test('should display All orders', () => {
//     // const { container } = render(<Orders orders={mockOrders} />);
//     render(<Orders orders={mockOrders} />);
//     expect(screen.getByText('All Orders'));
  // getAllByTestId('')
  //     expect(container.querySelector('.basket-table td')).toBe([]);
  // container.querySelector('')
//   });
});
