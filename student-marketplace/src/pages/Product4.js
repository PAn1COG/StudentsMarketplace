import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
class Product4 extends React.Component {
  render() {
    return (
      <section className="header">
        <Header/>
        <div className="small-container">
          <div className="col-4">
            <img src="css/images/product4.png" width="" />
          </div>
          <div className="col-4">
            <h1>Acoustic Guitar</h1>
            <h3>$120</h3>
            <h3>Select Quantity</h3>
            <input className="quantity" type="number" name="" defaultValue={1} />
            <a href="#" className="btn">
              Add to Cart
            </a>
            <h3>Product Details</h3>
            <p>
              -Half-Sized Acoustic Guitar: The Music Alley measures 34 inches in
              length. This and its lightweight linden body makes this, the ideal kid's
              guitar or beginner guitar. -Classical Guitar Design: Orginintaing in the
              19th century the shape of this guitar has sustained its popularity due
              to its high playability.
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
export default Product4;