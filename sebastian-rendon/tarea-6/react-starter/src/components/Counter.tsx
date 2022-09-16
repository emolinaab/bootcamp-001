import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section>
      <h3>Counter</h3>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span style={{ padding: '0 1rem' }}>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </section>
  );
};

export default Counter;
