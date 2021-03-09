import PropTypes from 'prop-types';
import React from 'react';
import Product from '../Product/Product';
import './Home.scss';

const Home = ({ productObjects, onDecrement, onIncrement }) => {
  const allProducts = productObjects.map((eachProduct) => (
    <Product
      key={eachProduct.id}
      product={eachProduct}
      onIncrement={() => onIncrement(eachProduct.id)}
      onDecrement={() => onDecrement(eachProduct)}
    />
  ));

  return (
    <div>
      <div className="products">
        {allProducts}
      </div>
    </div>

  );
};

Home.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  // productObjects-> array of objects
  productObjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    productName: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,

};

export default Home;
