const router = require('express').Router();
const { order } = require('./order.controller');

router.post('/', order);

module.exports = router;