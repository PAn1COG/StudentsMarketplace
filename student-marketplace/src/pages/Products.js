import React, { useEffect, useState } from "react";
import { Await, json, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Table, Button } from 'react-bootstrap'
import Header from "./Header";
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
// var navLinks = document.getElementByx`Id("navLinks");
function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/allProducts", {
        method: 'POST'
      }
      );
      result = await result.json();
      setData(result);
    })();
  }, [])
  const studentid = localStorage.getItem('id');
  async function addtokart(id, name, price) {
    const formdata = new FormData();
    formdata.append('id', id);
    formdata.append('name', name);
    formdata.append('price', price);
    formdata.append('studentid', studentid);
    console.log(formdata);
    let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/addToCart", {
      method: 'POST',
      body: formdata,
    })
    alert('Added to cart');
  }

  return (
    <div>
      <section className="header">
        <Header />
        <h2 style={{ textAlign: "center" }} className="title">
          FEATURED PRODUCTS
        </h2>
        <div className="small-container" style={{ backgroundColor: "white" }}>
          {

            data.map((item) =>
              <div className="col-4">
                <a>
                  <img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} width="" />
                </a>
                <h4>{item.pname}</h4>
                <p style={{ textAlign: "center" }}>{item.price}</p>
                <Button onClick={() => addtokart(item.id, item.pname, item.price)} style={{ padding: '0px', alignContent: "center" }}>Add to kart</Button>
              </div>
            )

          }
        </div>
        <footer>
          <p>SIGNED IN AS STUDENT</p>
        </footer>
      </section>
    </div>

  );
}

export default Products;