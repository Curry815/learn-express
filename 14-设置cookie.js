// 导入express
const express = require('express');
const cookieParser = require('cookie-parser');

// 创建应用对象
const app = express();
app.use(cookieParser());

// 创建路由
app.get('/set-cookie', (req, res) => {
    res.cookie('name', 'zhangsan', {maxAge: 60 * 60 * 24 * 7});
    res.cookie('theme', 'pink');
    res.end('home');
})

// 删除cookie
app.get('/remove-cookie', (req, res) => {
    // 用户登录退出时，删除cookie
    res.clearCookie('name');
    res.send('删除cookie成功');
})

// 获取cookie
app.get('/get-cookie', (req, res) => {
    res.send(`欢迎您 ${req.cookies.name}`);
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})