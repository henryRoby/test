import React, { Component } from 'react';
import './App.css';
import Formulaire from './Formulaire';
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Acceuil from './Acceuil';
import Login from './login'


// import EleveId from './EleveId'

class App extends Component {

 
  render() {
   
  return(
    <div id="body">
    <Router>
      <Acceuil/>
    
     </Router>
    </div>
  )
   
  }
}

export default App;
