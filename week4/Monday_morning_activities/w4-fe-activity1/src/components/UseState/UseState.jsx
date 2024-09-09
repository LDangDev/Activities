import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  // console.log(useState('light'))

  const [theme, setTheme] = useState("light");
  const [num, setNum] = useState(0);

  const handleSetDarkTheme = () => {
    setTheme("dark");
  };

  const handleSetLightTheme = () => {
    setTheme("light");
  };

  const handleIncrement = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const handleDecrement = () => {
    setNum((prevNum) => prevNum - 1);
  };

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={handleSetDarkTheme}>Dark</button>
      <button onClick={handleSetLightTheme}>Light</button>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <h2>DISPLAY COUNT HERE: {num}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default UseState;
