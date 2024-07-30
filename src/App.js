import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <h1>Fetch Data through API & Dispay</h1>
      <p>
        This App uses the{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://swapi.dev">
          Star Wars API
        </a>{" "}
        to display the list of characters whose name includes the letter "J"
        below the horizontal line on this page, with the text the same color of
        their eyes.
      </p>
      <h3>Helpful Hint</h3>
      <p>
        The API{" "}
        <a
          href="https://swapi.dev/documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation page
        </a>{" "}
        is the reference to needed endpoints and searching implementation.
      </p>
      <hr />
      <Characters />
    </div>
  );
}

export default App;
