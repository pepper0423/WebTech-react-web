import "./App.css";
import Home from "./pages/home";
import Accessories from "./pages/accessories";
import { Routes, Route } from 'react-router-dom';
import Foot from "./components/foot";
import Iphone14Pro from './pages/Iphone14Pro';

const App =()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="accessories" element={<Accessories/>}/>
        <Route path="iphone14pro" element={<Iphone14Pro/>}/>
      </Routes>
      <Foot/>
    </div>
  );
};

export default App;
