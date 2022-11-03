import "./App.css";
import Home from "./page/home";
import Accessories from "./page/accessories";
import Nav from './component/nav';
import { Routes, Route } from 'react-router-dom';
import Foot from "./component/foot";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/accessories" element={<Accessories/>}/>
      </Routes>
      <footer>
        <Foot/>
      </footer>
    </div>
  );
}

export default App;
