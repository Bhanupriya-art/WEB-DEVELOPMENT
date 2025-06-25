import React from "react";
import Header from "./components/Header";
import './App.css';
function App() {
  const myName = "Bhanu Priya";
  const myTasks = ["Cook Food", "Read Book", "Write Code"];
  const greet = () => {
    alert("Hello from App component!");
  };
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Header name={myName} todos={myTasks} onGreet={greet} />
    </div>
  );
}
export default App;
