import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
