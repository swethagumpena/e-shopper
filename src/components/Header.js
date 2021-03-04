import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const { cartCount } = props;
  return (
    <div className="header">
      <p>
        <Link to="/">logo</Link>
        {' '}
        E-Shopper
      </p>

      <Link to="/cart">
        <div className="cart">
          cart total :
          {' '}
          {cartCount}
        </div>
      </Link>
    </div>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
