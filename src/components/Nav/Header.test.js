import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext, { themes } from '../../ThemeContext';
import Header from './Header';

describe(Header, () => {
  test('should display E-Shopper', () => {
    render(<BrowserRouter><Header cartCount={2} /></BrowserRouter>);
    screen.getByText('E-Shopper');
  });

  test('should display All orders', () => {
    render(<BrowserRouter><Header cartCount={2} /></BrowserRouter>);
    screen.getByText('All Orders');
  });

  test('should display All orders', () => {
    render(<BrowserRouter><Header cartCount={2} /></BrowserRouter>);
    screen.getByText('My Basket');
  });

  test('should display All orders', () => {
    render(<BrowserRouter><Header cartCount={2} /></BrowserRouter>);
    screen.getByText('2 items');
  });

  test('should match snapshot for theme light', () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeContext.Provider value={themes.light}>
          <Header cartCount={2} />
        </ThemeContext.Provider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot for theme dark', () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeContext.Provider value={themes.dark}>
          <Header cartCount={2} />
        </ThemeContext.Provider>
      </BrowserRouter>,

    );
    expect(container).toMatchSnapshot();
  });

  test('should navigate to home page when E-shopper cart image is clicked', () => {
    render(<BrowserRouter><Header cartCount={2} /></BrowserRouter>);
    const homePageLink = screen.getByTestId('trolley-img');
    fireEvent.click(homePageLink);
    expect(document.location.href).toBe('http://localhost/');
  });

  test('should navigate to all orders page when All orders is clicked', () => {
    render(<BrowserRouter><Header cartCount={2} /></BrowserRouter>);
    const allOrdersPageLink = screen.getByText('All Orders');
    fireEvent.click(allOrdersPageLink);
    expect(document.location.href).toBe('http://localhost/orders');
  });

  test('should navigate to all cart page when My Basket is clicked', () => {
    render(<BrowserRouter><Header cartCount={2} /></BrowserRouter>);
    const cartPageLink = screen.getByText('My Basket');
    fireEvent.click(cartPageLink);
    expect(document.location.href).toBe('http://localhost/cart');
  });
});
