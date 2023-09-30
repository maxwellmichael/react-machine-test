import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import MasterForm from "../Pages/MasterForm";
import Users from "../Pages/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MasterForm />
            },
            {
                path: '/users',
                element: <Users/>
            },
        ]
    }
])

export default router;