import "./App.css";
import Home from "./pages/home";
import Accessories from "./pages/accessories";
import { Routes, Route } from 'react-router-dom';
import Foot from "./components/foot";
import Iphone14Pro from './pages/Iphone14Pro';
import Iphone14 from './pages/Iphone14';
import Iphone from './pages/iphone';
import Ipad from './pages/Ipad';

const App =()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="accessories" element={<Accessories/>}/>
        <Route path="iphone14pro" element={<Iphone14Pro/>}/>
        <Route path="iphone14" element={<Iphone14/>}/>
        <Route path="iphone" element={<Iphone/>}/>
        <Route path="ipad" element={<Ipad/>}/>
      </Routes>
      <Foot/>
    </div>
  );
};

export default App;
