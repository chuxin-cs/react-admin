import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import Cart from "../pages/Cart";
import Demo from "../pages/Demo";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/todoList",
        element: <TodoList />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/demo",
        element: <Demo />
    }
];


export default routes;
