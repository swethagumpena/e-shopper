import React, { useState } from 'react';

const CounterInc = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleChange = () => {
    setCount(count + 1);
    setName('I\'m increasing');
  };
  return (
    <div>
      <p>{count}</p>
      <p>{name}</p>
      <button type="button" onClick={() => handleChange()}>Click Me</button>
    </div>
  );
};

export default CounterInc;
