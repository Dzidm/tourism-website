import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Landing from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Blog from './pages/Blog';

function App() {

  return (
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/listings" element={<Listings/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
                         
          </BrowserRouter>
  );
}

export default App;
