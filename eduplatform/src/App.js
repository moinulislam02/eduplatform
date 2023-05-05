import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
