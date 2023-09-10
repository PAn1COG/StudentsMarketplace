import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
class ContactUs extends React.Component {
  render() {
    return (
      <section className="header">
        <Header/>
        <div className="contact-section">
          <h1>CONTACT US</h1>
          <form className="contact-form" action="index.html" method="post">
            <label htmlFor="studentID">YOUR NAME</label>
            <input type="text" className="contact-form-text" defaultValue="" />
            <label htmlFor="studentID">YOUR STUDENT ID</label>
            <input type="text" className="contact-form-text" defaultValue="" />
            <label htmlFor="studentID">YOUR EMAIL</label>
            <input type="text" className="contact-form-text" defaultValue="" />
            <label htmlFor="studentID">YOUR RESPONSE</label>
            <textarea
              className="contact-form-text"
              placeholder=""
              defaultValue={""}
            />
            <input
              type="button"
              className="contact-form-button"
              defaultValue="SEND"
            />
          </form>
        </div>
        <footer>
          <p>SIGNED IN AS STUDENT</p>
        </footer>
      </section>

    );
  }
}
export default ContactUs;