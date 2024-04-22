import { useEffect, useState } from 'react';
// a react component to explain the usage of useEffect
function Main() {
  const [time, setTime] = useState(5);
  //   console.log('render phase');

  // side-effect : don't do this during the render phase

  //   setInterval(() => {
  //     setTime(time - 1);
  //   }, 1000);

  useEffect(() => {
    let intervalId = null;
    if (time > 0) {
      intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      console.log('intervalId', intervalId);
    }

    console.log('effect phase');

    return () => {
      console.log('begin cleanup phase');
      console.log('intervalId', intervalId);
      console.log('end cleanup phase');

      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <div>
      <h1>Timer</h1>
      {/* <input onChange={e => setTime(e.target.value)} /> */}

      <div>Timer : {time}</div>
    </div>
  );
}

export default Main;
