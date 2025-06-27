import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}

function App() {
  const [title, setTitle] = useState("Loading...");
  const [titles, setTitles] = useState("defailt title");

  useEffect(() => {
    fetchData().then((data) => {
      setTitle(data.title || title);
    });
  }, []);

  function updateTitle(inputTitle) {
    setTitles(inputTitle);
  }

  return (
    <div>
      <h1>App Works Here! {titles}</h1>
      <button onClick={() => updateTitle(title)}> Click Here!</button>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
