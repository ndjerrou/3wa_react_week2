import axios from 'axios';
import { useEffect, useState } from 'react';

// A react component that uses useEffect with an array of dependencies empty
function UseEffectWithEmptyDeps() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  console.log('render phase');

  useEffect(() => {
    console.log('BEGIN effect');
    console.log('I am an effect...');

    document.title = 'Learning useEffect';

    fetchTodos();
    async function fetchTodos() {
      const { data } = await axios(
        'https://jsonplaceholder.typicode.com/todos/'
      );

      console.log('updating a piece of state...');
      setTodos(data);
      console.log('END effect');
    }
  }, []); // effect applied AFTER the mouting of the component (only !)

  // 1 - manipulate the counter and observe - ???

  // 2 - what happens if you remove the dependency array ?

  // 3 -  make an http request inside the effect and update accordingly the DOM

  return (
    <div>
      <h1>UEOnAllRender</h1>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>

      <h2>My todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectWithEmptyDeps;
