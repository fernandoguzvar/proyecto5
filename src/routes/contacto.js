const expres = require('express');
const router = expres.Router();
const contactoController = require('../controllers/contactoController')


router.get('/contacto',async(req,res)=>{
    const todoContacto= await contactoController.listAll_contacto(req.body);
    res.render('contacto/contacto',{todoContacto});
});

router.post('/agregar',async(req,res)=>{
    await contactoController.agregar_contacto(req);
    res.redirect('/contacto/contacto');
});

router.get('/eliminar/:contacto',async(req,res)=>{
    await contactoController.eliminar_contacto(req);
    res.redirect('/contacto/contacto');
});


router.post('/modificar/:id_usuario',async(req,res)=>{
    await contactoController.modificar_contacto(req);
    res.redirect('/contacto/contacto');
});

module.exports = router; 