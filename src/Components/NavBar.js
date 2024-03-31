import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function NavBar() {
        const token  = localStorage.getItem("token")
        console.log("I a token",token)
        
        const navigate = useNavigate()
  return (
    <div className='container'>
       
         <ul className="nav">
        {
         token ?
              <>
               {/* <h1>Welcome user</h1> */}
                <li className="nav-item">                 
                        <Link to="/UserDetails"className="nav-link active" aria-current="page">UserDetails</Link>                 
                </li>

                <li className="nav-item">                  
                        <Link to="/Portfolio" className="nav-link active" aria-current="page">Portfolio</Link>                  
                </li>

                <li><button className="btn btn-danger" onClick={()=>{
                 localStorage.removeItem("token")
                 navigate('/login')
                 }}>Logout</button>
                 </li>

              </>:
              <>
             
                 <li className="nav-item">                 
                        <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                    
                </li>
                <li className="nav-item">                   
                        <Link to="/Register" className="nav-link active" aria-current="page">Register</Link>
                       
                </li>
                </>
                }
            </ul>
              
    </div>
  )
}
