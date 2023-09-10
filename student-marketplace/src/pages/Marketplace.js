import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
class Marketplace extends React.Component {
  render() {
    return (
      <div>
        <section class="header">
          <Header/>
          <div class="row">
            <div class="text">
              <h1>GIVE YOUR CAMPUS INVOLVEMENT <br /> LIFE A NEW TWIST </h1>
              <p>Get the safe and private platform for your Campus Community,
                <br />Make buing and selling easier than ever</p>
            </div>
            <div class="col-2">
              <img src="css/images/students-ecommerce.png" alt="" />
            </div>
          </div>
          <footer>
            <p>SIGNED IN AS STUDENT</p>
          </footer>
        </section>

      </div>
    );
  }
}
export default Marketplace;