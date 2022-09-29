
import { Link, useNavigate } from 'react-router-dom'
import nav from "./StyleComponets/navbar.module.css"

const Navbar = () => {
    const auth = localStorage.getItem("user")
    
   
    const navigate = useNavigate()
   
    const logout = ()=>{
      localStorage.clear()
      navigate("/signup")
    }
  return (
    <div  >
      {
        auth?
        <div className={nav.navDiv}>
        <img src="https://secureservercdn.net/160.153.138.114/d4t.113.myftpupload.com/wp-content/uploads/2019/06/Mern-Stack-Program.png?time=1659823564" alt="logo" />
        <Link to='/' >Home</Link>
        <Link to='/add' >AddProduct</Link>
       
        <Link to='/products'>Products</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/update' >UpdateProduct</Link>
        <Link to='/signup' onClick={logout} >Logout :- ({JSON.parse(auth).name})</Link>
        </div>
        :
        <div className={nav.rightNavDiv} >
          <div >
           <img className={nav.logo}src="https://secureservercdn.net/160.153.138.114/d4t.113.myftpupload.com/wp-content/uploads/2019/06/Mern-Stack-Program.png?time=1659823564" alt="logo" />
           </div>

           <div className={nav.rightNav}>
        <Link to='/signup' >SignUp</Link>
        <Link to='/login' >Login</Link>
        </div>
        </div>
      }
        
       
        
    </div>
  )
}

export default Navbar
