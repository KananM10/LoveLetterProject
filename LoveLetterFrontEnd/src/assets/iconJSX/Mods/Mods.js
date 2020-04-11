import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Mods extends Component {
  render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 139 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="50.5"
          width="85"
          height="32"
          stroke="#060E4F"
          strokeWidth="3"
        />
        <rect x="65" width="45" height="44" fill="#060E4F" />
        <circle cx="117" cy="70" r="22" fill="#060E4F" />
        <path d="M73.5 135L47.0862 90L99.9138 90L73.5 135Z" fill="#060E4F" />
      </svg>
    );
  }
}

Mods.propTypes = {
  size: PropTypes.number
};

Mods.defaultProps = {
  size: 30
};
