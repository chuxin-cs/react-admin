import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {RouterProvider} from 'react-router-dom';
import router from './router';

// css 样式
import "./styles/index.less";
import 'antd/dist/reset.css';

// 挂载
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)
