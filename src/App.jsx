import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculadora from "./Components/Calculadora";

function App() {

  return (
    <>
      <h1>Projeto Calculadora</h1>
      <Calculadora />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
