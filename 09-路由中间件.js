/**
 * 需求：针对 /admin /setting 的请求，要求 URL 携带code=521 参数，如未携带提示 [暗号错误]
 */


// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
// 前台
app.get('/home', (req, res) => {
    res.send('前台首页');
})

// 声明中间件
let checkCodeMiddleWare = (req, res, next) => {
    // 判断URL中是否code参数等于521
    if (req.query.code === '521') {
        next();
    } else {
        res.send('暗号错误');        
    }
};

// 后台
app.get('/admin', checkCodeMiddleWare, (req, res) => {
    res.send('后台首页');
})

// 后台设置
app.get('/setting', checkCodeMiddleWare, (req, res) => {
    res.send('设置首页');
})

app.all('*', (req, res) => {
    res.send(`<h1>404 Not Found</h1>`);
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})