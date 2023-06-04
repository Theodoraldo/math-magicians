import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Data from './components/Data';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1 className="app-name">Math Magicians</h1>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quote' element={<Data />} />
        <Route path='calculator' element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
