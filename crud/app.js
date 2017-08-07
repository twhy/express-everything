const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));      // 设置 views 目录路径
app.set('view engine', 'pug');                        // 使用 pug 作为模板引擎

app.use(express.static('public'));
app.use(bodyParser.json());                           // application/json
app.use(bodyParser.urlencoded({ extended: false }));  // application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/cats', function(req, res) {
  res.json([
    { name: "the Dinotocat", image: "https://octodex.github.com/images/dinotocat.png" },
    { name: "the Benjamin Bannekat", image: "https://octodex.github.com/images/bannekat.png" }
  ]);
});

app.post('/cats', function(req, res) {
  console.log(req.body);
  res.json({
    message: `新增 ${req.body.name} 成功`
  });
});

app.put('/cats/:name', function(req, res) {
  res.json({
    message: `修改 ${req.params.name} 成功`
  });
});

app.delete('/cats/:name', function(req, res) {
  res.json({
    message: `删除 ${req.params.name} 成功`
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});