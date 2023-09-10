import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { Table, Button } from 'react-bootstrap';
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
function BoHome() {
  let navigate = useNavigate();
  let id = localStorage.getItem('id');
  const [data, setData] = useState([]);
  const businessowner = localStorage.getItem('id');
  let item = { businessowner };

  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/listProduct", {
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
  let item2 = { id };
  useEffect(() => {
    (async () => {
      let userData = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/getuserinfo", {
        method: 'POST',
        body: JSON.stringify(item2),
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



  return (
    <>
      <Header />
      <section className="header-sp">
      </section>
      <section className="header-sp">
        <nav style={{ paddingBottom: 50 }}>
          <div className="text-box">
            <h1 className="h1-sp" style={{ paddingTop: '70px' }}>Business Owner Profile</h1>
          </div>
        </nav>
      </section>
      {/* Student Profile */}
      <div className="cusomter-profile py-4">
        <div className="container-sp">
          <div className="row">
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
                    user.map((item2) => (
                      <h2 style={{ textAlign: "center", color: "black" }} > {item2.name}</h2>


                    ))
                  }
                  {
                    user.map((item2) => (

                      <p className="mb-0" style={{ textAlign: "center", color: "black" }}>
                        <strong className="pr-1" >Email: </strong>
                        {item2.email}
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
        <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
          <thead>
            <tr style={{ color: "white" }}>
              <td></td>
              <td>Product Name</td>
              <td>Price</td>
              <td></td>

            </tr>
          </thead>
          {
            data.map((item) =>
              <tr>
                <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} /></td>
                <td>{item.pname}</td>
                <td>{item.price}</td>
              </tr>

            )
          }
        </Table>
        <div className="row-sp">
          {/* <div class="col-3"> */}
          <a href="#" className="hero-btn-sp">
            See more
          </a>
          {/* </div> */}
          {/* <div class="col-3"> */}
          <a href="#" className="hero-btn-sp" style={{ marginLeft: 10 }} onClick={(e) => { e.preventDefault(); window.location.href = '/addproduct'; }}>
            Add new Product
          </a>
          <a><Link to="/inventory" className="hero-btn-sp">Inventory</Link></a>
        </div>
      </div>
      <div className="small-container-sp">
        <h2 className="title">Advertisements</h2>
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

        <div className="row-sp">
          {/* <div class="col-3"> */}
          <a href="#" className="hero-btn-sp">
            See more
          </a>
          <div>
            <a className="hero-btn-sp" onClick={(e) => { e.preventDefault(); window.location.href = '/createad'; }}> Add Advertisement </a>
          </div>
          <br />
          {/* </div> */}
        </div>
        <div className="wrapper-sp">
          <div className="head-text"> CHAT </div>
          <div className="chat-box"> FILL THE DETAILS</div>
          <form action="#">
            <div className="field">
              <Button type="submit"> START CHAT</Button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <footer style={{ left: "83%", color: "black" }}>
          <p>SIGNED IN AS BUSINESS OWNER</p>
        </footer>
      </div>
    </>

  );
}

export default BoHome;