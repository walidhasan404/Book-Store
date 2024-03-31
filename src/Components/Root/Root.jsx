import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;