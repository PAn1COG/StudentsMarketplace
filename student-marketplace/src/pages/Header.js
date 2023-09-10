import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
function Header(){


        
        let role = JSON.parse(localStorage.getItem('role'))
        
        let navigate = useNavigate();
        function logout(){
            localStorage.clear();
            navigate('/login');
        }
        // console.log(user.name)
        if (localStorage.getItem("role") === null) {
            return (
                <nav className="header-nav-bar">
                    <a href="index.html">
                        <img
                            src="css/images/logo.png"
                            className="logo"
                            width="80px"
                            height="80px"
                        />
                    </a>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times" onClick={hideMenu} />
                        <ul>
                            <li>
                                <Link to="/index">HOME</Link>
                            </li>
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                            <li>
                                <Link to="/aboutus">AboutUs</Link>
                            </li>
                            <li>
                                <Link to="/contactus">ContactUs</Link>
                            </li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" onClick={showMenu} />
                </nav>
            );
        }
        else if (role.localeCompare("student") == 0) {
            return (
                <div>
                    <nav className="header-nav-bar">
                        <a href="index.html">
                            <img
                                src="css/images/logo.png"
                                className="logo"
                                width="80px"
                                height="80px"
                            />
                        </a>
                        <div className="nav-links" id="navLinks">
                            <i className="fa fa-times" onClick={hideMenu} />
                            <ul>
                                <li>
                                    <Link to="/index">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link to="/clubs">Clubs</Link>
                                </li>
                                <li>
                                    <Link to="/orders">Orders</Link>
                                </li>
                                <li>
                                    <a href="http://sxg4476.uta.cloud/uncategorized/blog-home/">Blog</a>
                                </li>
                                <li>
                                    <Link to="/studentprofile">Profile</Link>
                                </li>
                                <li>
                                    <a href="https://sxc2843.uta.cloud/">Chat</a>
                                </li>
                                
                                <li>
                                    <Link to="/" onClick={logout}>LogOut</Link>
                                </li>
                                <li>
                                    <img
                                        className="kart"
                                        src="css/images/kart.png"
                                        onClick={(e) => { e.preventDefault(); window.location.href = '/kart'; }}
                                        width="20px"
                                        height="20px"
                                    />
                                </li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={showMenu} />
                    </nav>
                </div>
            );

        }
        else if (role.localeCompare("schooladmin") == 0) {
            return (
                <div>
                    <nav className="header-nav-bar">
                        <a href="index.html">
                            <img
                                src="css/images/logo.png"
                                className="logo"
                                width="80px"
                                height="80px"
                            />
                        </a>
                        <div className="nav-links" id="navLinks">
                            <i className="fa fa-times" onClick={hideMenu} />
                            <ul>
                                <li>
                                    <Link to="/index">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">Products</Link>
                                </li>
                                <li>
                                    <Link to="/login">Advertisements</Link>
                                </li>
                                <li>
                                    <Link to="/schooladmin">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={logout}>LogOut</Link>
                                </li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={showMenu} />
                    </nav>
                </div>
            );
        }
        else if (role.localeCompare("businessowner") == 0) {
            return (
                <div>
                    <nav className="header-nav-bar">
                        <a href="index.html">
                            <img
                                src="css/images/logo.png"
                                className="logo"
                                width="80px"
                                height="80px"
                            />
                        </a>
                        <div className="nav-links" id="navLinks">
                            <i className="fa fa-times" onClick={hideMenu} />
                            <ul>
                                <li>
                                    <Link to="/index">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/">Posts</Link>
                                </li>
                                <li>
                                    <Link to="/inventory" >Products</Link>
                                </li>
                                <li>
                                    <Link to="/boorders">Orders</Link>
                                </li>
                                <li>
                                    <Link to="/bohome" >Profile</Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={logout}>LogOut</Link>
                                </li>
                                <li>
                                    <a href="https://sxc2843.uta.cloud/">Chat</a>
                                </li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={showMenu} />
                    </nav>
                </div>

            );

        }
        else if (role.localeCompare("superadmin") == 0) {
            // console.warn(role)
            return (
                <div>
                    <nav className="header-nav-bar">
                        <a href="index.html">
                            <img
                                src="css/images/logo.png"
                                className="logo"
                                width="80px"
                                height="80px"
                            />
                        </a>
                        <div className="nav-links" id="navLinks">
                            <i className="fa fa-times" onClick={hideMenu} />
                            <ul>
                                <li>
                                    <Link to="/index">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/">Manage School Admins</Link>
                                </li>
                                <li>
                                    <Link to="/">Manage Business Owners</Link>
                                </li>
                                <li>
                                    <Link to="/">Manage Students</Link>
                                </li>
                                <li>
                                    <Link to="/">Reports</Link>
                                </li>
                                <li>
                                    <a href="https://sxc2843.uta.cloud/">Chat</a>
                                </li>
                                <li>
                                    <Link to="/superadmin">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={logout}>LogOut</Link>
                                </li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={showMenu} />
                    </nav>
                </div>

            );

        }
    }

export default Header;















