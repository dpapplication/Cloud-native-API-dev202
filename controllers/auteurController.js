const Auteur=require("../models/Auteur")
/**
 * @description Ajouter un nouveau auteur
 * @router /auteur
 * @method POST
 */
module.exports.createAuteur=async(req,res)=>{
    try {
      const newAuteur=  await Auteur.create(req.body)

      res.status(201).json(newAuteur)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
/**
 * @description Recuperer tous les auteurs
 * @route /auteur
 * @method GET
 */
module.exports.getAllAuteur=async(req,res)=>{
    try {
        const auteurs= await Auteur.find()
        res.status(200).json(auteurs)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**
 * @description Recuperer un auteur
 * @router /auteur/:id
 * @method GET
 */
module.exports.getAuteurById=async(req,res)=>{
    try {

        const auteur=await Auteur.findById(req.params.id)
        if(!auteur)
            res.status(404).json({message:"Auteur n'existe pas"})
        else
            res.status(200).json(auteur)

    } catch (error) {
        res.status(500).json(({message:error.message}))
    }
}


/**
 * @description Supprimer un auteur
 * @router /auteur/:id
 * @method delete
 */
module.exports.deleteAuteur=async(req,res)=>{
    try {
        const deleteAuteur=await Auteur.findByIdAndDelete(req.params.id)
        if(!deleteAuteur)
            return res.status(404).json({message:"Cet Auteur n'existe pas"})
            res.status(200).json
            ({message:"Cet auteur est bien supprime",deleteAuteur})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}




/**
 * @description modifier un auteur
 * @router /auteur/:id
 * @method PUT
 */
module.exports.updateAuteur=async(req,res)=>{
    try {
        const updateAuteur=await Auteur.findByIdAndUpdate
        (req.params.id,req.body,{new:true})
        if(!updateAuteur)
            return res.status(404).json({message:"Cet auteur n'existe pas"})
        res.status(200).json(updateAuteur)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}