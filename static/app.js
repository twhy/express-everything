const express = require('express');
const app = express();

app.use(express.static('public'));    // public 文件夹存放静态文件如 CSS 图片等

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});