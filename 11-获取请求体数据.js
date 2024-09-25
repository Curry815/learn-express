/**
 * 需求：按照要求搭建HTTP服务
 * GET /login 显示表单网页
 * POST /login 获取表单中的[用户名]和[密码]
 */

// 导入express
const express = require('express');
const bodyParser = require('body-parser');

// 创建应用对象
const app = express();

//  解析JSON格式的请求体的中间件
// const jsonParser = bodyParser.json();

// 解析querystring格式的请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// 创建路由
app.get('/login', (req, res) => {
    // res.send('表单页面');
    // 响应HTML文件内容
    res.sendFile(__dirname + '/11-form.html')
})

app.post('/login', urlencodedParser, (req, res) => {
    // 获取用户和密码
    console.log(req.body);
    res.send('获取用户的数据');
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})