import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route path='/home' exact component={Home}/>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
