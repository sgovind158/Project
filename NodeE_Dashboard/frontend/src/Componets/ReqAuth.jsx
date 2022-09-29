
import {  useNavigate ,Outlet } from 'react-router-dom'

const ReqAuth = ({children}) => {
    const navigate = useNavigate()
    const auth = localStorage.getItem("user")
 
   if(auth){
    return <Outlet/>
   }else{
    return navigate("/signup")
   }
    
    
 
       
    

}

export default ReqAuth
