var express = require('express');
var router = express.Router();



/* GET fruit page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Pug templates to dynamically generate web pages on the server side" }); // Assuming you have a fruitsArray with fruit data
});

module.exports = router;
