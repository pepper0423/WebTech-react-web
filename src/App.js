import "./App.css";
import Home from "./pages/home";
import Accessories from "./pages/accessories";
import { Routes, Route } from 'react-router-dom';
import Foot from "./components/foot";
import Iphone14Pro from './pages/Iphone14Pro';
import Iphone14 from './pages/Iphone14';
import Iphone from './pages/iphone';
import Ipad from "./pages/Ipad";
import Ipadgen10 from "./pages/ipadgen10";
import Bag from "./pages/Bag";
import Help from './pages/Help';
import AddForm from "./pages/Bag/AddForm";
import ScrollToTop from "./components/ScrollToTop";
import { StoreProvider } from "./hooks/store";

function App() {
  return (
    <StoreProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="iphone14pro" element={<Iphone14Pro />} />
        <Route path="iphone14" element={<Iphone14 />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="ipadgen10" element={<Ipadgen10 />} />
        <Route path="bag" element={<Bag />} />
        <Route path="help" element={<Help />} />
        <Route path="addForm" element={<AddForm />} />
      </Routes>
      <Foot />
    </StoreProvider>
  );
}

export default App;
