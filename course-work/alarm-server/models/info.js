const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Info = new Schema({
    country: {
        type: String,
        required: true
    },
    isAlarmNow:{
        type: Boolean,
        required: true
    },
    startAlarm:{
        type: String,
        required: false 
    },
    allClearAlarm: {
        type: String,
    }
});

module.exports = mongoose.model('info', Info)