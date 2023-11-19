const express = require('express')
const router = express.Router();
const history = require('../controllers/history')

// http://localhost:3000/withdraw/history
router.get('/history/:country',  history.historyAlarmNum)
router.get('/history',  history.historyAlarm)
router.get('/alarmNow',  history.alarmNow)


module.exports = router