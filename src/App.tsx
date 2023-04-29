import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}
const Technologies = () => {
  return (
    <div>
      <ul>
        <li>Html</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <a href="#s">Home</a>
      <a href="#s">News</a>
      <a href="#s">Messages</a>
    </div>
  );
};

export default App;
