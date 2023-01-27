import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";


const Layout = () => {
    return (
        <div>
            <Navber/>
            <Outlet />
        </div>
    );
};

export default Layout;
