import {Navigate, useRoutes} from "react-router-dom";
import {RouteObject} from "@/router/interface";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Layout from "@/layouts/index";

const LayoutIndex = () => <Layout/>;

export const rootRouter: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        element: <LayoutIndex/>,
        children: [
            {
                path: "/home/index",
                element: <Home/>,
                meta: {
                    requiresAuth: true,
                    title: "首页",
                    key: "home"
                }
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>,
        meta: {
            requiresAuth: false,
            title: "登录页",
            key: "login"
        }
    },
    // {
    //     path: "*",
    //     element: <Navigate to="/404" />
    // }
];

const Router = () => {
    // @ts-ignore
    return useRoutes(rootRouter);
}

export default Router;