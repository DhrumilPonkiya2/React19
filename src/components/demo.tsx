import { useEffect, useState } from "react";
import reactLogo from "@assets/images/react.svg";
import viteLogo from "/vite.svg";
import "@assets/styles/App.css";

const Demo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Delete this Component from ./src/components & Remove route configuration from ./route/app.route.tsx
      </p>
      <p className="read-the-docs">after that start your development</p>
    </>
  );
};

export default Demo;
