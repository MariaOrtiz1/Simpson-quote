export const fetchQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const [quote] = await res.json();

  return {
    name: quote.character,
    image: quote.image,
    quotes: quote.quote,
  };
};
