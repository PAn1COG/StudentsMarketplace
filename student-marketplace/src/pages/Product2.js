import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
class Product2 extends React.Component {
  render() {
    return (
      <section className="header">
        <Header/>
        <div className="small-container">
          <div className="col-4">
            <a href="product2.html">
              <img src="css/images/product2.png" width="" />
            </a>
          </div>
          <div className="col-4">
            <h1>Study Table</h1>
            <h3>$100</h3>
            <h3>Select Quantity</h3>
            <input className="quantity" type="number" name="" defaultValue={1} />
            <a href="#" className="btn">
              Add to Cart
            </a>
            <h3>Product Details</h3>
            <p>
              Contoured hard plastic seat and back. Tubular steel frame with
              attractive chrome finish. Extra-large work surface. Durable solid
              plastic top. Desktop Color: Sand.
            </p>
          </div>
        </div>
        <footer>
          <p>SIGNED IN AS STUDENT</p>
        </footer>
      </section>


    );
  }
}
export default Product2;