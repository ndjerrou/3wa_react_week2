// Two components to illutrate the usage of useEffect with dependencies

import { useEffect, useState } from 'react';

/**
 * This is a React component that uses the useEffect hook with a dependency array.
 * The component will only trigger the effect when the value of the state variable 'count' changes.
 * This is useful to avoid unnecessary computations and improve performance.
 */
function UseEffectWithSomeDeps() {
  const [category, setCategory] = useState('');
  console.log('Render phase');

  useEffect(() => {
    console.log('Effect phase');
  }, [category]);

  return (
    <div>
      <div>
        <h2>My products</h2>
        <select onChange={e => setCategory(e.target.value)}>
          <option>------------</option>
          <option value='Tech'>Tech</option>
          <option value='Mobiles'>Mobiles</option>
          <option value='Ameublement'>Ameublement</option>
          <option value='Tablettes'>Tablettes</option>
        </select>
      </div>
      <ShowCategory category={category} />
    </div>
  );
}

function ShowCategory({ category }) {
  return <div>{category && <h1>Product of {category}</h1>}</div>;
}

export default UseEffectWithSomeDeps;
