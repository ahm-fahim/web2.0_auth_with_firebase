import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./Error";
import Layout from "./layout/Layout";
import LoginForm from "./components/LoginForm/LoginFrom";
import RegiForm from "./components/RegiForm/RegiForm";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Blog from "./pages/Blog";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/login",
                    element: <LoginForm />,
                },
                {
                    path: "/register",
                    element: <RegiForm />,
                },
                {
                    path: "/blog",
                    element: (
                        <PrivateRoute>
                            <Blog />
                        </PrivateRoute>
                    ),
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
