import React from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { useEffect } from "react";

function Payment() {
  const navigate = useNavigate();
  async function checkout() {
    let id = localStorage.getItem('id');
    let item = { id };
    console.log(item);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/addtoOrders", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    if (result == 1) {
      alert('empty kart');
    }
    else {
      alert(result);
      alert('Order Placed');
      navigate('/index');
    }
  }

  return (
    <section className="header">
      <Header />
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col">
              <h3 className="title">billing address</h3>
              <div className="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="john deo" />
              </div>
              <div className="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div className="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div className="inputBox">
                <span>city :</span>
                <input type="text" placeholder="mumbai" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="india" />
                  <br />
                </div>
                <div className="inputBox">
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>
            </div>
            <div className="col">
              <h3 className="title">payment</h3>
              <div className="inputBox">
                <span>cards accepted :</span>
                <img src="css/images/card_img.png" alt="" />
              </div>
              <div className="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo" />
              </div>
              <div className="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder={2022} />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="***" />
                </div>
              </div>
            </div>
          </div>
          <Button className="submit-btn" onClick={checkout}>Confirm Payment</Button>
        </form>
      </div>
      <footer>
        <p>SIGNED IN AS STUDENT</p>
      </footer>
    </section>

  );
}

export default Payment;