import "./App.css";
import Home from "./page/home";
import Nav from './page/nav';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Home />
    </div>
  );
}

export default App;
