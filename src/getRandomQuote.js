import getRandomNumber from "./getRandomNumber";

const showedQuotes = [];

export default function getRandomQuote(quotes) {
  if (showedQuotes.length == quotes.length) {
    showedQuotes.length = 0;
    getRandomQuote(quotes);
  }

  let quote = quotes[getRandomNumber(0, quotes.length - 1)];

  showedQuotes.forEach((showedQuote) => {
    while (showedQuote.text == quote.text) {
      console.log(`showedQuote.text == quote.text`, true);
      quote = quotes[getRandomNumber(0, quotes.length - 1)];
    }
  });

  showedQuotes.push(quote);

  console.log(showedQuotes);

  return quote;
}
