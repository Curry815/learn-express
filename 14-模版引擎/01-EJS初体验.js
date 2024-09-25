// 1.安装 EJS
// 2.导入 EJS
const ejs = require('ejs');
const fs = require('fs');

// 字符串
let china = '中国';
// let str = `我爱你 ${china}`;
let weather = '今天天晴~~';

// 声明变量
// let str = '我爱你 <%= china %>';
let str = fs.readFileSync('./01-html.html').toString();

// 使用ejs渲染
let result = ejs.render(str, { china: china, weather });
console.log(result);
