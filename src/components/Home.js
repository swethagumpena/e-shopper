/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
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

export default Home;
