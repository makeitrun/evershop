import React from 'react';
import PropTypes from 'prop-types';

function NoThumbnail({ width, height }) {
  return (
    <svg
      width={width || 100}
      height={height || 100}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="80" fill="#BBBBBB" />
      <path
        d="M50 50L150 150"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M150 50L50 150"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

NoThumbnail.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

NoThumbnail.defaultProps = {
  width: 100,
  height: 100
};

export default NoThumbnail;
