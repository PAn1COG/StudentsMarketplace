
import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <section className="header">
          <Header/>
          <div className="text-box-abs">
            <h1>ABOUT US</h1>
            <p>We provide on-campus and off-campus services to our current students and alumini.
              <br />Services include buying/selling products and enrolling/posting/establishing clubs.</p>
            <p>Welcome to our Student marketplace! We operate a marketplace platform that links Students and sellers of goods and services . We provide a wide range of goods and services, and our aim is to give our consumers access to a platform that is practical and simple to use. We are committed to providing a safe and secure environment for our users. We provide a wide range of goods and services, and our aim is to give our consumers access to a platform that is practical and simple to use. We are committed to providing a safe and secure environment for our users. We provide on-campus and off-campus services to our current students and alumini.  Whether you're looking for electronics, clothing, or  you want to sell your items to others then you'll be sure to do it on our marketplace. It is also a place to learn new things by joinig or creating clubs.  And if you're ever not satisfied with a purchase, our Business owners  are always available to help. You have come to the correct site if you're seeking for a reputable, user-friendly, and comprehensive internet marketplace.  So what are you waiting for? Start shopping today! We appreciate you visiting our website, and we hope you will find our marketplace useful.  Thank you.</p>
            <a href="#" className="hero-btn-abs">Visit Us to know More</a>
          </div>
          <footer>
            <p>SIGNED IN AS STUDENT</p>
          </footer>
        </section>
      </div>
    );
  }
}
export default AboutUs;