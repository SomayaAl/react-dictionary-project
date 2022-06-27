import "./App.css";
import Dictionary from "./Dictionary.js";
import banner from "./dictionary-banner.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-banner img-fluid" alt="banner" />
      </header>
      <Dictionary />
      <footer>
        This project was coded by Somaya Albadawi and is{" "}
        <a
          href="https://github.com/SomayaAl/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced.
        </a>
      </footer>
    </div>
  );
}

export default App;
