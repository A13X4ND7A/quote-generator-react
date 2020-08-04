import React, {useState, useEffect} from "react";
import "./Quote.css"
import axios from 'axios';

const Quote = () => {
const [authorResult, setAuthorResult] = useState('');
const [quoteResult, setQuoteResult] = useState('');
const [result, setResult] = useState('');
const [query, setQuery] = useState('');

    const handleOnClickTwitter = () => {
        const quote = quoteResult;
        const author = authorResult;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
        window.open(twitterUrl, '_blank');
    };

    const handleOnClickNewQuote = () => {
        
    };


useEffect(() => {
        const getQuote = async () => {
          const {data} = await axios.get('https://shrouded-sea-82269.herokuapp.com/https://api.forismatic.com/api/1.0/', {
                params: {
                    method: 'getQuote',
                    format: 'json',
                    lang: 'en'
                }
            });
            setQuoteResult(data.quoteText);
            setAuthorResult(data.quoteAuthor);
            setResult(data.quoteText);
        };
        getQuote();
}, [query]);


    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                setQuery({ query});
            }} >
        <div className="quote-container" id="quote-container">

            <div className="quote-text">
                <i className="fas fa-quote-left"></i>
                <span id="quote">{quoteResult}</span>
            </div>

            <div className="quote-author">
                <span id="author">{authorResult}</span>
            </div>

            { <div className="button-container">
                <button 
                className="twitter-button" 
                id="twitter" 
                title="Tweet this!!"
                onClick={handleOnClickTwitter}
                >
                    <i className="fab fa-twitter"></i>
                </button>
                <button 
                id="new-quote"
                    onClick={handleOnClickNewQuote}
                >
                New Quote
                </button>
            </div> }
        </div>
    </form>
    );

};

export default Quote;

