import axios from 'axios';
const initialState={eleve:[{
    nom:'',
        email:'',
        password:''
        
    }]
        
    }
    const reducer=(state=initialState,action)=>{
        switch(action.type){
            case 'postEleve':
         
                axios.post("http://localhost:8080/register",{
                    nom:action.value.nom,
                    email:action.value.email,
                    password:action.value.password,   
                }
                ).then(res=>console.log(res))
            
                
                break
            default:
            return state
        }
    }
    export default reducer