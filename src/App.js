import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route path='/home' exact component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
