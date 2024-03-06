import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="app-con">
      <div className='res-con'>
        <Header/>
      </div>
      <div className='app-body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route  element={<NotFound />} />
          </Routes>
      </div>
    </div>
  );
}

export default App
