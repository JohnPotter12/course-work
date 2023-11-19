const history = require('../models/history')
const info = require('../models/info')
const errorHinder = require('../utils/errorHinder')


module.exports.historyAlarmNum = async function(req, res){
    try{
        const params = req.params.country
        const historyData = await history.find({country: params})
        res.status(200).json(historyData)
    }catch(e){
        errorHinder(res, e)
    }
}

module.exports.historyAlarm = async function(req, res){
    try{
        const historyData = await history.find()
        res.status(200).json(historyData)
    }catch(e){
        errorHinder(res, e)
    }
}

module.exports.alarmNow = async function(req, res){
    try{
        const alarmInfo = await info.find()
        res.status(200).json(alarmInfo)
    }catch(e){
        errorHinder(res, e)
    }
}