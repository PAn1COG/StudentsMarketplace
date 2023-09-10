import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { useState } from "react";
function CreateAD() {
    const navigate = useNavigate();
    const [image, setimage] = useState("");
    const [addata, setinfo] = useState("");
    async function add() {
        console.warn( image, addata);
        const formdata = new FormData();
        formdata.append('file', image);
        formdata.append('addata', addata);

        let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/addAd", {
            method: 'POST',
            body: formdata, 
        });
        alert("Data stored");
        window.location.reload();
    }

    return (
        <><Header />
            <section className="header">
                <h1 style={{ textAlign: "center", color: "white" }}> Add Advertisement </h1>
                <div className="product-container">
                    <form action="/action_page.php">
                        <div className="create-row">
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
                                <label htmlFor="subject">Description</label>
                            </div>
                            <div className="create-col">
                                <textarea
                                    id={addata}
                                    onChange={(e) => setinfo(e.target.value)}
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
export default CreateAD;