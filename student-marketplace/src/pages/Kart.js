import React, { useEffect, useState } from "react";
import { Await, json, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Table, Button } from 'react-bootstrap'
import Header from "./Header";
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
function Kart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const studentid = localStorage.getItem('id');
  let item = {studentid}
  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/listCart", {
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
      console.log(result);
    })();
  }, [])
  
  async function remove(id) {
    let ids = { id , studentid }
    console.log(ids);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/removeFromCart", {
        method: 'POST',
        body: JSON.stringify(ids),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json '
          }
        })
        window.location.reload();
}

async function handleclick() {
  item = {studentid}
  let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/addAd", {
      method: 'POST',
      body: JSON.stringify(item), 
  });
  alert("Data stored");
}
  var total = 0;
  return (
    <section className="header">
      <Header />
      <div className="small-container-cart-page">
        <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
          <thead>
            <tr style={{ color: "white" }}>
              <td></td>
              <td></td>
              <td>Product Name</td>
              <td>Price</td>
              <td style={{textAlign:"center"}}>Quantity</td>

            </tr>
          </thead>
          {

            (data.map((item) => {

              total += item.price * item.quantity; 
              return (
                <tr>
                  <td onClick={() => remove(item.id)}><Button>remove</Button></td>
                  <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} /></td>
                  <td>{item.pname}</td>
                  <td>{item.price}</td>
                  <td style={{textAlign:"center"}}>{item.quantity}</td>
                </tr>
              )
            }))

          }
        </Table>
        <div className="proceed-payment">
          <div className="total-price">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <input type="button" defaultValue="Proceed to Pay" onClick={() => { navigate('/payment')} }/>
      </div>
      <footer>
        <p>SIGNED IN AS STUDENT</p>
      </footer>
    </section>

  );
}

export default Kart;


<button
  type="button" className="submitBtn"
  onClick={(e) => {
    e.preventDefault();
    window.location.href = '/profile';
  }}
> Click here</button>