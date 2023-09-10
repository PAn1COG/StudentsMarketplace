import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
class Footer extends React.Component {
    render() {
        return (
            <footer className="section-p1">
                <div className="col-p1">
                    <h4>Contact</h4>
                    <a href="contact.html">Contact us</a>
                    <p>
                        <strong>Address:</strong>abcdsfkewdgesgueskg
                    </p>
                    <p>
                        <strong>Phone:</strong>abcdsfkewdgesgueskg
                    </p>
                    <div className="follow-p1">
                        <h4>Follow Us</h4>
                        <div className="icon-1">
                            <i className="fab fa-facebook-f" />
                            <i className="fab fa-twitter" />
                            <i className="fab fa-instagram" />
                            <i className="fab fa-youtube" />
                        </div>
                    </div>
                </div>
                <div className="col-p1">
                    <h4>About</h4>
                    <a href="aboutus.html">About us</a>
                    <a href="tnc">Terms &amp; Conditions</a>
                    <a href="privacypolicy.html">Privacy Policy</a>
                </div>
                <div className="col-p1">
                    <h4>My Account</h4>
                    <a href="signin.html">Sign In</a>
                    <a href="help.html">Help</a>
                </div>
            </footer>

        );
    }
}
export default Footer;















