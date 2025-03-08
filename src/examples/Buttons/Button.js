import React from "react";
import "./Buttoncss.css";
import PropTypes from "prop-types";
export default function Button({ text }) {
  return (
    <div>
      <button className="shiny-cta">
        <span>{text}</span>
      </button>
    </div>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
