import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import NavigateBar from "./components/navigate-bar/NavigateBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigateBar />
    </>
  );
}

export default App;
