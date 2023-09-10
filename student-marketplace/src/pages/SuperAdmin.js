import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { Table, Button } from 'react-bootstrap';
import $, { contains, data } from "jquery";
import { useNavigate } from "react-router-dom";
import Chart from 'react-apexcharts';
import { getValue } from "@testing-library/user-event/dist/utils";
function SuperAdmin() {
  
  let navigate = useNavigate();
  let id = localStorage.getItem('id');
  const [user, setUser] = useState([]);
  let item = { id };
  // console.log(item);
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

  const [businessowners, setBusinessowners] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/showbusinessowners", {
        method: 'POST',

      }
      );
      result = await result.json();
      setBusinessowners(result);
    })();
  }, [])

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

  async function deleteBusinessOwner(id) {
    console.warn(id);
    let item = { id };
    console.log(item);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/deleteBusinessOwner", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json '
      }
    })
    window.location.reload();
  }

  const [usercount, setUserCount] = useState([]);
  const [usertype, setUserType] = useState([]);
  useEffect(() => {

    (async () => {
      const count = [];
      const type = [];
      let userCountinfo = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/getUserCount", {
        method: 'POST'
      }
      );
      userCountinfo = await userCountinfo.json();
      console.log(userCountinfo);
      for (let i = 0; i < userCountinfo.length; i++) {
        // console.log(userCountinfo[i]["students"]);
        // console.log(userCountinfo[i]["schoolAdmins"]);
        // console.log(userCountinfo[i]["businessowners"]);
        count.push(userCountinfo[i]["students"]);
        count.push(userCountinfo[i]["businessowners"]);
        count.push(userCountinfo[i]["schooladmins"]);
        // console.log(type);
        console.log(userCountinfo[i]["schooladmins"]);
        console.log(count);
        setUserCount(count);
      }
    })();
  }, [])
  
  return (
    <>
      <section className="header-sp">
        <Header />
      </section>
      <section className="header-sp">
        <nav style={{ paddingBottom: 50 }}>
          <div className="text-box">
            <h1 className="h1-sp" style={{ paddingTop: '70px' }}>SUPER ADMIN</h1>
          </div>
        </nav>
      </section>
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
        <h2 className="title">Students</h2>
        <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
          <thead>
            <tr style={{ color: "white" }}>
              <td>Student Name</td>
              <td>Student id</td>
              <td>Club Associated</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          {
            students.map((item2) =>
              <tr>
                <td>{item2.name}</td>
                <td>{item2.id}</td>
                <td>{item2.club_id}</td>
                <td onClick={() => {localStorage.setItem('updaterole','student');localStorage.setItem('updateid',item2.id); window.location.href = '/updatefromsuper'; }} style={{ textAlign: "center" }} ><Button>Update</Button></td>
                <td onClick={() => deleteStudent(item2.id)} style={{ textAlign: "center" }}><Button>Delete</Button></td>
              </tr>
            )
          }
          <tbody>
            <tr>
              {/* <Button style={{ marginLeft: '100%', width: '110px' }}> <Link to="/addproduct" style={{ textDecoration: 'none' }}>AddProduct</Link></Button> */}
            </tr>

          </tbody>
        </Table>


        <div style={{ marginRight: 20, margin: 10 }}>
          
        </div>
        <div style={{ marginRight: 20, margin: 10 }}>
          <a href="#" className="hero-btn-sp" onClick={(e) => { e.preventDefault(); window.location.href = '/register'; }}>
            ADD STUDENT
          </a>
        </div>
      </div>
      <div className="small-container-sp">
        <h2 className="title">Business Owners</h2>
        <div className="student-table">
          <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
            <thead>
              <tr style={{ color: "white" }}>
                <td>businessowner Name</td>
                <td>id</td>
                <td style={{ textAlign: "center" }}>School Associated</td>
                <td></td>
                <td></td>
                
                
              </tr>
            </thead>
            {
              businessowners.map((item3) =>
                <tr>
                  <td>{item3.name}</td>
                  <td>{item3.id}</td>
                  <td style={{ textAlign: "center" }}>{item3.school_id}</td>
                  <td onClick={() => {localStorage.setItem('updaterole','businessowner');localStorage.setItem('updateid',item3.id); window.location.href = '/updatefromsuper'; }} style={{ textAlign: "center" }} ><Button>Update</Button></td>
                  <td onClick={() => deleteBusinessOwner(item3.id)} style={{ textAlign: "center" }}><Button>Delete</Button></td>
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
      <div className="small-container-sp">
        <h2 className="title">Insights</h2>

        <Chart
          type="bar"
          width={1000}
          height={500}
          series={[
            {
              data: usercount,
            },
          ]}
          options={{
            colors: ["#f90000"],
            theme: { mode: "light" },
            title: {
              text: "Number of users",
              style: { fontSize: 30 },
            },
            xaxis: {
              tickPlacement: "on",
              categories: [
                "students",
                "business owners",
                "admins"
              ],
              title: {

                style: { color: "#f90000", fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
              title: {
                text: "Usercount",
                style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
      <br />
      <br />
      <br />
      <br />
      <footer style={{ left: "88%", color: "black" }}>
        <p>SIGNED IN AS SUPER ADMIN</p>
      </footer>
    </>

  );
}
export default SuperAdmin;