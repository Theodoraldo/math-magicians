import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
