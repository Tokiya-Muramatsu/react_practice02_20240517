import React, { useState } from 'react'

function Count() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  console.log(count);


  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}

export default Count