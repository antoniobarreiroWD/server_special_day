
const express = require('express');
const router = express.Router();
const passport = require('passport');
const specialDayController = require('../controllers/specialDay.controller');

router.post('/create', passport.authenticate('jwt', { session: false }), specialDayController.createSpecialDay);

router.get('/list', passport.authenticate('jwt', { session: false }), specialDayController.getAllSpecialDays);

router.get('/show/:id', passport.authenticate('jwt', { session: false }), specialDayController.getOneSpecialDay);

router.put('/edit/:id', passport.authenticate('jwt', { session: false }), specialDayController.updateSpecialDay);

router.get('/user-specialday', passport.authenticate('jwt', { session: false }), specialDayController.getUserSpecialDay);

router.post('/add-guest', passport.authenticate('jwt', { session: false }), specialDayController.addGuest);

router.post('/add-service', passport.authenticate('jwt', { session: false }), specialDayController.addService);

module.exports = router;
