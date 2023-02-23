import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import { ProCartLoader } from "./loaders/ProCartLoader";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserContext from "./contexts/UserContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import Shipping from "./Pages/Shipping";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/orders",
        loader: ProCartLoader,
        element: <Orders />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/shipping",
        element: (
            <PrivateRoutes>
                <Shipping />
            </PrivateRoutes>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <UserContext>
            <RouterProvider router={router} />
        </UserContext>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
