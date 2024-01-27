import classes from "./Main.module.css";
import { useState } from "react";

import Quote from "./Quote";

import { initialQoute, URL, getQuote } from "../getQuote";
import { correctAuthorName } from "../correctAuthorName";

export default function Main() {
  const [quote, setQuote] = useState(initialQoute);

  const onClickGenerate = () => {
    getQuote(URL).then((quote) => {
      setQuote(() => {
        return {
          text: quote.text,
          author: correctAuthorName(quote.author) || "Unknown",
        };
      });
    });
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
