const { Router } = require('express');
const gramRouter = require('./gram');
const userRouter = require('./user');

const router = Router();

router.use('/gram', gramRouter);
router.use('/user', userRouter);

router.use((req, res, next) => {
    const err = new Error('path not found');
    err.status = 404;
    next(err);
})
  
module.exports = router;