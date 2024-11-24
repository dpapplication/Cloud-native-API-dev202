const router =require('express').Router()
const livreController=require('../controllers/livreController')
router.post('/',livreController.createLivre)
module.exports=router