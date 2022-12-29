import './App.css';
import { Routes, Route } from 'react-router-dom';
import ChooseOption from './components/mainPage';
// import Blocks from './components/blocks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ChooseOption />} />
      </Routes>
    </div>
  );
}

export default App;
