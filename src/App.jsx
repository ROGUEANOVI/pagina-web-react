import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Esta es una pagina web simple creada con React y Vite para documentar
          el proceso de despligarla en GitHub Pages
        </p>
      </div>
      <p className="read-the-docs">
        Soy{" "}
        <a href="https://www.linkedin.com/in/ovidio-romero/" target="_blank">
          Ovidio Romero
        </a>{" "}
        estudiante de la especializacion en Desarrollo de Software de la
        Universidad Uniminuto
      </p>
    </>
  );
}

export default App;
