import getRandomQuote from "./getRandomQuote";
import cacheQuotes from "./cacheQuotes";
import getCachedQuotes from "./getCachedQuotes";

import getNowTampstamp from "./getNowTampstamp";
import oneHourBeforeTampstamp from "./oneHourBeforeTampstamp";

export const initialQoute = {
  text: "Cooking is one failure after another, and that’s how you finally learn.",
  author: "Julia Child",
};

export const URL = "https://type.fit/api/quotes";

export const getQuote = async (url) => {
  let response;
  let quotes;

  if (localStorage.getItem("dateOfRequest") < oneHourBeforeTampstamp()) {
    localStorage.clear();
  }

  if (!localStorage.getItem("quotes")) {
    response = await fetch(url);
    quotes = await response.json();

    localStorage.setItem("dateOfRequest", getNowTampstamp());

    cacheQuotes(quotes);
  } else {
    quotes = getCachedQuotes();
  }

  const quote = getRandomQuote(quotes);

  return quote;
};
