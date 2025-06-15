import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(7);

  const addValue = () => {
    if (counter < 21) {
      setCounter(counter + 1);
      console.log('Touched me:', counter + 1);
    }
  };

  const dontTouch = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Don't touch me:", counter - 1);
    }
  };

  return (
    <>
      <h1> Mamba is back in the game💡!!</h1>
      <h2>Counter Touch me : {counter}</h2>
      <button onClick={addValue}>Add me 🫦</button>
      <br />
      <button onClick={dontTouch}>Don't Touch here 🧨</button>
    </>
  );
}

export default App;
