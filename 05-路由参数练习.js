// 导入express
const express = require('express');
// 导入 JSON
const { singers } = require('./singers.json');

// 创建应用对象
const app = express();

// 创建路由
app.get('/singer/:id.html', (req, res) => {
    // 获取路由参数
    let { id } = req.params;
    // 根据id查找歌手信息
    let singer = singers.find(item => {
        if (item.id === Number(id)) {
            return true;
        }
    });
    // 判断是否找到
    if (!singer) {
        res.statusCode = 404;
        res.end('404 Not Found');
        return;
    }
    
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>${singer.singer_name}</h1>
            <img src="${singer.singer_pic}}">
        </body>
        </html>
    `);
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})