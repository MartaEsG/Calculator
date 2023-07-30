import React, { useState } from 'react';
import ButtonNumbers from './ButtonNumbers';

export default function Result() {

  const [count, Result] = useState(0);
    
  return (
    <div>
      <button onClick={() => Result(count + ButtonNumbers())}>
        =
      </button>
    </div>
  );
}
