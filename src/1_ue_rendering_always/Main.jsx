import { useEffect, useState } from 'react';
import axios from 'axios';
// a react component to explain the usage of useEffect
function UEOnAllRender() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // launches AFTER every render phase (like componentDidMount) and BEFORE the next render phase (like componentDidUpdate)

  // what is a render phase

  console.log('render phase');

  useEffect(() => {
    console.log('effect phase'); // effect applied AFTER every render phase
  });

  // 1 - provoc multiple rerender. What can you notice ? OK

  // 2 -  launch an http request during the render phase
  axios('https://jsonplaceholder.typicode.com/todos/').then(({ data }) =>
    setTodos(data)
  );

  return (
    <div>
      <h1>UEOnAllRender</h1>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
}

export default UEOnAllRender;
