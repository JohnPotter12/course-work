const express = require('express');
const morgan = require('morgan');
const body = require('body-parser')
const mongoose = require('mongoose')
// const passport = require('passport')
const app = express();

const routerChange = require('./routers/change')
const history = require('./routers/history-alarm')

mongoose.connect("mongodb+srv://mgoncar251:JpbfNUI2DW794yQA@cluster0.nr1trru.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("connect mongo"))
.catch((error) => console.log(error))

// app.use(passport.initialize())
// require('./midleware/passport')(passport)

app.use(morgan('dev'));
app.use(require('cors')())
app.use(body.urlencoded({extended:true}));
app.use(body.json());

app.use('/api', routerChange);
app.use('/withdraw', history);

module.exports = app;
