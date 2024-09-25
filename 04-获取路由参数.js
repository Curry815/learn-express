// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/:id.html', (req, res) => {
    // 获取URL路由参数
    console.log(req.params.id);
    
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('商品详情...');
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})