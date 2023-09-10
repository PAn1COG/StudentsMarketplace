import React, { useEffect, useState } from "react";
import { Await, json, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Table, Button } from 'react-bootstrap'
import Header from "./Header";
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
function Clubs() {

  // let navigate = useNavigate();
  const [data, setData] = useState([]);
  async function joinClub(clubid) {
    let id = localStorage.getItem('id');
    let item= { id , clubid };
    console.log(item);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/joinclub", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json '
      }
    })
    window.location.reload();
  }

  async function deleteClub(id) {
    let clubid = { id }
    console.log(clubid);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/deleteClub", {
        method: 'POST',
        body: JSON.stringify(clubid),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json '
        }
    })
    window.location.reload();
}
  
  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/listclub", {
        method: 'POST'
      }
      );
      result = await result.json();
      setData(result);
    })();
  }, [])

  // const handleSumbit = () => {


  //     $.ajax({
  //         type: "POST",
  //         url: "https://sxd4369.uta.cloud/ecom-backend/api/listProduct",
  //         success(data) {
  //             console.log(data);
  //         },
  //     });
  // };
  // // console.log(data);
  // handleSumbit();


  return (
    <>

      <section className="header">
        <Header />
        <h1 style={{ textAlign: "center" }}>Clubs Available</h1>
        <div className="col-sm-10 offset-sm-1">
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
                  <td onClick={() => joinClub(item.id)}><Button>Join</Button></td>
                  <td onClick={() => deleteClub(item.id)}><Button>Delete</Button></td>
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

      </section>
    </>

  );
}

export default Clubs;