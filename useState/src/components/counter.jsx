import React, { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default counter;
