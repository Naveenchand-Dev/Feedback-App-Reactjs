import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

// To pass defaulr props to a component, we can use the defaultProps property.
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.3)",
  textColor: "#ff6a95",
};

// To pass prop types to a component, we can use the propTypes property.
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
