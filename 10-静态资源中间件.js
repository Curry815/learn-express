// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello express');
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})