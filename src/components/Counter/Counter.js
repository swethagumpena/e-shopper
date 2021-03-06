import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.scss';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div data-testid="counter" className={styles.counter}>
    <button onClick={onDecrement} type="button">-</button>
    {/* <p className={`${styles.container} ${value === 0 ? styles.containerQuantity0 : ''}`}> */}
    <p className={(value === 0 ? styles.containerQuantity0 : styles.container)}>
      {`${value} in basket`}
    </p>
    <button onClick={onIncrement} type="button">+</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
