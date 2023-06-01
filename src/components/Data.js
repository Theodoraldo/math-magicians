import React, { useState, useEffect } from 'react';
import './Data.css';

export default function Data() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const retriveData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=freedom', {
          headers: { 'X-Api-Key': 'RL2oEd6EZhPokMoxSzfubA==0JWWcCJSJDGZR7gT' },
        });
        const rawData = await response.json();
        setQuote(rawData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError('Something happened while fetching data');
      }
    };
    retriveData();
  }, []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {quote && quote.map((quote) => (
        <div className="quote-container" key={quote.author}>
          <h2 className="author">{quote.author}</h2>
          <p className="quote">{quote.quote}</p>
        </div>
      ))}
      {error !== '' && <h2>{error}</h2>}
    </>
  );
}
