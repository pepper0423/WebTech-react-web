import "./App.css";
import Home from "./pages/home";
import Accessories from "./pages/accessories";
import { Routes, Route } from 'react-router-dom';
import Foot from "./components/foot";
import Iphone14Pro from './pages/Iphone14Pro';
<<<<<<< HEAD
import Iphone from './pages/iphone';

=======
import Iphone14 from './pages/Iphone14';
>>>>>>> 807cabbb3ecab31de4c1da7578f8aea226e139f2

const App =()=> {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="accessories" element={<Accessories/>}/>
        <Route path="iphone14pro" element={<Iphone14Pro/>}/>
<<<<<<< HEAD
        <Route path="iphone" element={<Iphone/>}/>

=======
        <Route path="iphone14" element={<Iphone14/>}/>
>>>>>>> 807cabbb3ecab31de4c1da7578f8aea226e139f2
      </Routes>
      <Foot/>
    </div>
  );
};

export default App;
