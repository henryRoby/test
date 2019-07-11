import React, { Component } from 'react'
import axios from 'axios';
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            message:"",
            nom:"",
            email:"",
            password:""
        }
        this.handleChange1=this.handleChange1.bind(this)
        this.handleChange2=this.handleChange2.bind(this)
        this.handleChange3=this.handleChange3.bind(this)
        this.handlelogin=this.handlelogin.bind(this)
    }
    
    handleChange1(e){
        this.setState({nom:e.target.value})
    }
    handleChange2(e){
      this.setState({email:e.target.value})
  }
  handleChange3(e){
    this.setState({password:e.target.value})
}
handlelogin(ev){
  ev.preventDefault()
  axios.post("http://localhost:8080/login",{
    nom:this.state.nom,
    email:this.state.email,
    password:this.state.password,   
}
).then(res=>this.setState({message:res.data}))


}
  render() {
    var styl={color:"white"}
    return (
      <div>
        <form onSubmit={this.handlelogin}> 
        <table>
          <tbody>
            <tr>
              <td><label style={styl}>Email ou Nom d'utilisateur</label></td>
              <td><input type="text"   onChange={this.handleChange1||this.handleChange2} value={this.state.nom||this.state.email}/></td>
            </tr>
            <tr>
              <td><label style={styl}>Mot de passe</label></td>
              <td><input type="password"  onChange={this.handleChange3} value={this.state.password}/></td>
            </tr>
            <tr>
            <td><button >Connecter</button></td>
            <td ><span className="text text-danger"> {this.state.message}</span></td>
            </tr>
          </tbody>
        </table>    
        </form>
      </div>
      
    )
  }
}
