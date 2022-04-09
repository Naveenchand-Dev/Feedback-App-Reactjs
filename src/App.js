import React from "react";

// JSX type

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <h2>App component JSX</h2>
    </div>
  );
}

// Pure Javascript type

// function App() {
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", {}, "Hello React"),
//     React.createElement("h2", {}, "App component Pure JS")
//   );
// }

export default App;
