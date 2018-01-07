'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Accept a get request
router.get('/', function (req, res, next) {
    //res.render('index.html');
    res.send('Api works');
});

module.exports = router;