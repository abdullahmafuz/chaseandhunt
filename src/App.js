import React ,{useEffect} from 'react';

import './App.css';
import Nav from '../src/Nav/Nav.js';
import Home from '../src/Components/Home/Home';
import About from'../src/Components/About/About';
import Navbar from '../src/Navbar/Navbar';
import Jobseeker from './Components/Jobseeker/Jobseeker';
import Jobs from '../src/Components/Jobs/Jobs';
import Employer from '../src/Components/Employer/Employer';
import Trends from '../src/Components/Trends/Trends'; 
import Contact from '../src/Components/Contact/Contact';
import Login from '../src/Components/Login/Login'
import Register from '../src/Components/Register/Register'
import Vacancy from '../src/Components/Vacancy/Vacancy';
import Indetail from '../src/Components/Indetail/Indetail'

import Footer from './Footer/Footer'

import { HashRouter,Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { register } from './serviceWorker';

function App() {
 
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Nav />
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/jobseeker'component={Jobseeker}></Route>
            <Route path='/employer'component={Employer}></Route>
            <Route path='/jobs'component={Jobs}></Route>
            <Route path='/about'component={About}></Route>
            <Route path='/trends'component={Trends}></Route>
            <Route path='/contact'component={Contact}></Route>
            <Route path='/login'component={Login}></Route>
            <Route path='/register'component={Register}></Route>
            <Route path='/vacancy'component={Vacancy}></Route>
            <Route path='/indetail/:index'component={Indetail}></Route>
        </Switch>
        <Footer />
      </div>
      
      </HashRouter>
  );
}

export default App;
