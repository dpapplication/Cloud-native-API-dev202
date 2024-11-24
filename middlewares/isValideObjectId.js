const mongoose=require('mongoose')
function valideId(req,res,next){
    if(mongoose.isValidObjectId(req.params.id))
        next()
    else
    res.status(400).json({message:"id non valide"})
}
module.exports=valideId