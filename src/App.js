import React from 'react';
import './App.css';
import Navbar1 from './Components/Navbar/Navbar1'

import Home from './Components/Navbar/Home'
import aboutCompany from './Components/Navbar/Notification'
import Blogs from './Components/Navbar/OrderDetails'
import HowItsWorks from './Components/Navbar/HowItsWorks'
import OurProjects from './Components/Navbar/OrderStatus'
// import Footer from './Components/Footer/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import classes from '*.module.css';

function App() {
  return (
    <div>
    {/* <Router> */}
      <div className="main">
        <Navbar1 />
        <Home />
      </div>
    {/* </Router> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
