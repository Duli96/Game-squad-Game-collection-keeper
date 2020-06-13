const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    gName :{
        type:String,
        required:true
    },
    gCategory:{
        type:String,
        required:true
    },
    ageRange:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
       required:true
    },


});

module.exports = mongoose.model('gameDetails',GameSchema);