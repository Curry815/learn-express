// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/other', (req, res) => {
    // 跳转响应
    // res.redirect('http://www.baidu.com');
    // 下载响应
    // res.download(__dirname + '/package.json');
    // JSON 响应
    // res.json({
    //     name: 'curry',
    //     slogon: '我在学习express'
    // });
    // 响应文件内容
    res.sendFile(__dirname + '/05-test.html'); // 也可以使用绝对路径 path.resolve(__dirname, '05-test.html')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})