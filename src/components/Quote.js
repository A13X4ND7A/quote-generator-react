import React, {useState, useEffect} from "react";
import "./Quote.css"
import axios from 'axios';

const Quote = () => {
const [authorResult, setAuthorResult] = useState('');
const [quoteResult, setQuoteResult] = useState('');

    useEffect(() => {
        const search = async () => {
          const {data} = await axios.get('https://shrouded-sea-82269.herokuapp.com/https://api.forismatic.com/api/1.0/', {
                params: {
                    method: 'getQuote',
                    format: 'json',
                    lang: 'en'
                }
            });
            setQuoteResult(data.quoteText);
            setAuthorResult(data.quoteAuthor);
        };
        search();
    });
    return (
        <div className="quote-container" id="quote-container">

            <div className="quote-text">
                <i className="fas fa-quote-left"></i>
                <span id="quote">{quoteResult}</span>
            </div>

            <div className="quote-author">
                <span id="author">{authorResult}</span>
            </div>

            { <div className="button-container">
                <button className="twitter-button" id="twitter" title="Tweet this!!">
                    <i className="fab fa-twitter"></i>
                </button>
                <button 
                id="new-quote"
                onClick={getNewQuote}
                >
                New Quote
                </button>
            </div> }
        </div>
    );

};

export default Quote;

