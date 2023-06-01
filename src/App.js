import './App.css';
import Calculator from './components/Calculator';
import Data from './components/Data';

function App() {
  return (
    <>
      <h1 className="app-name">Math Magicians</h1>
      <div className="App">
        <Data />
        <Calculator />
      </div>
    </>
  );
}

export default App;
