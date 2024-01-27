export default function getCachedQuotes() {
  return JSON.parse(localStorage.getItem("quotes"));
}
