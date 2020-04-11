import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Logo extends Component {
  render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 118 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M95.8146 0H22.1854C9.93244 0 0 9.93292 0 22.1854V70.4771C0 82.7298 9.93291 92.6625 22.1854 92.6625H32.7522C33.2549 92.6625 33.6624 93.0699 33.6624 93.5727V117.394C33.6624 120.21 37.1075 121.576 39.0368 119.524L64.0305 92.9492C64.2025 92.7661 64.4426 92.6625 64.6938 92.6625H95.8146C108.067 92.6625 118 82.7296 118 70.4771V22.1854C118 9.93292 108.067 0 95.8146 0Z"
          fill="#EFFF3C"
        />
        <path
          d="M42.996 84.3828C42.996 83.8535 42.6015 83.4244 42.1148 83.4244H31.8851C20.0233 83.4244 10.4074 72.9647 10.4074 60.0621V9.20843C10.4074 7.02512 10.6838 4.91219 11.1985 2.90753C4.50901 6.72855 0 13.9302 0 22.1854V70.4771C0 82.7296 9.93291 92.6625 22.1854 92.6625H32.7522C33.2549 92.6625 33.6624 93.0701 33.6624 93.5727V117.394C33.6624 120.21 37.1075 121.576 39.0368 119.524L42.9958 115.314V84.3828H42.996Z"
          fill="#CBD932"
        />
        <path
          d="M83.9279 28.7918C78.2952 23.1591 69.1628 23.1591 63.5299 28.7918L60.3481 31.9735C59.5895 32.7321 58.3593 32.7321 57.6007 31.9735L54.4697 28.8426C48.8371 23.2099 39.7046 23.2099 34.0717 28.8426C28.4391 34.4753 28.4391 43.6077 34.0717 49.2406L57.6025 72.7714C58.3611 73.53 59.5914 73.53 60.35 72.7714L83.9277 49.1898C89.5606 43.5569 89.5606 34.4247 83.9279 28.7918Z"
          fill="white"
        />
        <path
          d="M41.6168 49.2407C35.9841 43.608 35.9841 34.4756 41.6168 28.8426C43.4644 26.995 45.6896 25.7574 48.0431 25.1221C43.2213 23.8201 37.8567 25.0576 34.0719 28.8426C28.4392 34.4753 28.4392 43.6077 34.0719 49.2407L57.6027 72.7715C58.3613 73.5301 59.5916 73.5301 60.3502 72.7715L62.7486 70.3725L41.6168 49.2407Z"
          fill="#DCE6EB"
        />
      </svg>
    );
  }
}

Logo.propTypes = {
  size: PropTypes.number
};

Logo.defaultProps = {
  size: 30
};
