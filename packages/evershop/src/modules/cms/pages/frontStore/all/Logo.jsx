import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

export default function Logo({
  themeConfig: {
    logo: { src, alt = 'Evershop', width = '150px', height = '150px' } // Increased size
  }
}) {
  return (
    <div className="logo md:ml-0 flex justify-center items-center">
      {src && (
        <a href="/" className="logo-icon">
          <img src={src} alt={alt} width={width} height={height} />
        </a>
      )}
      {!src && (
        <a href="/" className="logo-icon">
          <svg
            width="150" // Increased size
            height="150" // Increased size
            viewBox="0 0 128 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64 0C28.8 0 0 28.8 0 64C0 99.2 28.8 128 64 128C99.2 128 128 99.2 128 64C128 28.8 99.2 0 64 0ZM64 120C34.8 120 8 93.2 8 64C8 34.8 34.8 8 64 8C93.2 8 120 34.8 120 64C120 93.2 93.2 120 64 120Z"
              fill="#FFFFFF" // Changed to white
            />
            <path
              d="M64 24C53.6 24 44.8 33.6 44.8 44.8C44.8 55.2 53.6 64 64 64C74.4 64 83.2 55.2 83.2 44.8C83.2 33.6 74.4 24 64 24ZM64 56C58.4 56 53.6 51.2 53.6 44.8C53.6 38.4 58.4 33.6 64 33.6C69.6 33.6 74.4 38.4 74.4 44.8C74.4 51.2 69.6 56 64 56Z"
              fill="#FFFFFF" // Changed to white
            />
            <path
              d="M64 72C50.4 72 40 82.4 40 96C40 109.6 50.4 120 64 120C77.6 120 88 109.6 88 96C88 82.4 77.6 72 64 72ZM64 112C54.4 112 48 105.6 48 96C48 86.4 54.4 80 64 80C73.6 80 80 86.4 80 96C80 105.6 73.6 112 64 112Z"
              fill="#FFFFFF" // Changed to white
            />
            <path
              d="M64 80C60 80 56.8 83.2 56.8 87.2C56.8 91.2 60 94.4 64 94.4C68 94.4 72.8 91.2 72.8 87.2C72.8 83.2 68 80 64 80Z"
              fill="#FFFFFF" // Changed to white
            />
          </svg>
        </a>
      )}
    </div>
  );
}

Logo.propTypes = {
  themeConfig: PropTypes.shape({
    logo: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string
    })
  })
};

Logo.defaultProps = {
  themeConfig: {
    logo: {
      src: '',
      alt: 'Evershop',
      width: '150', // Updated default width
      height: '150' // Updated default height
    }
  }
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      logo {
        src
        alt
        width
        height
      }
    }
  }
`;
