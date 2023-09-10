
import React from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { data } from "jquery";
function Index() {
  const [addata, setAdData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await fetch("https://sxd4369.uta.cloud/ecom-backend/api/fetchAd", {
        method: 'POST'
      }
      );
      result = await result.json();
      setAdData(result);
    })();
  }, [])
  return (
    <>
      <Header />
      <section className="header">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="text-box">
            <h1>Students MarketPlace</h1>
            <p>
              Get the safe and private platform for your Campus Community,
              <br />
              Make buing and selling easier than ever.
            </p>
            <a href="#" className="hero-btn">
              Visit Us to know More
            </a>
          </div>
          <div className="head-container-i">
            <h1 style={{ textAlign: "center" }}>ADVERTISEMENTS</h1>
            {
              addata.map((item =>

                <div className="container-i">
                  <div className="col-1"> <img src={"https://sxd4369.uta.cloud/ecom-backend/storage/app/"+item.image}></img></div>
                  <div className="col-2">
                    <h1>{item.addata}</h1>
                  </div>
                </div>

              ))
            }





          </div>
        </div>
      </section>
      <div>
        {/* <Footer/> */}
      </div>
    </>
  );
}
export default Index;