import Home from "../pages/Home";
import TodoList from "../pages/TodoList";

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/todoList",
        element: <TodoList/>
    }
];


export default routes;
