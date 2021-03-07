/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductQuantity from '../Counter/Counter';
import styles from './Product.module.css';

class Product extends Component {
  render() {
    const { product, onIncrement, onDecrement } = this.props;
    return (
      <div className={styles.productCard}>
        <img id={styles.productImg} src={product.url} alt="product" />
        <div className={styles.priceQuantityContainer}>
          <h4>{product.productName}</h4>
          <p>1 kg</p>
          <div className={styles.priceQuantity}>
            <p className={styles.productPrice}>
              MRP
              {' '}
              {product.price}
              /-
            </p>
            <ProductQuantity
              value={product.quantity}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        </div>
      </div>
    );
  }
}

// function Product() {
//   const { product } = this.props;
//   return (
//     <div className="Product">
//       <img id="product-img" src={product.src} alt="product" />
//       <div className="container">
//         <h4>{product.productName}</h4>
//         <p>1 kg</p>
//         <ProductQuantity
//           quantity={product.quantityInCart}
//         />
//       </div>
//     </div>
//   );
// }

// Product.propTypes = {
//   url: PropTypes.string,
//   productName: PropTypes.string.isRequired,
//   quantityInCart: PropTypes.number.isRequired,
// };

// Product.defaultProps = {
//   url: '',
// };

const productShape = {
  id: PropTypes.number,
  productName: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.price,
  url: PropTypes.string,
};

Product.propTypes = {
  product: PropTypes.shape(productShape).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Product;
