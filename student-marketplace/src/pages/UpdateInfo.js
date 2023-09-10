
import React, { useState } from "react";
import { Await, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "./Header";



function UpdateInfo() {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [school_id, setschoolid] = useState("")
  const id = localStorage.getItem('id');
  const role = JSON.parse(localStorage.getItem('role'));
  const [error, setError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  async function update() {
    
    let item = {name ,school_id, email, id , role}
    console.log(item)
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(name.length == 0 || role.length == 0|| email.length == 0 || school_id.length == 0){
      setError(true);
    }
    else if(!regex.test(email)){
      setEmailError(true);
    }
    else{

      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/updateinfo", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      })
      result = await result.json()
      if(result === 0){
        alert("Data Updated Successfully");
        navigate('/');
      }
      console.warn(result);
    }
  }
  console.log(JSON.parse(localStorage.getItem('user-info')).name);
  return (
    <div>
      <section class="header">
        <Header/>
        <div class="register">
          <form >
            {error?
            <label style={{color:"red"}}>
              Invalid Data
            </label>:""
            }
             <h1 className="h1-r">Update Profile Info</h1>
            <label for="Name">NAME</label>
            <input type="text" placeholder="" value={name} defaultValue={JSON.parse(localStorage.getItem('user-info')).name} onChange={(e) => setName(e.target.value)} />
            <label for="email">EMAIL</label>
            <input type="email" placeholder="" value={email} defaultValue={JSON.parse(localStorage.getItem('user-info')).email} onChange={(e) => setemail(e.target.value)} />
            {emailError?
            <label style={{color:"red"}}>
              Email is Invalid
            </label>:""
            }
            <label for="email">School ID</label>
            <input type="text" placeholder="" value={school_id} onChange={(e) => setschoolid(e.target.value)} />
            
            <label htmlFor="lname">User ID</label>
            <input type="text" disabled id={id} defaultValue = {localStorage.getItem('id')} />
            <input type="button" value="SUBMIT" onClick={update} />
          </form>
        </div>
      </section>
    </div>
  );
}
export default UpdateInfo;