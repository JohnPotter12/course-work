const history = require('../models/history');
const Info = require('../models/info')
const errorHinder = require('../utils/errorHinder')
const getCurrentTime = require('./time')
const { ObjectId } = require('mongodb')

module.exports.Alarm = async function (req, res) {
    try {

        const count = await Info.findOne({ country: req.body.country})
        if(!count){
            const info = await new Info({
            country: req.body.country,
            isAlarmNow: req.body.isAlarmNow,
            startAlarm: getCurrentTime(),
            allClearAlarm: ''
        }).save()

        const historyInfo = await new history({
            country: req.body.country,
            isAlarmNow: req.body.isAlarmNow,
            startAlarm: getCurrentTime(),
            allClearAlarm: ''
        }).save()
        
        res.status(200).json({ info, historyInfo })
        }

        res.status(404).json({
            mesage: 'Тривога а даній області вже є'
        })

        
    } catch (e) {
        errorHinder(res, e)
    }
}

module.exports.allClearAlarm = async function (req, res) {
    try {
        const id = new ObjectId(req.body._id)
        const info = await Info.findOneAndUpdate(
            { country: req.body.country },
            { allClearAlarm: getCurrentTime() },
            { new: true }
        )
        if (req.body.isAlarmNow === 'false') {
            const infoDelete = await Info.deleteOne({ country: req.body.country })

        }

        const historyInfo = await history.findOneAndUpdate(
            { _id: id },
            { allClearAlarm: getCurrentTime() },
            { new: true }
        )

        res.status(200).json({ historyInfo, info })
    } catch (e) {
        errorHinder(res, e)
    }
}