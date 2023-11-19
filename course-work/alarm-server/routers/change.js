const express = require('express')
const routerChange = express.Router();
const change = require('../controllers/change')

// http://localhost:5000/api/alarm

routerChange.post('/alarm', change.Alarm )
routerChange.put('/changeAlarm',  change.allClearAlarm)

module.exports = routerChange