const router=require('express').Router()
const auteurController=require('../controllers/auteurController')
const valideId=require('../middlewares/isValideObjectId')
router.post('/',auteurController.createAuteur)
router.get('/',auteurController.getAllAuteur)
router.get('/:id',valideId,auteurController.getAuteurById)
router.delete('/:id',valideId,auteurController.deleteAuteur)
router.put('/:id',valideId,auteurController.updateAuteur)

module.exports=router