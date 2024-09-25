// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 声明中间件
app.use((req, res, next) => {
    // 检测请求头中的referer是否为127.0.0.1
    // 获取referer
    let referer = req.get('referer');
    if (referer) {
        // 实例化
        let url = new URL(referer);
        // 获取hostname
        let hostname = url.hostname;
        // 判断
        if (hostname !== '127.0.0.1') {
            // 响应404
            res.status(404).send('404 Not Found');
            return;
        }
    }
    next();
});

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})