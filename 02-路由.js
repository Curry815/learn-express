// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello express');
})

app.get('/', (req, res) => {
    res.end('home');
})

app.post('/login', (req, res) => {
    res.end('login');
})

// 匹配所有方法
app.all('/test', (req, res) => {
    res.end('test');
})

// 404 响应
app.all('*', (req, res) => {
    res.end('404 not found');
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})