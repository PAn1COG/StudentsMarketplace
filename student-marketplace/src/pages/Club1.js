import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
class Club1 extends React.Component {
  render() {
    return (
      <section className="header">
        <Header/>
        <div className="small-container">
          <div className="col-4">
            <img src="css/images/club1.png" width="" />
          </div>
          <div className="col-4">
            <h1>CYCLING CLUB</h1>
            <a href="#" className="btn">
              Join Club
            </a>
            <h3>Club Details</h3>
            <p>
              • Regular practive Sessions • Stay fit • Open for any Age Group • Get
              Involved on campus • Discount for Eary Bird • Make Connections •
              Competition at the end of the semester
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
export default Club1;