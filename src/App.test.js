import { render, screen } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import App from './App';

describe(App, () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        data: [
          {
            id: 1,
            name: 'apple',
            price: 120,
            count: 1,
            category: 'Fruits & Vegatables',
            date: 1615122360481,
          }],
      },
    })
      .mockResolvedValueOnce({

      }).mockResolvedValue(null);
  });
  test('should match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('should render home component', () => {
    render(<App />);
    expect(screen.getByTestId('home'));
  });

  test('should render nav bar', () => {
    render(<App />);
    expect(screen.getByTestId('header'));
  });

  test('should fetch data from external api', async () => {

  });
});
