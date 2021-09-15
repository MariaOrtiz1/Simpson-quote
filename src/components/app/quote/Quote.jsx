import React from 'react';
import PropTypes from 'prop-types';

// This is the display, how it is going to look like after we load it 
const Quote = ({ name, image, quote }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      {name}: {quote}
    </figcaption>
  </figure>
);

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Quote;
