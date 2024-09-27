// 导入express
const express = require('express');
//2. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');

// 创建应用对象
const app = express();

//3. 设置 session 的中间件
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'zyy', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 60 // 过期时间 单位是毫秒
    },
}));

app.get('/login', (req, res) => {
    // username=admin&&password=admin
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        // 登录成功
        // 设置session
        req.session.username = 'admin';
        req.session.uid = 'adascafsdgscx';
        res.send('登录成功');
    } else {
        // 登录失败 
        res.send('登录失败');
    }
})

// 读取 session
app.get('/cart', (req, res) => {
    // 检测session是否存在用户数据
    if (req.session.username) {
        res.send(`欢迎回来 ${req.session.username}`);
    } else {
        res.end('您还没有登录，请先登录')
    }
})

// 销毁 session
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('成功退出');
    });
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})