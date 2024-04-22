// Two components to illutrate the usage of useEffect with dependencies

/**
 * This is a React component that uses the useEffect hook with a dependency array.
 * The component will only trigger the effect when the value of the state variable 'count' changes.
 * This is useful to avoid unnecessary computations and improve performance.
 */
function UseEffectWithCounter(props) {
  /**
   * Declare and initialize a state variable 'count' to keep track of the number of times
   * the button has been clicked.
   * @type {number}
   */
  const [count, setCount] = React.useState(0);
  /**
   * The useEffect hook will run the specified function when the component mounts (after it renders for the first time)
   * and then again every time the values in the dependency array change.
   * In this case, the dependency array contains only one value: the state variable 'count'.
   * So, the effect will run every time the value of 'count' changes.
   */
  useEffect(() => {
    /**
     * The console.log statement will run every time the value of 'count' changes.
     * It will log a message with the current value of 'count'.
     */
    console.log(`UseEffectWithCounter: ${count}`);
  }, [count]);
  /**
   * This component will render a div element with some text.
   * The text will include the current value of 'count'.
   */

  // write some jsx so the count state changes  , with a onclick event that increments the count state
}
