# 一个基于webpack\babel搭建的react开发框架
## 注意：此框架实现了多页开发
#### 运行开发环境： 
    npm install 
    npm run dev 
    
#### 打包生产： ####
    npm run build
#### redux introduce
+ 页面中reducer文件 存放的是处理action的方法
+ combineReducers函数 可以把多个 reducer方法合并为一个 返回出去 最后传给 createStore
+ action.js 是告诉reducer要触发的是哪一个 reducer
+ 具体太复杂了感觉，建议多看文档 文档介绍的比较详细，不懂地方 在浏览器打断点跟着走一遍就知道了。
+ 文档地址：http://www.redux.org.cn/docs/basics/UsageWithReact.html