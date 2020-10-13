const mongoose = require('mongoose')
const tagSchema = mongoose.Schema({
   
    title:{
        type:String,
        unique:true
    },
    timeCreated:{
        type: Number,
        required: true
    },
    timeUpdated:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Tags',tagSchema)