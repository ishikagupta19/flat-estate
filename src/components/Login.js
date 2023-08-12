import React, {useState, useContext} from 'react';
import search from './img/search.png';
import swal from 'sweetalert';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

const Login = () => {

  const {dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) =>{
    e.preventDefault();
    
    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    } );

    const data = res.json();
    
    if(res.status === 400 || !data){
      swal({
        title: "ERROR!",
        text: "Please enter all details",
        icon: "warning",
        dangerMode: true,
      })
      return console.error();
     
    } else{
      
      dispatch({type:"USER", payload: true})
      swal({
        icon: "success",
        text:"Login Successfull"
      });
      navigate("/");
    }
  }

  return ( <>
<div class="background">
  <div class="container">
    <div class="screen">
    <div class="screen-header mt-5">
       
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title" style={{color:"white", fontWeight:700}}>
            <span>SIGN IN</span>
            
          </div>
          <div className="signin-image">
            <figure>
                <img src={search} alt="signin" />
            </figure>
            <NavLink to = "/signup" className="signin-img-link" style={{color:"white",fontWeight:"bold"}}>Create an account</NavLink>
            <br/>
            <NavLink to = "/" className="signin-img-link" style={{color:"white",fontWeight:"bold"}}>Back To Home</NavLink>
        </div>
         
        </div>
        <div class="screen-body-item">
          <div class="app-form" style={{color:"white"}}>
          <form class="app-form123" method="POST">
            <div class="app-form-group">
              <input class="app-form-control" type="email" name="email" id="email" autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                          placeholder="email" />
            </div>
            
            <div class="app-form-group">
              <input class="app-form-control" type="password" name="password" id="password" autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                          placeholder="password" />
            </div>
           
            <div class="app-form-group buttons">
              <button class="app-form-button" style={{color:"white"}} type="submit" name="signup" id="signup" onClick={loginUser}>Sign In</button>
             
            </div>
            </form>
          </div>
        </div>   
      </div>
    </div>
    
  </div>
</div>

  </> 
  )
};

export default Login;
