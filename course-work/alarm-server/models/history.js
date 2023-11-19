const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const history = new Schema({
    country: {
        type: String,
        required: true
    },
    startAlarm:{
        type: String
    },
    allClearAlarm: {
        type: String
    }
});

module.exports = mongoose.model('history', history)