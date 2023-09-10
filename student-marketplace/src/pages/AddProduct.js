import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { useState } from "react";
function AddProduct() {
    const navigate = useNavigate();
    const [pname, setname] = useState("")
    const [image, setimage] = useState("")
    const [price, setprice] = useState("")
    const [Description, setDescription] = useState("")
    const BoId = localStorage.getItem('id');
    async function add() {

        console.warn(pname, image, price, BoId, Description);
        const formdata = new FormData();
        formdata.append('file', image);
        formdata.append('product_name', pname);
        formdata.append('price', price);
        formdata.append('description', Description);
        formdata.append('BusinessId', BoId);

        let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/addProduct", {
            method: 'POST',
            body: formdata, 
        });
        alert("Data stored");
        window.location.reload();

    }

    return (
        <><Header />
            <section className="header">
                <h1 style={{ textAlign: "center", color: "white" }}> Add Product </h1>
                <div className="product-container">
                    <form action="/action_page.php">
                        <div className="create-row">
                            <div className="create-col25">
                                <label htmlFor="fname"> Product Name</label>
                            </div>
                            <div className="create-col">
                                <input
                                    type="text"
                                    id={pname}
                                    onChange={(e) => setname(e.target.value)}
                                    name="firstname"
                                    placeholder="Your name.."

                                />
                            </div>
                        </div>
                        <div className="create-row">
                            <div className="create-col25">
                                <label htmlFor="lname">Upload Image</label>
                            </div>
                            <div className="create-col">
                                <input type="file" id={image} onChange={(e) => setimage(e.target.files[0])} />
                            </div>
                        </div>
                        <div className="create-row">
                            <div className="create-col25">
                                <label htmlFor="lname">Price</label>
                            </div>
                            <div className="create-col">
                                <input type="text" id={price} onChange={(e) => setprice(e.target.value)} />
                            </div>
                        </div>
                        <div className="create-row">
                            <div className="create-col25">
                                <label htmlFor="lname">Business Owner ID</label>
                            </div>
                            <div className="create-col">
                                <input type="text" id={BoId} defaultValue = {localStorage.getItem('id')} />
                            </div>
                        </div>
                        <div className="create-row">
                            <div className="create-col25">
                                <label htmlFor="subject">Description</label>
                            </div>
                            <div className="create-col">
                                <textarea
                                    id={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    name="subject"
                                    placeholder="Write something.."
                                    style={{ height: 200 }}
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="create-row">
                            <input type="button" defaultValue="Submit" onClick={add} />
                        </div>
                    </form>
                </div>
                <footer></footer>
            </section>
        </>

    );
}
export default AddProduct;