import React, { useState } from "react";
import Header from "./Header";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import SchoolAdmin from "./SchoolAdmin";
import BoHome from "./BoHome";
import SuperAdmin from "./SuperAdmin";
function ForgotPassword (){


  const [useremail, setEmail] = useState("");
  let temp = 0;
  async function handleRecovery(){
    let item = { useremail };
    try{
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/handleAcountReset", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json '
        }
      })
      result = await result.json(item);
      console.log(result);
      temp = result;

    }
    catch(e){
    }
    if(temp === 1){
      alert('Recovery Email Sent');
       window.location.reload();
    }
    else{
      alert('no such email exists');
    }
    
  }
    return (

      <div className="header">
        <Header/>
        <div className="login">
          <h1>ACCOUNT RECOVERY</h1>
          <form >
            <label for="email">EMAIL</label>
            <input type="text" placeholder="" value={useremail} onChange={(e) => setEmail(e.target.value)} />
            <label for="">Recovery email will be sent to this email.</label>
            <input type="button" value="SUBMIT" onClick={handleRecovery}/>
          </form>
        </div>
      </div>

    );
  }
export default ForgotPassword;
{/* <script type="text/javascript">
            var navLinks = document.getElementById("navLinks");
            function showMenu(){
              navLinks.style.right = "0";
            }
            function hideMenu(){
              navLinks.style.right = "-200px";
            }
          </script>
           */}