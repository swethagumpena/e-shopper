import {
  render, screen, fireEvent, waitFor, act,
} from '@testing-library/react';
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
            count: 20,
            category: 'Fruits & Vegatables',
          },
        ],
      },
    })
      .mockResolvedValueOnce({
        data: {
          data: [{
            items: [
              {
                id: 1,
                name: 'apple',
                price: 120,
                count: 1,
                category: 'Fruits & Vegatables',
              },
            ],
            id: 1,
            date: 1615513494931,
          }],
        },
      })
      .mockResolvedValue(null);
  });

  // wherever there is useEffect do waitFor,  async  await
  test('should match snapshot', async () => {
    const { container } = await waitFor(() => render(<App />));
    expect(container).toMatchSnapshot();
  });

  test('should render home component', async () => {
    await waitFor(() => render(<App />));
    expect(screen.getByTestId('home'));
  });

  test('should render nav bar', async () => {
    await waitFor(() => render(<App />));
    expect(screen.getByTestId('header'));
  });

  test('should render all orders page', async () => {
    await waitFor(() => render(<App />));
    const allOrdersButton = screen.getByText('All Orders');
    act(() => { fireEvent.click(allOrdersButton); });
    screen.getByTestId('All-Orders');
    expect(document.location.href).toBe('http://localhost/orders');
  });

  test('should render Cart page', async () => {
    await waitFor(() => render(<App />));
    const cartButton = screen.getByText('My Basket');
    act(() => { fireEvent.click(cartButton); });
    screen.getByTestId('My-Basket');
    expect(document.location.href).toBe('http://localhost/cart');
  });

  test('should render home page when logo is clicked', async () => {
    await waitFor(() => render(<App />));
    const trolleyButton = screen.getByTestId('trolley-img');
    act(() => { fireEvent.click(trolleyButton); });
    expect(document.location.href).toBe('http://localhost/');
  });

  //   test('should fetch the data from external API call', async () => {
  //     const spyOnAxios = jest.spyOn(axios, 'get').mockResolvedValue({
  //       data: [
  //         {
  //           id: 1,
  //           name: 'apple',
  //           price: 120,
  //           count: 20,
  //           category: 'Fruits & Vegatables',
  //         }],
  //     });
  //     const mockUrl = 'xyz.com';
  //   });

  test('should increment cart count by 1 when + is clicked', async () => {
    await waitFor(() => render(<App />));
    const incrementCartElement = screen.getByText('+');
    act(() => { fireEvent.click(incrementCartElement); });
    screen.getByText('1 in basket');
    screen.getByText('Stock: 19');
  });

  test('should decrement cart count by 1 when - is clicked', async () => {
    await waitFor(() => render(<App />));
    const incrementCartElement = screen.getByText('-');
    act(() => { fireEvent.click(incrementCartElement); });
    screen.getByText('0 in basket');
    screen.getByText('Stock: 20');
  });

  test('should display button to toggle theme', async () => {
    await waitFor(() => render(<App />));
    const toggleTheme = screen.getByText('Change Theme');
    expect(toggleTheme.tagName).toBe('BUTTON');
    act(() => { fireEvent.click(toggleTheme); });
  });
});
