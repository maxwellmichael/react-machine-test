import { RouterProvider } from "react-router-dom";

import router from ".";

export const Router = () => {

    return (
        <RouterProvider router={router} />
    )
};