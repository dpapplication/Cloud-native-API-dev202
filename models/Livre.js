const mongoose = require('mongoose')
const livreSchema=new mongoose.Schema({
    titre:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    categorie:{
        type:String,
        required:true,
        enum:["Sport","Programmation","Design"]
    },
    image:String,
    auteur:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"auteur",
        required:true
    }
},{
    timestamps:true
})
module.exports =mongoose.model('livre',livreSchema)