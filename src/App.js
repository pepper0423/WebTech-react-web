import "./App.css";
import Home from "./page/home";
import Nav from './page/nav';
import { Routes, Route } from 'react-router-dom';

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
    </div>
  );
}

export default App;
