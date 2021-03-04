import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
  const { cartCount } = props;
  return (
    <div className="header">
      logo
      E-Shopper
      <div className="cart">
        cart total :
        {' '}
        {cartCount}
      </div>
    </div>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
