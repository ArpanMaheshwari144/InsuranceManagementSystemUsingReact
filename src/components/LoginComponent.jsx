import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const LoginComponent = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const loginUser = (e) => {
    if (email===''  || password==='') {
        alert("please fill out all filed");
        return;
        
    }
    e.preventDefault();
    axios.post("http://localhost:8081/login",{
        email:email,
        password:password}).then((res)=>{
            if(res.data.message=="email does not exist"){
                alert("email does not exist");
            
        }
        else if(res.data.message=="Login succes"){
              localStorage.setItem("UserEmail",email);
              localStorage.setItem("Password",password);
                navigate("/policy")
            }else{
                alert("email and password does not match")

            }
        })
        
     
  };
  return (
    <div className="container mt-4" >
    <div className="">
        <h1>Login Form</h1>
        <form>
        <div className="form-group">
          <input type="text"  className="form-control" id="email" placeholder="Enter EMAIL"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
        </div>
        <div className="form-group">
          <input type="text"  className="form-control" id="password" placeholder="Enter Password"
          
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          />
        </div>
        </form>
    </div>
    <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
    </div>
  )
}

export default LoginComponent
