import PropTypes from 'prop-types';
import React from 'react';
import Product from '../Product/Product';
import './Home.scss';

const Home = ({ productObjects, onDecrement, onIncrement }) => {
  const productsByCategory = Object.keys(productObjects).map((category) => (
    <div key={category}>
      <div className="category-name">{category}</div>
      <div className="category-products">
        {productObjects[category].map((eachProduct) => (
          <Product
            key={eachProduct.id}
            category={category}
            product={eachProduct}
            onIncrement={() => onIncrement(eachProduct, category)}
            onDecrement={() => onDecrement(eachProduct, category)}
          />
        ))}
      </div>
    </div>
  ));

  return (
    <div>
      <div data-testid="home" className="products">
        {productsByCategory}
      </div>
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
Home.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  // productObjects-> array of objects
  productObjects: PropTypes.objectOf(PropTypes.arrayOf(productShape)).isRequired,
  // productObjects: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Home;
