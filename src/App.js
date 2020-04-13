import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Redirect exact from="/" to="/home" />
          <Navbar />
          <Route path='/home' exact component={Home}/>
          <Route path='/aboutUs' exact component={AboutUs}/>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
