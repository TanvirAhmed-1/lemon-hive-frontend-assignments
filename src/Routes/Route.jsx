import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import AllCharacter from "../Components/AllCharacter";
import CharacterDetails from "../Components/CharacterDetails";

const Route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>
    },
    {
        path:"/AllCharacters",
        element:<AllCharacter></AllCharacter>
    },
    {
        path:"/Character/:id",
        element:<CharacterDetails></CharacterDetails>
    }
])

export default Route;