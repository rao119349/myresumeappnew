import React, { useState, useEffect } from "react";
 
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}
 
function App() {
  const [title, setTitle] = useState("Loading...");
 
  useEffect(() => {
    fetchData().then((data) => {
      setTitle(data.title || "No Title");
    });
  }, []);
  return (
    <div>
      <h1>App Works Here! {title}</h1>
    </div>
  );
}
 
export default App;