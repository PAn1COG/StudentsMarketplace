import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { useState } from "react";
function AddClub() {
    const navigate = useNavigate();
    const [CNAME, setname] = useState("")
    const [image, setimage] = useState("")
    const [info, setinfo] = useState("")
    async function add() {
        console.warn(CNAME, image, info);
        const formdata = new FormData();
        formdata.append('cname', CNAME);
        formdata.append('image', image);
        formdata.append('information', info);

        let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/addclub", {
            method: 'POST',
            body: formdata, 
        });

        alert("Data stored");
        window.location.reload();

    }

    return (
        <><Header />
            <section className="header">
                <h1 style={{ textAlign: "center", color: "white" }}> Add Club </h1>
                <div className="product-container">
                    <form action="/action_page.php">
                        <div className="create-row">
                            <div className="create-col25">
                                <label htmlFor="fname"> Club Name</label>
                            </div>
                            <div className="create-col">
                                <input
                                    type="text"
                                    id={CNAME}
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
                                <label htmlFor="subject">Description</label>
                            </div>
                            <div className="create-col">
                                <textarea
                                    id={info}
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
export default AddClub;