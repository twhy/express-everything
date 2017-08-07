const express = require('express');     // 引入 express 模块
const app = express();                  // 新建 express app

app.get('/', function(req, res) {       // 处理 '/' 的 GET 请求
  res.send('Hello Express!');           // 返回 'Hello Express!'
});

app.listen(3000, function() {           // 监听端口 3000
  console.log('服务器运行在端口 3000');
});