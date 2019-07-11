import React, { Component } from 'react'
import axios from 'axios';
export default class Liste extends Component {
    constructor(){
        super()
        this.state={ 
        list:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/register").then(res=>{console.log(res) 
            this.setState({list:res.data})})
    }
  render() {
    return (
      <div id="fond">
          <table className="table">
                <thead>
                 <tr>
                  <th>Id</th> 
                  <th>Nom</th> 
                  <th>Email</th>   
                </tr>   
                </thead>
        {this.state.list.length>0 ? (this.state.list.map(lis=>(
            <tbody>
                <tr>
                    <td>{lis._id}</td>
                    <td>{lis.nom}</td>
                    <td>{lis.email}</td>
                </tr>
            </tbody>
            ))):""}
            
            </table>
        
      </div>
    )
  }
}
