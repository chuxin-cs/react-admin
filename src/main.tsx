import React from 'react'
import ReactDOM from 'react-dom/client'

// 路由
import router from './router';
import {RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RouterProvider router={router}/>
)
