// 导入 jwt
const jwt = require('jsonwebtoken');

// 创建(生成) token jwt.sign(用户数据, 加密字段串, 配置对象)
// const token = jwt.sign({
//   name: 'zhangsan',
// }, 'zyy',{
//     expiresIn: 60 * 60 // 单位为秒
// });

// console.log(token);

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiemhhbmdzYW4iLCJpYXQiOjE3Mjc0MzEwNzYsImV4cCI6MTcyNzQzNDY3Nn0.wrWtD6XmmuqPhbO23-3KbZQ4ZKR3_yAcYQThpWltju4';

// 校验 token
jwt.verify(t, 'zyy', (err, data) => {
    if(err){
        console.log('校验失败');
        return;
    }else{
        console.log(data); // { name: 'zhangsan', iat: 1727431076, exp: 1727434676 }
    }
})

