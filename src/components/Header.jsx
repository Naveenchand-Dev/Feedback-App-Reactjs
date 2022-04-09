import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

// To pass defaulr props to a component, we can use the defaultProps property.
Header.defaultProps = {
  text: "Default props",
};

// To pass prop types to a component, we can use the propTypes property.
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
