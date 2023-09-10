import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showMenu } from "../App";
import { hideMenu } from "../App";
import Header from "./Header";
import { Table, Button } from 'react-bootstrap';
import $, { data } from "jquery";
import { useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { Component } from "react";
const clientsocket = new io("http://localhost:3000/bochat");
console.warn('socekt', io);
class BoChat extends Component {

    constructor() {
        super();
        this.state = {
            connectd: false
        }
    }
    componentDidMount()
    {
        clientsocket.on("new_message",data=>{
             console.warn("chat msg is",data)
        });
    }
    render() {

        return (
            <>
                <Header />
                <div style={{ textAlign: "center", color: "black" }}>
                    <h1>Receive Chat Message</h1>
                    <div>
                        {
                            this.state.connectd ?
                                <div>{this.state.message}</div>
                                : <div>Waiting For connection</div>
                        }
                    </div>

                </div>
            </>
        );
    }
}

export default BoChat;