'use strict';

var router = require('express').Router();
var morgan = require('morgan');

morgan.token('me', function (req) {
  if (req.user) return req.user.name;
  else return '(visitor)';
});

router.use(morgan(':method :url :me :status :response-time ms - :res[content-length]'));

module.exports = router;
