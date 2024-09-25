/**
 * 需求：记录每个请求的url和ip地址
 */

// 导入express
const express = require('express');
const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express();

// 声明一个中间件函数 记录访问信息
function recordMiddleWare(req, res, next) {
    // 获取 url 和 ip 地址
    let { url, ip } = req;
    // 将信息保存在文件中access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
    // 调用next
    next();
}

// 使用中间件函数
app.use(recordMiddleWare);

// 创建路由
// 前台
app.get('/home', (req, res) => {
    res.send('前台首页');
})

// 后台
app.get('/admin', (req, res) => {
    res.send('后台首页');
})

app.all('*', (req, res) => {
    res.send(`<h1>404 Not Found</h1>`);
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})