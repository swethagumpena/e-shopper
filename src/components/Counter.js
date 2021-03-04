import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

function Counter(props) {
  const { value, onIncrement, onDecrement } = props;
  return (
    <div className="counter">
      <button onClick={onDecrement} type="button">-</button>
      <p>{value}</p>
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
