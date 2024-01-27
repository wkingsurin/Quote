import getRandomQuote from "./getRandomQuote";
import cacheQuotes from "./cacheQuotes";
import getCachedQuotes from "./getCachedQuotes";

import getNowTampstamp from "./getNowTampstamp";
import clearStorageAfterOneHour from "./clearStorageAfterOneHour";

export const initialQoute = {
  text: "Cooking is one failure after another, and that’s how you finally learn.",
  author: "Julia Child",
};

export const URL = "https://type.fit/api/quotes";

export const getQuote = async (url) => {
  let response;
  let quotes;

  clearStorageAfterOneHour();

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
