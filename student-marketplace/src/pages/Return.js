import React, { useEffect, useState } from "react";
import { Await, json, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Table, Button } from 'react-bootstrap'
import Header from "./Header";
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
function Return() {
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
        })();
    }, [])
    async function handlereturn(productid) {
        productid = JSON.stringify(productid);
        console.log(localStorage.getItem('id'));
        let studentid = localStorage.getItem('id');
        item = { productid, studentid }
        console.log(item);
        let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/productReturn", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        // alert('Return Initiated');
    }
    return (
        <section className="header">
            <Header />
            <h1 style={{ textAlign: "center" }}>RETURNS</h1>
            <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
                <thead>
                    <tr style={{ color: "white" }}>
                        <td></td>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td></td>

                    </tr>
                </thead>
                {
                    data.map((item) =>
                        <tr>
                            <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} /></td>
                            <td>{item.pname}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><Button style={{ textAlign: "center", width: "150px" }} onClick = {()=>handlereturn(item.id)}>Initiate Return</Button></td>
                        </tr>

                    )

                }
            </Table>


        </section>


    );
}

export default Return;
