import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

function Counter(props) {
  const { value, onIncrement, onDecrement } = props;
  return (
    <div className={styles.counter}>
      <button onClick={onDecrement} type="button">-</button>
      <p className={`${styles.container} ${value === 0 ? styles.containerQuantity0 : ''}`}>
        {value}
        {' '}
        in Basket
      </p>
      <button onClick={onIncrement} type="button">+</button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
