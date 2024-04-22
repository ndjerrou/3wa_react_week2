// A react component that uses useEffect with an array of dependencies empty
function UseEffectWithEmptyDeps() {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    console.log('I am an effect...');
  }, []);

  // count is never used here, but it is used in the effect
  // Exo : what happens if you remove the dependency array ?

  // Exo : what happens if you add another dependency ?

  // Exo : what happens if you change the dependency array ?

  // Exo : what happens if you remove the dependency array ?

  return <div>UseEffectWithEmptyDeps</div>;
}

export default UseEffectWithEmptyDeps;
