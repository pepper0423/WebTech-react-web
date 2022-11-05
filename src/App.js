import "./App.css";
import Home from "./pages/home";
import Accessories from "./pages/accessories";
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Foot from "./components/foot";
import Iphone14Pro from './pages/Iphone14Pro';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="accessories" element={<Accessories/>}/>
        <Route path="iphone14pro" element={<Iphone14Pro/>}/>
      </Routes>
      <footer>
        <Foot/>
      </footer>
    </div>
  );
}

export default App;
