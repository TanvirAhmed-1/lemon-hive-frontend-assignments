import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";

const Route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>
    },
])

export default Route;