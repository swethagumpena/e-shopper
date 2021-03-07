import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const { cartCount } = props;
  return (
    <>
      <div className="header">
        <div className="company">
          <Link to="/"><img className="trolley-img" src="assets/trolley.jpg" alt="logo" /></Link>
          {' '}
          <p>E-Shopper</p>
        </div>
        <div className="blank" />
        <div className="basket">
          <Link to="/orders" className="all-orders">
            {/* <div className="orders">All Orders</div> */}
            All Orders
          </Link>
          <Link to="/cart">
            <div className="cart">
              <img className="basket-img" src="assets/basket.jpeg" alt="basket" />
              <div className="order-count">
                <p>My Basket</p>
                <p>
                  {cartCount}
                  {' '}
                  items
                </p>
              </div>
            </div>
          </Link>
        </div>

      </div>
      <hr />
    </>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
