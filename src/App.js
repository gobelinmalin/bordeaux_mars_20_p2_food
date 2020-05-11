import React from 'react';
import './App.css';
import ContactUs from './components/Contact-Us /ContactUs'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import InMyFridge from './components/InMyFridge/InMyFridge';
import TestComplexe from './components/TestComplex/TestComplexe'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className="App">
              <Navbar />
                <Route path='/' exact component={Home}/>
                <Route path='/testComplexe' exact component={TestComplexe}/>
                <Route path='/aboutUs' exact component={AboutUs}/>
                <Route path='/inMyFridge' exact component={InMyFridge}/>
                <Route path='/contactUs' exact component={ContactUs}/>
              <Footer />
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
