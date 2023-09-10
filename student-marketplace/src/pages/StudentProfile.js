import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { Table } from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";
// var navLinks = document.getElementById("navLinks");

function StudentProfile() {
  const [data, setData] = useState([]);

  async function leaveClub(clubid) {
    let id = localStorage.getItem('id');
    let item = { id, clubid };
    console.log(item);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/leaveclub", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json '
      }
    })
    window.location.reload();
  }

  const id = localStorage.getItem('id');
  let item = { id };
  // console.log(item);
  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/listClubbyid", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json '
        }
      }
      );
      result = await result.json();
      setData(result);
    })();
  }, [])
  const [addata, setAdData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/fetchAd", {
        method: 'POST'
      }
      );
      result = await result.json();
      setAdData(result);
    })();
  }, [])

  const [user, setUser] = useState([]);
  item = { id };
  console.log(item);
  useEffect(() => {
    (async () => {
      let userData = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/getuserinfo", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json '
        }
      }
      );
      userData = await userData.json();
      setUser(userData);
    })();
  }, [])

  console.log(user);



  return (
    <>
      <section className="header-sp">
        <Header />
        <div className="header-sp">
          <nav>
            <div className="text-box">
              <h1 className="h1-sp" style={{ marginTop: '72px' }}>Student Profile</h1>
            </div>
          </nav>
        </div>
        {/* Student Profile */}
        <div className="cusomter-profile-py-4">
          <div className="container-sp">

            <div className="row-sp">

              <div>
                <div className="card shadow-sm" style={{ display: "flex" }}>
                  <div
                    className="card-header bg-transparent text-center"
                    style={{ padding: 20 }}
                  >
                    <img
                      className="profile_img"
                      src="./css/images/student-profile-default.webp"
                      alt=""
                      style={{ height: 300, width: 300 }}
                    />

                    {/* <h2 style={{ textAlign: "center" }}>{user.name}</h2> */}
                  </div>


                  <div className="card-body" style={{ padding: 50, fontSize: 20 }}>
                    {
                      user.map((item) => (
                        <h2 style={{ textAlign: "center", color: "black" }} > {item.name}</h2>


                      ))
                    }
                    {
                      user.map((item) => (

                        <p className="mb-0">
                          <strong className="pr-1">Email: </strong>
                          {item.email}
                        </p>
                      ))
                    }
                    <div style={{ margin: 20, textAlign: "center" }}>
                      <a href="/updateinfo" className="hero-btn-sp">
                        Edit Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-container-sp">
          <h2 className="title">Products</h2>
          <div className="row-sp">
          </div>
          <div className="row-sp">
            <div>
              <a className="hero-btn-sp" onClick={(e) => { e.preventDefault(); window.location.href = '/return'; }}> Initiate a Return </a>
            </div>
            <div>
              <a className="hero-btn-sp" onClick={(e) => { e.preventDefault(); window.location.href = '/addproduct'; }}> Add Product </a>
            </div>
          </div>
        </div>
        <div className="small-container-sp">
          <h2 className="title-sp">Clubs</h2>
          <div className="row-sp">
            <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
              <thead>
                <tr style={{ color: "white" }}>
                  <td></td>
                  <td>Club Name</td>
                  <td>Club Info</td>
                  <td></td>
                  <td></td>

                </tr>
              </thead>
              {
                data.map((item) =>
                  <tr>
                    <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} /></td>
                    <td>{item.clubname}</td>
                    <td>{item.information}</td>
                    <td onClick={() => leaveClub(item.id)}><Button>Leave</Button></td>
                  </tr>

                )

              }
              <tbody>
                <tr>
                  <Button style={{ marginLeft: '100%', width: '110px', marginTop: '15px' }}> <Link to="/addclub" style={{ textDecoration: 'none' }}>AddClub</Link></Button>
                </tr>

              </tbody>
            </Table>


          </div>
        </div>
        <div className="small-container-sp">
          <h2 className="title">Posts</h2>
          <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
            <thead>
              <tr style={{ color: "white" }}>
                <td></td>
                <td>Ad Information</td>

              </tr>
            </thead>
            {
              addata.map((item) =>
                <tr>
                  <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} /></td>
                  <td>{item.addata}</td>
                </tr>

              )
            }
          </Table>

          
        </div>
        <div className="wrapper-sp">
          <div className="head-text"> CHAT </div>
          <div className="chat-box-sp"> FILL THE FORM BELOW TO START</div>
          <form action="#">
            <div className="field">
              <Button type="submit"> START CHAT</Button>
            </div>
          </form>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <footer style={{ left: "88%", color: "black" }}>
        <p>SIGNED IN AS STUDENT</p>
      </footer>
    </>

  );
}
export default StudentProfile;