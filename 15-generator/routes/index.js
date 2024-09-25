var express = require('express');
var router = express.Router();
// 导入
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的表单
router.get('/portrait', (req, res) => {
  res.render('portrait');
})

// 处理文件上传
router.post('/portrait', (req, res) => {
  // 创建 form 对象
  const form = formidable({
    multiples: true,
    // 设置文件上传的保存目录
    uploadDir: __dirname + '/../public/images',
    // 保留文件扩展名
    keepExtensions: true
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields); // text radio checkbox select
    // console.log(files); // file
    // 服务器保存该图片的访问URL
    // /images/99a22c54ddb0ce72664702e00.jpg
    // files中的portrait指的是表单中的文件input框的name属性
    let url = '/images/' + files.portrait.newFilename;

    res.send(url);
  });
})

module.exports = router;
