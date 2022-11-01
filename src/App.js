import "./App.css";
import Home from "./page/home";
import Nav from './page/nav';
import { Routes, Route } from 'react-router-dom';
import Foot from "./page/foot";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" exact>
          <Home />
        </Route>
      </Routes>
      <footer>
        <Foot/>
      </footer>
    </div>
  );
}

export default App;
