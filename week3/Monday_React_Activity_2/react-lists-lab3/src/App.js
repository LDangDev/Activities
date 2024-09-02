// src/App.js
import TourList from "./TourList";
import { tours } from "./toursData";
import "./App.css";

function App() {
  return (
    <main>
      <TourList tours={tours} />
    </main>
  );
}

export default App;