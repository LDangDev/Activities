// App.js
import SingleCounter from "./SingleCounter"; // Import the SingleCounter component
import useField from "./useField";
import useLocalStorage from "./useLocalStorage";
import "./App.css"; // Import styles for the app
import { useState } from "react";

const App = () => {
  const nameInput = useField("text");
  const bornInput = useField("date");
  const heightInput = useField("number");

  const [name, setName] = useLocalStorage("name", "");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <>
      <div className="app-container">
        <SingleCounter />
        <SingleCounter />
        <SingleCounter />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input {...nameInput} />
          </div>
          <br />
          <div>
            Birthdate: <input {...bornInput} />
          </div>
          <br />
          <div>
            Height: <input {...heightInput} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          {nameInput.value} {bornInput.value} {heightInput.value}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Your name is stored in localStorage: {name}</p>
      </div>
    </>
  );
};

export default App;
