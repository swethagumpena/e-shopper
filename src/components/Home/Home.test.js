/* eslint-disable react/jsx-props-no-spreading */
import {
  render, screen, fireEvent, getAllByTestId,
} from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe(Home, () => {
  const mockProps = {
    productObjects: {
      Fruits: [{
        id: 1,
        name: 'Banana',
        price: 40,
        count: 2,
        inCartCount: 0,
        category: 'Fruits',
      }],

    },
    onDecrement: jest.fn(),
    onIncrement: jest.fn(),
  };

  test('should match snapshot', () => {
    const { container } = render(<Home {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  test('should display the category name', () => {
    render(<Home {...mockProps} />);
    expect(screen.getByText('Fruits'));
  });

  test('should render the product component', () => {
    render(<Home {...mockProps} />);
    expect(screen.getByTestId('product'));
  });
});
