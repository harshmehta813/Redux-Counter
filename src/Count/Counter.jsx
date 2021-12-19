import React from "react";
import { incrementCounter } from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

function Counter() {
  const { dispatch } = React.useContext(AppContext)[1];

  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = incrementCounter(-1);
    dispatch(action);
  };
  return (
    <div className="counter">
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
