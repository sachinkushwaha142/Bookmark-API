const mongoose = require('mongoose')
const bookmarkSchema = mongoose.Schema({
    link:{
        type:String,
        unique: true,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    timeCreated:{
        type: Number,
        required: true
    },
    timeUpdated:{
        type: Number,
        required: true
    },
    publisher:{
        type:String,
        required: true
    },

    tags: {
        type: Array,
    }
})
module.exports = mongoose.model('Bookmarks',bookmarkSchema)