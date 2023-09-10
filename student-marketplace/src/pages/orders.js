import React, { useEffect, useState } from "react";
import { Await, json, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Table, Button } from 'react-bootstrap'
import Header from "./Header";
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
// var navLinks = document.getElementByx`Id("navLinks");
function Orders() {
    const [data, setData] = useState([]);
    let id = localStorage.getItem('id');
    let item = { id }
    useEffect(() => {
        (async () => {
            let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/getOrdersforstudent", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            }
            );
            result = await result.json();
            setData(result);
            // console.log(returnFlag);

        })();
    }, [])
    
    return (
        <div>
            <section className="header">
                <Header />
                <h2 style={{ textAlign: "center" }} className="title">
                    Past Orders
                </h2>
                <div className="small-container" style={{ backgroundColor: "white", marginLeft: "20px" }}>
                    <Table style={{ width: '90%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
                        <thead>
                            <tr style={{ color: "white" }}>
                                <td></td>
                                <td>Product Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        {

                            data.map((item) => {
                                let returnmsg = " ";
                                if (item.returnbit == 1) {
                                    returnmsg = "Returned";
                                }
                                return (
                                    <tr>
                                        <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} /></td>
                                        <td>{item.pname}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{returnmsg}</td>
                                        <td><Button><Link to="/return" style={{ textDecoration: 'none' }}>Return</Link></Button></td>
                                    </tr>
                                );
                            }
                            )
                        }
                    </Table>
                </div>
                <footer>
                    <p>SIGNED IN AS STUDENT</p>
                </footer>
            </section>
        </div>

    );
}

export default Orders;