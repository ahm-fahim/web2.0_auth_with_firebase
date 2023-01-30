import React from "react";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;
