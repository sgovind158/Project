
import {  useNavigate } from 'react-router-dom'

const ReqAuth = ({children}) => {
    const navigate = useNavigate()
    const auth = localStorage.getItem("user")
 
   if(auth){
    return children
   }else{
    return navigate("/signup")
   }
    
    
 
       
    

}

export default ReqAuth
