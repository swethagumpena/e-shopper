import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';
// import { Link, useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const history = useHistory();
  const handleClickHome = () => {
    history.push('/');
  };
  const handleClickCheckout = () => {
    history.push('/checkout');
  };

  return (

    <div>
      <div className="basket-msg">
        Your Basket (
        {cartItems.length}
        {'  '}
        items)
        <hr />
      </div>
      <table className="basket-table">
        <tbody>
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
        </tbody>

      </table>

      <div className="total-container">
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
          <div className="horizontal-line">
            <hr />
          </div>
          <div className="checkout-btn">
            {/* <Link to="/checkout">
              <button type="button">
                CHECKOUT =&gt;
              </button>
            </Link> */}
            <button type="button" onClick={handleClickCheckout}>CHECKOUT =&gt;</button>
          </div>
        </div>
        <div className="continue-shopping">
          {/* <Link to="/"><button type="button">Continue Shopping</button></Link> */}
          <button type="button" onClick={handleClickHome}>Continue Shopping</button>
        </div>
      </div>

      {/* <div>{JSON.stringify(cartItems)}</div> */}
    </div>

  );
};

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
