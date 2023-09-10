import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
class Product1 extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <section className="header">
          <div className="small-container">
            <div className="col-4">
              <img src="css/images/product1.png" width="" />
            </div>
            <div className="col-4">
              <h1>BALENCIAGA HOODIE</h1>
              <h3>$500</h3>
              <select className="size">
                <option>Select Size</option>
                <option>XXL</option>
                <option>XL</option>
                <option>L</option>
                <option>M</option>
                <option>S</option>
              </select>
              <h3>Select Quantity</h3>
              <input className="quantity" type="number" name="" defaultValue={1} />
              <a href="#" className="btn">
                Add to Cart
              </a>
              <h3>Product Details</h3>
              <p>
                • Fleece • Regular fit • Hood with drawstring • 1 kangaroo pocket on
                front • Balenciaga logo printed at back • Made in Portugal • Cold
                machine wash • The model is wearing a FR size S Material: 100% cotton
              </p>
            </div>
          </div>
          <footer>

          </footer>
        </section>

      </div>

    );
  }
}
export default Product1;