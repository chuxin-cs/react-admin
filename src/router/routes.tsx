import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import Cart from "../pages/Cart";
import Demo from "../pages/Demo";
import Search from "../pages/Search";

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
    },
    {
        path: "/search",
        element: <Search />
    }
];


export default routes;
