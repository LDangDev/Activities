import ThemeProvider from "./Context/ThemeProvider";
import Form from "./Components/Form";
import Button from "./Components/Button";


function App() {
  return (
    <ThemeProvider>
      <Form />
      <Button>Toggle Theme</Button>
    </ThemeProvider>
  );
}

export default App;
