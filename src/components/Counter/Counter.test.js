/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

describe('example', () => {
  test('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
});

describe(Counter.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockProps = {
    value: 2,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };

  test('should match snapshot', () => {
    const { container } = render(<Counter {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  test('should display the current count', () => {
    render(<Counter {...mockProps} />);
    expect(screen.getByText('2 in basket'));
  });

  // render(<Counter
  //   value={2}
  //   onIncrement={() => {}}
  //   onDecrement={() => {}}
  // />)

  test('should display an increment button', () => {
    render(<Counter {...mockProps} />);
    const incrementElement = screen.getByText('+');
    expect(incrementElement.tagName).toBe('BUTTON');
  });

  test('should display a decrement button', () => {
    render(<Counter {...mockProps} />);
    const incrementElement = screen.getByText('-');
    expect(incrementElement.tagName).toBe('BUTTON');
  });

  test('should increment product count', () => {
    render(<Counter {...mockProps} />);
    const incrementElement = screen.getByText('+');
    fireEvent.click(incrementElement);
    expect(mockProps.onIncrement).toHaveBeenCalled();
  });

  test('should decrement product count', () => {
    render(<Counter {...mockProps} />);
    const decrementElement = screen.getByText('-');
    fireEvent.click(decrementElement);
    expect(mockProps.onDecrement).toHaveBeenCalled();
  });
});
