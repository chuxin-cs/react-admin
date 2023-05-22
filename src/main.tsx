import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// css 样式
import "./styles/index.less";
import 'antd/dist/reset.css';

// 挂载
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)
