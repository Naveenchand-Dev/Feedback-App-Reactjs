import React from "react";

// Children is a reserved keyword, which is what we write (JSX) inside Components

function Card({ children, reverse }) {
  // function Card(props) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  return (
    <div
      className="card"
      //   style={{
      //     backgroundColor: reverse ? "rgba(0, 0, 0, 0.3)" : "white",
      //     color: reverse ? "white" : "black",
      //   }}
    >
      {/* {props.children} */}
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
