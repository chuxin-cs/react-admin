import React from 'react';
import {HashRouter} from "react-router-dom";
import {ConfigProvider} from 'antd';
import zhCN from "antd/locale/zh_CN";
import Router from "@/router/index";

const App: React.FC = (props: any) => {
    return (
        <HashRouter>
            <ConfigProvider locale={zhCN}>
                <Router/>
            </ConfigProvider>
        </HashRouter>
    );
};

export default App;