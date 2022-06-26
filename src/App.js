import "./App.css";
import Dictionary from "./Dictionary.js";
import banner from "./dictionary-banner.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"><img src={banner} className="App-banner img-fluid" alt="banner"/></header>
      <Dictionary />
    </div>
  );
}

export default App;
