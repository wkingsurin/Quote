import "./App.css";

const getData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

export default function App() {
  getData("https://type.fit/api/quotes").then((result) => console.log(result));

  return <></>;
}
