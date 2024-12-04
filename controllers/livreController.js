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
/***
 * @description recuperer tous les livres 
 * @route /livre
 * @method GET
 */
module.exports.getAllBooks=async(req,res)=>{
    try {
        const books=await Livre.find().populate('auteur').sort({createdAt:-1})
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
/**
 * @description recuperer un livre
 * @router /livre/:id
 * @method GET
 */
module.exports.getBooksById=async(req,res)=>{
    try {
        const book=await Livre.findById(req.params.id).populate("auteur")
        if(!book)
            return res.status(404).json({message:`book ${req.params.id} not found`})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**
 * @description supprimer un livre
 * @router /livre/:id
 * @method Delete
 */
module.exports.deleteBooksById=async(req,res)=>{
    try {
        const book=await Livre.findByIdAndDelete(req.params.id).populate("auteur")
        if(!book)
            return res.status(404).json({message:`book ${req.params.id} not found`})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


/**
 * @description modifier un livre
 * @router /livre/:id
 * @method PUT
 */
module.exports.updateBooksById=async(req,res)=>{
    try {
        const book=await Livre.findByIdAndUpdate(req.params.id).populate("auteur")
        if(!book)
            return res.status(404).json({message:`book ${req.params.id} not found`})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**
 * @description recuperer des livres selon un prix
 * @router /livre/prix/:prix     
 * @method GET
 */
module.exports.getBooksByPrice=async(req,res)=>{
    try {
        const books=await Livre.find({prix:req.params.prix}).populate('auteur')
        if(books.length==0)
            return res.status(404).json({message:`no books with this price :${req.params.prix}`})
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**
 * @description recuperer des livres selon un intervale
 * @router /livre/prix/:min/:max     
 * @method GET
 */
module.exports.getBooksByRange=async(req,res)=>{
    try {
        const {min,max}=req.params
        const books=await Livre.find({prix:{$gte:min,$lte:max}}).populate('auteur')
        if(!books.length)
            return res.status(404).json({message:`no books with this range `})
        res.status(200).json(books) 
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**
 * @description recuperer les informations des livres
 * @router livre/ids/ids
 * @method GET
 */
module.exports.getBooksByIds=async(req,res)=>{
    try {
        const {ids}=req.body
        const books= await Livre.find({_id:{$in:ids}}).populate('auteur')
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}