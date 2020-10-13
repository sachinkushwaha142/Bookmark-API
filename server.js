const express=require('express')

const app=express()
//app.use(express.json())
const PORT=process.env.PORT || 8080



const bodyParser = require('body-parser');


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const Tag = require('./api/models/tagModel.js') //created model loading here
const Bookmark = require('./api/models/bookmarkModel.js')
mongoose.connect('mongodb://localhost/bookmark')





var tagRoutes = require('./api/routes/tagRoutes.js'); //importing route
app.use("/api",tagRoutes)

var bookmarkRoutes = require('./api/routes/bookmarkRoutes.js');
app.use("/api",bookmarkRoutes)
app.listen(PORT,console.log("Server is starting at PORT "+PORT))