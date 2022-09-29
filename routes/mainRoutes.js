const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const homeRouter = require('./homeRouter');

router.use('/users', userRouter);
router.use('/', homeRouter);

module.exports = router;