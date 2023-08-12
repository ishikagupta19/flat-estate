import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

import { UserContext } from "../App";

const Navbar = () => {
  


  const {state} = useContext(UserContext);

    const RenderMenu = () => {
      if(state) {
        return (
          <>
             
              
              <li className="nav-item">
                <NavLink className="nav-link" style={{color:"white"}} to="/logout">Logout</NavLink>
              </li>
            
          </>
        )
      } else {
        return (
          <>
              <li className="nav-item">
                <NavLink className="nav-link" style={{color:"white"}} to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={{color:"white"}} to="/signup">Sign Up</NavLink>
              </li> 
          </>
        )
      }
    }
  
  

  return <>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <button style={{color:"white"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" style={{color:"white"}}></span>
  </button>
  

  <div className="collapse navbar-collapse" style={{color:"white"}} id="navbarTogglerDemo03">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      

      <RenderMenu/>
      
    </ul>
    
  </div>
</nav>
  </>;
};

export default Navbar;

 