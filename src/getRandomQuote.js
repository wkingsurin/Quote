import getRandomNumber from "./getRandomNumber";

const getIndexOfQoute = (quotes, quote) => {
  return quotes.indexOf(quote);
};

const indexOfShowedQuotes = [];

export default function getRandomQuote(quotes) {
  if (indexOfShowedQuotes.length == quotes.length) {
    indexOfShowedQuotes.length = 0;
  }

  let randomQuote = quotes[getRandomNumber(0, quotes.length - 1)];

  while (indexOfShowedQuotes.includes(getIndexOfQoute(quotes, randomQuote))) {
    randomQuote = quotes[getRandomNumber(0, quotes.length - 1)];
  }

  indexOfShowedQuotes.push(getIndexOfQoute(quotes, randomQuote));

  return randomQuote;
}
