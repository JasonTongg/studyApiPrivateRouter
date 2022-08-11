import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Register from './components/register'
import About from './components/about'
import NotFound from './components/notFount'
import Private from './private-router'
import Login from './components/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Private></Private>}>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
        </Route>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
