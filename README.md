# ⚡ 简介
一个免费开源的中后台管理系统基础解决方案，基于 React18、Hooks、TypeScript、Antd 和 Vite 等主流技术

# 🌱 特性
- React：采用 React18 API
- Hooks：新的写法
- Antd: 阿里巴巴UI库
- Vite：构建速度No1
- TypeScript：JavaScript 语言的超集
- PNPM：更快速的，节省磁盘空间的包管理工具
- Less：和 Antd 保持一致
- CSS 变量：主要控制项目的布局和颜色
- ESlint：代码校验
- Prettier：代码格式化
- Axios：发送网络请求

# 🍰 功能
- 错误页面: 403、404

# 🚀 开发
```shell
# 配置
1. 一键安装 .vscode 目录中推荐的插件
2. node 版本 16+
3. pnpm 版本 8.x

# 克隆项目
git clone https://github.com/chuxin-cs/react-admin

# 进入项目目录
cd react-admin

# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

# 📦️ 多环境打包
```shell
# 构建预发布环境
pnpm build:stage

# 构建正式环境
pnpm build:prod
```