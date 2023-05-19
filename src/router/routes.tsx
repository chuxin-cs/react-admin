import Home from "../pages/Home";
import UseBooleanPages from "../pages/Hooks/useBoolean";

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/useBoolean",
        element: <UseBooleanPages/>
    }

];


export default routes;
