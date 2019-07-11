import React, { Component } from 'react'
import axios from 'axios';
export default class EleveId extends Component {
    constructor(props){
        super(props)
        this.state={
           
            elId:[]
        }

    }
   componentDidMount(){
    console.log(this.props)
    var url= "http://localhost:8080" +this.props.location.pathname
    axios.get(url).then(res=>{
      this.setState({elId:res.data})
    console.log(this.state.elId)
   
    }
    )
   }
        
      
      
  render() {
    // axios.get("http://localhost:8080/eleve").then(res=>{this.setState({el:res.data})
    // for(var i=0;i<this.state.el.length;i++){
     
      
    // }})
    return (
      <div>
        <table>
          <thead></thead>
          <tr></tr>
        </table>
         {this.state.elId.length>0 ?(this.state.elId.map((obj,index)=>(
           <div>
             {index==0 ? (<div><p>nom:{obj.nom}</p><br></br>
              <p>prenom:{obj.prenom}</p><br></br>
              <p>classe:{obj.classe}</p><br></br>
              <p>Age:{obj.age}</p>
             </div>
           
             ):(<p>Profnom:{obj.nom}</p>)}
           </div>
         ))):""} 
           
          
      </div>
    )   
   
  }
}
