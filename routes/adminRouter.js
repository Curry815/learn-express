// 导入express
const express = require('express'); 

// 创建路由对象
const router = express.Router();

// 创建路由规则
// 后台
router.get('/admin', (req, res) => {
    res.send('后台首页');
})

// 后台设置
router.get('/setting', (req, res) => {
    res.send('设置首页');
})


// 暴露 router
module.exports = router;
