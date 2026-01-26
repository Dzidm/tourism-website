import { BrowserRouter, Route, RouterContextProvider, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Contact from './pages/Contact';
import CV from './pages/Cv';
import RootLayout from './layout/RootLayout';
import Teaching from './pages/Teaching';
import Journey from './pages/Journey';
import Poem from './pages/Poem';

function App() {

  return (
          <BrowserRouter>
          <Routes>
            <Route element={<RootLayout/>}/>
            <Route path="/" element={<Landing/>}/>
            <Route path="/listings" element={<Listings/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cv" element={<CV/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/teaching" element={<Teaching/>}/>
            <Route path="/journey" element={<Journey/>}/>
            <Route path="/poem" element={<Poem/>}/>
          </Routes>
                         
          </BrowserRouter>
  );
}

export default App;
