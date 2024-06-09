import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Packages from "../Pages/Package/Packages";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Chatbot1 from "../Pages/Chatbot1";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path:"/package",
                element:<Packages/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/chat",
                element:<Chatbot1/> 
            }
        ]
    },
]);


export default router;