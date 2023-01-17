import './App.css';
import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
