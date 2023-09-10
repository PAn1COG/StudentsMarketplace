
import React, { useState } from "react";
import Header from "./Header";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import SchoolAdmin from "./SchoolAdmin";
import BoHome from "./BoHome";
import SuperAdmin from "./SuperAdmin";


let result
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [role, setrole] = useState("")
  async function handleLogin() {
    let item = { email, password };
    result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/login", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json '
      }
      
    })
    result = await result.json(item);
    localStorage.setItem("user-info", JSON.stringify(result))
    localStorage.setItem("role", JSON.stringify(result.role))
    localStorage.setItem("id",JSON.stringify(result.id))
    if(result === 0){
      alert("invalid Credentials");
      localStorage.clear();
      localStorage.removeItem("role");
      navigate('/login');

    }
    
    console.warn(result)

    if (result.role === 'student') {
      navigate('/studentprofile');
    }
    else if (result.role === 'schooladmin') {
      navigate('/schooladmin');
    }
    else if (result.role === 'businessowner') {
      navigate('/bohome');
    }
    else if (result.role === 'superadmin') {
      navigate('/superadmin');
    }
  }
// console.warn(result.role)


return (

  <div class="header">
    <Header />
    <div className="login">
      <h1 className="">LOG IN</h1>
      <form >
        <label for="studentID">Email</label>
        <input type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label for="password">PASSWORD</label>
        <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="button" value="LOGIN" onClick={handleLogin} />
      </form>
      <p className="login-prompt"> <br />  <Link to="/forgotpass">Forgot Password</Link> <br />Do not have an account yet? <br /> <Link to="/register">Register</Link> here</p>
    </div>
  </div>
);
}
export default Login;

//
// {/* <script type="text/javascript">
//             var navLinks = document.getElementById("navLinks");
//             function showMenu(){
//               navLinks.style.right = "0";
//             }
//             function hideMenu(){
//               navLinks.style.right = "-200px";
//             }
//           </script>
//            */}