import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';
import styles from './Product.module.scss';

const Product = ({
  product, onIncrement, onDecrement,
}) => (
  <div className={styles.categories}>
    <div className={styles.productCard}>
      <img data-testid="product-img" id={styles.productImg} src="assets/banana.png" alt="product" />
      <div className={styles.priceQuantityContainer}>
        <h4>{product.name}</h4>
        <p>{`Stock: ${product.count}`}</p>
        <p>{`In cart: ${product.isCartCount}`}</p>

        <div className={styles.priceQuantity}>
          <p className={styles.productPrice}>
            {`MRP ${product.price}/-`}
          </p>
          <Counter
            value={product.inCartCount}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </div>
      </div>
    </div>
  </div>
);

const productShape = {
  id: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  url: PropTypes.string,
};

Product.propTypes = {
  // product -> object
  product: PropTypes.shape(productShape).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Product;
