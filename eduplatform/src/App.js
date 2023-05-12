import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Signin/>} />
          <Route path='/register' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
