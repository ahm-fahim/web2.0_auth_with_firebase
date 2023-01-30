import React from "react";
import MainLayout from "../layout/MainLayout";

const ErrorPage = () => {
    return (
        <MainLayout>
            <div className="d-flex align-items-center justify-content-center mt-5">
                <h1 className="display-1 text-danger">Sorry 404 not found!</h1>
            </div>
        </MainLayout>
    );
};

export default ErrorPage;
