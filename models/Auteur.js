const mongoose=require('mongoose')
const auteurSchema=new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50,
        trim:true
    },
    prenom:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50,
        trim:true
    },
    bio:String

},
{
  timestamps:true  
})
module.exports=mongoose.model('auteur',auteurSchema)