/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
// import Header from './Header';
import './Home.css';

const Home = ({ productObjects, onDecrement, onIncrement }) => {
  const allProducts = productObjects.map((eachProduct) => (
    <Product
      key={eachProduct.id}
      product={eachProduct}
      onIncrement={() => onIncrement(eachProduct.id)}
      onDecrement={() => onDecrement(eachProduct)}
    />
  ));
    // const { cartCount } = this.state;

  return (
    <div>
      <div className="products">
        {allProducts}
      </div>
    </div>

  );
};

// Home.propTypes = {
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired,
//   productObjects:

// };

export default Home;
