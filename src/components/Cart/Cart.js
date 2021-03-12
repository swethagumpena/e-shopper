import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';
// import { Link, useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { connect } from 'formik';

const Cart = ({ cartCount, cartItems }) => {
  const history = useHistory();
  console.log(cartItems);
  let total = 0;
  return (

    <div>
      <div className="basket-msg">
        {`Your Basket (${cartCount} items)`}
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

          {Object.keys(cartItems).map((category) => {
            if (cartItems[category].length === 0) { return null; }
            return (
              <React.Fragment key={category}>
                <tr className="category">
                  <td>{category}</td>
                  <td />
                  <td />
                  <td />
                </tr>
                {cartItems[category].map((eachItem) => {
                  total += eachItem.price * eachItem.inCartCount;
                  return (
                    <tr key={eachItem.id}>
                      <td>{eachItem.name}</td>
                      <td className="items-align">
                        {`Rs. ${eachItem.price}.00`}
                      </td>
                      <td className="items-align">{eachItem.inCartCount}</td>
                      <td className="items-align">
                        {`Rs. ${eachItem.price * eachItem.inCartCount}.00`}
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>

      </table>

      <div className="total-container">
        <div className="total-card">
          <div className="total-amount">
            <p>TOTAL</p>
            <p>
              {`Rs. ${total}.00`}

              {/* {`Rs. ${cartItems}.reduce((accumulator, eachItem) => (
                accumulator + eachItem.price * eachItem.quantity), 0)}
              .00`} */}
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
            <button type="button" onClick={() => history.push('/checkout')}>CHECKOUT</button>
          </div>
        </div>
        <div className="continue-shopping">
          {/* <Link to="/"><button type="button">Continue Shopping</button></Link> */}
          <button type="button" onClick={() => history.push('/')}>Continue Shopping</button>
        </div>
      </div>

      {/* <div>{JSON.stringify(cartItems)}</div> */}
    </div>

  );
};

const productShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  inCartCount: PropTypes.number,
  category: PropTypes.string,
});

Cart.propTypes = {
  cartItems: PropTypes.objectOf(PropTypes.arrayOf(productShape)).isRequired,
  cartCount: PropTypes.number.isRequired,
};

// Cart.defaultProps = {
//   cartCount: 0,
// };

export default Cart;
