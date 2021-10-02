/*  File Name: app.css
    Student Name: Lea Marie Magbalot
    Student ID: 301145757
    Date: October 1, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is a user level site.');
});

module.exports = router;
