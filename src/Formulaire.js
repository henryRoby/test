import React, { Component } from 'react'
import {connect} from "react-redux"


 class Formulaire extends Component {
   constructor(){
     super()
     this.state={ nom:'',
     email:'',
    password:"",
     
     }
     this.change=this.change.bind(this)
    
   }
   change(e){
    this.setState({[e.target.name]:e.target.value})
   }
   
   post(e){
    
        const action={type:"postEleve",value:e}
       this.props.dispatch(action)
   
  }
  
  render() {
    var styl={color:"black"}
    return (
      <div className="container">
        <form>
        <table>
          <tbody>
            <tr>
              <td> <label style={styl} >Nom</label></td>
              <td> <input value={this.state.nom} onChange={this.change} name="nom"/></td>
            </tr>
            <tr>
              <td> <label style={styl}>Email</label></td>
              <td><input value={this.state.email} onChange={this.change} type="email" name="email"/></td>
            </tr>
            <tr>
              <td>  <label style={styl}>Mot de passe</label></td>
              <td><input value={this.state.password} onChange={this.change} name="password"/></td>
            </tr>
            <tr>
            <td><button  onClick={(e)=>{
              e.preventDefault()
              this.post({
              nom:this.state.nom,
              email:this.state.email,
              password:this.state.password,
            
            })
          this.setState({ nom:'',
          email:"",
          password:""
          })}
          }

            >S'inscrire</button></td>
            <td ></td>
            </tr>
          </tbody>
        </table>    
            
           
            
            
            
            
            
            
        </form>
        <div>
         
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {eleve:state}
}

export default connect(mapStateToProps)(Formulaire)