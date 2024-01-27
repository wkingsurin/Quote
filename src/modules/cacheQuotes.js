export default function cacheQuotes(quotes) {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}
