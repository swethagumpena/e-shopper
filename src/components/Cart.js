import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => (
  <div>
    <div className="basket-msg">
      Your Basket (
      {cartItems.length}
      {'  '}
      items)
      <hr />
    </div>
    <table className="basket-table">
      <tr>
        <th>ITEM DESCRIPTION</th>
        <th>UNIT PRICE</th>
        <th>QUANTITY</th>
        <th>SUB TOTAL</th>
      </tr>
      <tr className="category">
        <td>FRUITS</td>
        <td />
        <td />
        <td />
      </tr>

      {cartItems.map((eachItem) => (
        <tr key={eachItem.id}>
          <td>{eachItem.productName}</td>
          <td className="items-align">
            Rs.
            {' '}
            {eachItem.price}
            .00
          </td>
          <td className="items-align">{eachItem.quantity}</td>
          <td className="items-align">
            Rs.
            {' '}
            {eachItem.price * eachItem.quantity}
            .00
          </td>
        </tr>
      ))}
    </table>
    <div className="total-card">
      <div className="total-amount">
        <p>TOTAL</p>
        <p>
          Rs.
          {' '}
          {cartItems.reduce((accumulator, eachItem) => (
            accumulator + eachItem.price * eachItem.quantity), 0)}
          .00
        </p>
      </div>
      <hr />
      <Link to="/checkout"><button className="checkout-btn" type="button">CHECKOUT</button></Link>
    </div>

    <Link to="/"><button className="continue-shopping-btn" type="button">Continue  Shopping</button></Link>

    {/* <div>{JSON.stringify(cartItems)}</div> */}
  </div>

);

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cart;
