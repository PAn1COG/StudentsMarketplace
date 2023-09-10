import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { Table } from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";
function SchoolAdmin() {
  let id = localStorage.getItem('id');
  const [user, setUser] = useState([]);
  let item = { id };
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

  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/listclub", {
        method: 'POST'
      }
      );
      result = await result.json();
      setClubs(result);
    })();
  }, [])

  async function deleteClub(clubid) {
    let item = { clubid };
    console.log(item);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/deleteClub", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json '
      }
    })
    window.location.reload();
  }
  async function deleteStudent(studentid) {
    console.warn(studentid);
    let item = { studentid };
    console.log(item);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/deleteStudent", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json '
      }
    })
    window.location.reload();
  }

  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/showstudents", {
        method: 'POST'
      }
      );
      result = await result.json();
      setStudents(result);
    })();
  }, [])

  return (
    <>
      <section className="header-sp">
        <Header />
        <div className="header-sp">
          <div className="text-box">
            <h1 className="h1-sp" style={{paddingTop: '70px'}}>SCHOOL ADMIN PROFILE</h1>
          </div>
        </div>
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
      </section>




      {/* Student Profile */}

      <div className="small-container-sp">
        <h2 className="title" style={{color: "black", textAlign: "center"}}>Clubs</h2>
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
              clubs.map((item2) =>
                <tr>
                  <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item2.image} /></td>
                  <td>{item2.clubname}</td>
                  <td>{item2.information}</td>
                  <td onClick={() => deleteClub(item2.id)}><Button>Delete</Button></td>
                </tr>

              )

            }
            <tbody>
              <tr>
                <Button style={{ marginLeft: '100%', width: '110px' }}> <Link to="/addclub" style={{ textDecoration: 'none' }}>AddClub</Link></Button>
              </tr>

            </tbody>
          </Table>

        </div>
        <div className="row-sp">
          
      
        </div>
      </div>
      <div className="small-container-sp">
        <h2 className="title">Posts</h2>
       
        <div className="row-sp">
          
         
        </div>
      </div>
      <div className="small-container-sp">
        <h2 className="title" style={{color: "black", textAlign: "center"}}>Students</h2>
        <div className="student-table">
          <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
            <thead>
              <tr style={{ color: "white" }}>
                <td>Student Name</td>
                <td>Student id</td>
                <td></td>
                <td>Club Associated</td>
              </tr>
            </thead>
            {
              students.map((item2) =>
                <tr>
                  <td>{item2.name}</td>
                  <td>{item2.id}</td>
                  <td onClick={() => deleteStudent(item2.id)}><Button>Delete</Button></td>
                  <td>{item2.club_id}</td>
                </tr>
              )
            }
            <tbody>
              <tr>
                {/* <Button style={{ marginLeft: '100%', width: '110px' }}> <Link to="/addproduct" style={{ textDecoration: 'none' }}>AddProduct</Link></Button> */}
              </tr>

            </tbody>
          </Table>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <footer style={{ left: "88%", color: "black" }}>
        <p>SIGNED IN AS SCHOOL ADMIN</p>
      </footer>
    </>


  );
}
export default SchoolAdmin;