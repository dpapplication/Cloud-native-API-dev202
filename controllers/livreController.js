const Livre=require('../models/Livre')

/***-----------------------------
 * @description ajouter un livre
 * @router /livre
 * @method POST
 -----------------------------*/
module.exports.createLivre=async(req,res)=>{
    try {
        const newLivre=await Livre.create(req.body)
        res.status(201).json(newLivre)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}