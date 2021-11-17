/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
//   const state = useSelector((state) => state);
  const state2 = useSelector((state) => state[0].countries);

  const btn = () => <button type="button" onClick={() => console.log(state2)}>click</button>;

  let temp = <p>load</p>;

  if (state2) {
    temp = state2.map((item) => <p key={item}>{item}</p>);
  }

  return (
    <div>
      hello
      <p>--------------</p>
      {btn()}
      <p>--------------</p>
      {temp}
      {/* {state2.map((item) => <p key={item}>{item}</p>)} */}
    </div>
  );
}

export default App;
