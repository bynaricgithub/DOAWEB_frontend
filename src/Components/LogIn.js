import React, { useState } from "react";

import axios from 'axios';
import{useNavigate} from "react-router-dom";
import{link, Navlink} from "react-router-dom";

const LogIn=()=>{
  const{msg, setMsg} = useState('');
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  // const[user, setUser] = useState({
  //   username:"",
  //   pasword:""
  // });

  let Navigate = useNavigate();

  // const{username,password} = user;
  // const onInputChange = e =>{
  //   setUser({...user,[e.target.name]:e.target.value});
  // };

  const login = () =>
  {
    const user = {username,password};
    
    axios.post("http://127.0.0.1:8000/api/login",{user})
    .then(response => {
      setMsg(response.data);
      localStorage.setItem("user",response.data);
      Navigate.push("AdminDash");
      alert("error");
      
    });
    
  }

  return (
    <div className="row justify-content-center">
      <div className="col-sm-10">
        <div className="login-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <div className="avatar">
              <img
                src="/assets/Images1/mainlogo.png"
                className="rounded-circle "
                alt="Cinque Terre"
              />
            </div>
            <h4 className="modal-title">Login to Your Account</h4>
            <div className="form-group">
              <label for="exampleInputEmail1" className="form-label">
                Username :
              </label>
              <input
                type="text"
                className="form-control fontForForm"
                placeholder=" Enter Username"
                required="required"
                onChange={(e) =>setUsername(e.target.value)}
                value={username}
                              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1" className="form-label">
                Password :
              </label>
              <input
                type="password"
                className="form-control fontForForm"
                placeholder=" Enter Password"
                required="required"
                onChange={(e) =>setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="captcha">
              <label for="captcha-input" className="form-label">
                Captcha :
              </label>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-6">
                  <div className="preview"></div>
                </div>
              </div>
            </div>
            <div className="form-group small clearfix">
              <label className="checkbox-inline form-label d-flex justify-content-center">
                <input type="checkbox" className="form-label marginCheckbox" />{" "}
                Remember me
              </label>
              <a href="#"  aria-disabled="true"  className="forgot-link">
                Forgot Password?
              </a>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-6">
                <div className="d-grid gap-2 form-group ">
                  <button className="btn btn-primary" type="button" id="login-btn" onClick={login}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
  
            }
export default LogIn;
