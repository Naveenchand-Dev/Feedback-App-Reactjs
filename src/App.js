import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* Passing multiple Props */}
      {/* <Header bgColor="red" textColor="blue" /> */}
      <Header />
      <div className="container">
        <h1>My Feedback App</h1>
      </div>
    </>
  );
}

export default App;
