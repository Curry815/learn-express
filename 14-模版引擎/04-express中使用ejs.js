// 导入express
const express = require('express');
// 导入path
const path = require('path');

// 创建应用对象
const app = express();
// 1.设置模版引擎
app.set('view engine', 'ejs'); // pug twing
// 2.设置模版文件存放位置
app.set('views', path.resolve(__dirname, './views'));

// 创建路由
app.get('/home', (req, res) => {
    // 3.render响应
    // res.render('模版的文件名', '数据');
    // 声明变量
    let title = '这是一个标题';
    res.render('home', { title });
    // 4.创建模版文件
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})