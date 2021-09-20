import React, { useState } from 'react';
import Load from '../components/app/quote/Load';
import Quote from '../components/app/quote/Quote';
import { fetchQuote } from '../services/SimpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line max-len
  // On click, this fuction will change the Loading state to true, allowing it to render the loading text. Afterwards it will fetch a quote, and render it as stated within our Quote template, then set the Loading state to false that that it will go away.
  const handleClick = async () => {
    setLoading(true);
    const quote = await fetchQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <Load onClick={handleClick} />
      {/* If loading is true, then load what is after the '?'  */}
      {loading ? (
        <h1>Loading now!</h1>
      ) : (
        quote && (
          <Quote 
            name={quote.name} 
            image={quote.image} 
            quote={quote.quote} />
        )
      )}
    </>
  );
};


export default SimpsonsQuote;
