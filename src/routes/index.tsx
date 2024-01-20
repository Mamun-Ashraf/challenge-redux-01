import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;