import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {RouterProvider} from 'react-router-dom';

// css 样式
import "./styles/index.less";
import 'antd/dist/reset.css';

// 路由
import router from './router';

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
