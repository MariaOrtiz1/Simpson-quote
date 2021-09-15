import React from 'react';
import PropTypes from 'prop-types';

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
