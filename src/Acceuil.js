import React, { Component } from 'react'
import Login from './login'
import Liste from './liste'
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Formulaire from './Formulaire';
import { Provider } from 'react-redux'
import store from './store/index'
export default class Acceuil extends Component {
  constructor(){
    super()
    this.state={
    list:[],
    key:"",
    listSearch:[]
    }
    // this.handleSearch=this.handleSearch.bind(this)
}
handleSearch(e){
this.setState({key:e.target.value})

  axios.get("http://localhost:8080/register").then(res=>{console.log(res) 
      this.setState({list:res.data})})

}

  render() {
    return (
      <div>
        <Router>
          <div >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#"><Link to="/">Acceuil</Link> <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#"><Link to="/list">Liste des etudiants</Link></a>
                  <a class="nav-item nav-link" href="#"> Evènement</a>
                </div>

              </div>
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" value={this.state.key} type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0 but" type="submit">Search</button>
                    <button class="btn btn-outline-success my-2 my-sm-0 but" type="submit" onClick={(e) => e.preventDefault()}><Link to="/login/" id="but">Login</Link></button>
                    <button class="btn btn-outline-success my-2 my-sm-0 but" type="submit" onClick={(e) => e.preventDefault()}><Link to="/register/" id="but">Register</Link></button>
                  </form>
                

            </nav>
          </div>
          <Route path="/login" component={Login} />
          <Route path="/list" component={Liste} />
          <Provider store={store}>

            <Route path="/register" component={Formulaire} />

          </Provider>

        </Router>
      </div>
    )
  }
}
