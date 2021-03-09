import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThemeContext from '../../ThemeContext';
import './Header.scss';

const Header = ({ cartCount }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className={theme === 'dark' ? 'header-dark' : 'header-light'}>
        {/* <div style={{ background: theme.backgroundColor }}> */}
        <div className="company">
          <Link to="/"><img className="trolley-img" data-testid="trolley-img" src="assets/trolley.jpg" alt="logo" /></Link>
          {' '}
          <p>E-Shopper</p>
        </div>
        <div className="basket">
          <Link to="/orders" className="all-orders">
            All Orders
          </Link>
          <Link to="/cart">
            <div className="cart">
              <img className="basket-img" src="assets/basket.jpeg" alt="basket" />
              <div className="order-count">
                <p>My Basket</p>
                <p>
                  {`${cartCount} items`}
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* </div> */}
      </div>
      <hr />
    </>
  );
};

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
