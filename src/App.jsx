import "./App.css";
import "normalize.css";

export default function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="container">
          <div className="content">
            <div className="quote-box">
              <p className="quote">
                Genius is one percent inspiration and ninety-nine percent
                perspiration.
              </p>
              <span className="author">Thomas Edison</span>
            </div>
            <button className="generate-button">Generate qoute</button>
          </div>
        </div>
      </main>
    </div>
  );
}
