import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Lock extends Component {
  render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 18 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 24H2.25C1.01001 24 0 22.9911 0 21.75V11.25C0 10.0089 1.01001 9 2.25 9H15.75C16.99 9 18 10.0089 18 11.25V21.75C18 22.9911 16.99 24 15.75 24ZM2.25 10.5C1.83691 10.5 1.5 10.836 1.5 11.25V21.75C1.5 22.164 1.83691 22.5 2.25 22.5H15.75C16.1631 22.5 16.5 22.164 16.5 21.75V11.25C16.5 10.836 16.1631 10.5 15.75 10.5H2.25Z"
          fill="#D0D0D0"
        />
        <path
          d="M14.25 10.5C13.836 10.5 13.5 10.164 13.5 9.75V6C13.5 3.51892 11.4811 1.5 9 1.5C6.51892 1.5 4.5 3.51892 4.5 6V9.75C4.5 10.164 4.164 10.5 3.75 10.5C3.336 10.5 3 10.164 3 9.75V6C3 2.69092 5.69092 0 9 0C12.3091 0 15 2.69092 15 6V9.75C15 10.164 14.664 10.5 14.25 10.5Z"
          fill="#D0D0D0"
        />
      </svg>
    );
  }
}

Lock.propTypes = {
  size: PropTypes.number
};

Lock.defaultProps = {
  size: 30
};
