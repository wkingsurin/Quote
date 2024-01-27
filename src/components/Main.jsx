import classes from "./Main.module.css";
import { useState } from "react";

import Quote from "./Quote";
import getRandomQuote from "../getRandomQuote";

const URL = "https://type.fit/api/quotes";

const getQuote = async (url) => {
  let response;
  let quotes;

  if (!localStorage.getItem("quotes")) {
    response = await fetch(url);
    quotes = await response.json();

    localStorage.setItem("quotes", JSON.stringify(quotes));
  } else {
    quotes = JSON.parse(localStorage.getItem("quotes"));
    // console.log(quotes);
  }

  const quote = getRandomQuote(quotes);
  //   console.log(quote);
  // correct author

  return quote;
};
const initialQoute = {
  text: "Cooking is one failure after another, and that’s how you finally learn.",
  author: "Julia Child",
};

export default function Main() {
  const [quote, setQuote] = useState(initialQoute);

  const onClickGenerate = () => {
    getQuote(URL).then((quote) => {
      setQuote(() => {
        return { text: quote.text, author: quote.author };
      });
    });

    // console.log(quote);
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Quote classes={classes} quote={quote.text} author={quote.author} />
          <button className={classes.generateButton} onClick={onClickGenerate}>
            Generate quote
          </button>
        </div>
      </div>
    </main>
  );
}
