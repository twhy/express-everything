const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json([
    { name: "the Dinotocat", image: "https://octodex.github.com/images/dinotocat.png" },
    { name: "the Benjamin Bannekat", image: "https://octodex.github.com/images/bannekat.png" }
  ]);
});

router.post('/', function(req, res) {
  res.json({ message: `新增 ${req.body.name}` });
});

router.put('/:name', function(req, res) {
  res.json({ message: `修改 ${req.params.name}` });
});

router.delete('/:name', function(req, res) {
  res.json({ message: `删除 ${req.params.name}` });
});

module.exports = router;