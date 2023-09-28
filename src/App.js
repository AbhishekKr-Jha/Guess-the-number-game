
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Area from './components/Area';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route    path="/Area" element={<Area />}/>
    <Route  path="/About Us" element={<About />}/>
    <Route   path="/Home" element={<Home />}/>
    </Routes>
    </BrowserRouter>




 </>
  );
}

export default App;
