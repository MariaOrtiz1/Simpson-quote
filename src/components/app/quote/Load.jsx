import React from 'react';
import PropTypes from 'prop-types';

// This is a function called Load that is triggered when clicked
const Load = ({ onClick }) => (
  <button onClick={onClick}
    aria-label="Fetching a Simpson character quote!">
            Load Quote
  </button>
);

Load.propTypes = { 
  onClick: PropTypes.func.isRequired,
};

export default Load;

