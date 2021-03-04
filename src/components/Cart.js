import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cartItems }) => (
  // const cartTotal = cartItems.reduce((accumulator,eachItem) =>
  // {accumulator + eachItem.price * eachItem.quantity},0);
  <div>
    <div>
      Your Basket (
      {cartItems.length}
      ) items
    </div>
    <table>
      <tr>
        <th>ITEM DESCRIPTION</th>
        <th>UNIT PRICE</th>
        <th>QUANTITY</th>
        <th>SUB TOTAL</th>
      </tr>
      <tr>
        <td>FRUITS</td>
      </tr>

      {cartItems.map((eachItem) => (
        <tr key={eachItem.id}>
          <td>{eachItem.productName}</td>
          <td>{eachItem.price}</td>
          <td>{eachItem.quantity}</td>
          <td>{eachItem.price * eachItem.quantity}</td>
        </tr>
      ))}
    </table>
    <div>
      Total:
      {cartItems.reduce((accumulator, eachItem) => (
        accumulator + eachItem.price * eachItem.quantity), 0)}
    </div>
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
