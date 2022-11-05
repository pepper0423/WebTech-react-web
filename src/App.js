import "./App.css";
import Home from "./pages/home";
import Accessories from "./pages/accessories";
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
        <Route path="/" element={<Home />}/>
        <Route path="accessories" element={<Accessories/>}/>
      </Routes>
      <footer>
        <Foot/>
      </footer>
    </div>
  );
}

export default App;
