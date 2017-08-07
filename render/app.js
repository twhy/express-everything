const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));      // 设置 views 目录路径
app.set('view engine', 'pug');                        // 使用 pug 作为模板引擎

const CATS = [
  { name: "the Dinotocat", image: "https://octodex.github.com/images/dinotocat.png" },
  { name: "the Benjamin Bannekat", image: "https://octodex.github.com/images/bannekat.png" },
  { name: "the Catstello", image: "https://octodex.github.com/images/catstello.png" }
];

app.get('/', function(req, res) {
  res.render('index', { cats: CATS });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});