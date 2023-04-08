import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';

// antd
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';


// 路由
import router from './router';
import {RouterProvider} from 'react-router-dom'


// index.css
import "./styles/index.css"


// 挂载
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ConfigProvider locale={zhCN}>
        {/*@ts-ignore*/}
        <App>
            <RouterProvider router={router}/>
        </App>
    </ConfigProvider>
)
