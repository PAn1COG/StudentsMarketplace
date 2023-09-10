
import React, { useState } from "react";
import { Await, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
// class Register extends React.Component{
import { useNavigate } from "react-router-dom";
import Header from "./Header";



function Register() {

  const navigate = useNavigate();
  const [student_id, setstudentid] = useState("")
  const [name, setName] = useState("")
  const [role, setrole] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")
  const [school_id, setschoolid] = useState("")
  const [error, setError] = useState(false)
  const [passworderror, setPassError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  async function signup() {
    let item = { student_id, name, role,school_id, email, password }
    console.log(item)
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(name.length == 0 || role.length == 0|| email.length == 0 || school_id.length == 0){
      setError(true);
    }
    else if(password!=cpassword){
      setPassError(true);
    }
    else if(!regex.test(email)){
      setEmailError(true);
    }
    else{

      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/register", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      })
      result = await result.json()
      if(result === 0){
        alert("Email Already registered please recover the Acount");
        localStorage.clear();
        localStorage.removeItem("role");
        navigate('/login');
  
      }
      console.warn(result)
      navigate('/login');

    }
  }

  return (
    <div>
      <section class="header">
        <Header/>
        <div class="register">
          <h1 className="h1-r">Sign up</h1>
          <h4>Sign up if you have not</h4>
          <form >
            {error?
            <label style={{color:"red"}}>
              Invalid Data
            </label>:""
            }
            <label for="Name">NAME</label>
            <input type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
            <label for="email">EMAIL</label>
            <input type="email" placeholder="" value={email} onChange={(e) => setemail(e.target.value)} />
            {emailError?
            <label style={{color:"red"}}>
              Email is Invalid
            </label>:""
            }
            <label for="email">School ID</label>
            <input type="text" placeholder="" value={school_id} onChange={(e) => setschoolid(e.target.value)} />
            <select name="Role" id={role} className="role-select" onChange={(e) => setrole(e.target.value)}>
              <option value="student">Select Role</option>
              <option value="student">Student</option>
              <option value="schooladmin">School Admin</option>
              <option value="businessowner">Business Owner</option>
              <option value="superadmin">Super Admin</option>
            </select>
            <label for="Password">PASSWORD</label>
            <input type="password" placeholder="" value={password} onChange={(e) => setpassword(e.target.value)} />
            <label for="confirmPassword">CONFIRM PASSWORD</label>
            <input type="password" placeholder="" value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
            {passworderror?
            <label style={{color:"red"}}>
              Passwords Do not Match
            </label>:""
            }
            <input type="button" value="SUBMIT" onClick={signup} />
          </form>
          <p class="login-prompt">Already have an account? <br /> <Link to="/login">Login</Link> here</p>
        </div>
      </section>

    </div>
  );
}
export default Register;