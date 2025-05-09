import React from 'react';
import PropTypes from 'prop-types';

function ProductNoThumbnail({ width, height }) {
  return (
    <svg
      width={width || 100}
      height={height || 100}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="20" width="160" height="160" fill="#BBBBBB" />
      <path
        d="M40 40L160 160"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M160 40L40 160"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

ProductNoThumbnail.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

ProductNoThumbnail.defaultProps = {
  width: 100,
  height: 100
};

export default ProductNoThumbnail;
