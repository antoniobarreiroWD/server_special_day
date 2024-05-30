const router = require('express').Router();
const authRoutes = require('./auth.routes');
const specialDayRoutes = require('./specialDay.routes');
const usersRoutes = require('./users.routes');



router.use('/auth', authRoutes);
router.use('/specialday', specialDayRoutes);
router.use('/users', usersRoutes);

module.exports = router;
