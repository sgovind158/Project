
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
    <div className={nav.navDiv}>
        <Link to='/' >Home</Link>
        <Link to='/add' >AddProduct</Link>
       
        <Link to='/products'>Products</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/update' >UpdateProduct</Link>
       
        {auth?<Link to='/signup' onClick={logout} >Logout</Link>:
        <>
        <Link to='/signup' >SignUp</Link>
        <Link to='/login' >Login</Link>
        </>
        }
        
        
    </div>
  )
}

export default Navbar
