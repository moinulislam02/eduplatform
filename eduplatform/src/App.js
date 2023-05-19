import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { Navbar } from './components/Navbar';
import { useSelector } from 'react-redux';
import Feeds from './pages/feeds';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Profile from './pages/profile';

function App() {
  const currentUser = useSelector((state)=>state.userInfo.currentUser)

  return (
    <div className="App">
      <BrowserRouter>
        {currentUser === null? (
          <>
            <Routes>
              <Route path='/' element={<Signin/>} />
              <Route path='/login' element={<Signin/>} />
              <Route path='/register' element={<Signup/>} />
            </Routes>
          </>
        ):(
          <>
            <Navbar/>
            <div className="content-area">
              <div className="container">
                <Routes>
                  <Route path='/' element={<Feeds/>} />
                  <Route path='/profile' element={<Profile/>} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
