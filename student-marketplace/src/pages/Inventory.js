import React, { useEffect, useState } from "react";
import { Await, json, Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import { Table, Button } from 'react-bootstrap'
import Header from "./Header";
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
function Inventory() {
    let navigate = useNavigate();
    let role = JSON.parse(localStorage.getItem('role'))
    
    const [data, setData] = useState([]);
    const businessowner = localStorage.getItem('id');
    let item = { businessowner };
    console.log(item);
    async function deleteItem(id) {
        let productid = { id }
        console.log(productid);
        let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/deleteProduct", {
            method: 'POST',
            body: JSON.stringify(productid),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json '
            }
        })
        window.location.reload();
    }
    useEffect(() => {
        (async () => {
            let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/listProduct", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json '
                }
            }
            );
            result = await result.json();
            setData(result);
        })();
    }, [])

    // const handleSumbit = () => {


    //     $.ajax({
    //         type: "POST",
    //         url: "https://sxd4369.uta.cloud/ecom-backend/api/listProduct",
    //         success(data) {
    //             console.log(data);
    //         },
    //     });
    // };
    // // console.log(data);
    // handleSumbit();


    return (
        <>

            <section className="header">
                <Header />
                <h1 style={{ textAlign: "center" }}>INVENTORY</h1>
                <div className="col-sm-10 offset-sm-1">
                    <Table style={{ width: '95%', backgroundColor: 'white', color: 'black', textAlign: 'center', marginBottom: '10px', padding: '10px;' }} striped bordered hover variant="dark" >
                        <thead>
                            <tr style={{color : "white"}}>
                                <td></td>
                                <td>Product Name</td>
                                <td>Price</td>
                                <td></td>

                            </tr>
                        </thead>
                        {
                            data.map((item) =>
                                <tr>
                                    <td><img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/" + item.image} /></td>
                                    <td>{item.pname}</td>
                                    <td>{item.price}</td>
                                    <td onClick={() => deleteItem(item.id)}><Button>Delete</Button></td>
                                </tr>

                            )

                        }
                        <tbody>
                            <tr>
                                <Button style={{ marginLeft: '100%', width: '110px', marginTop:'20px' }}> <Link to="/addproduct" style={{ textDecoration: 'none' }}>AddProduct</Link></Button>
                            </tr>

                        </tbody>
                    </Table>
                </div>



                <footer>
                    <p>SIGNED IN AS STUDENT</p>
                </footer>
            </section>
        </>

    );
}

export default Inventory;