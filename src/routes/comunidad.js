const expres = require('express');
const router = expres.Router();
const comunidadController = require('../controllers/comunidadController')


router.get('/comunidad',async(req,res)=>{
    const todoComunidad= await comunidadController.listAll_comunidad(req.body);
    res.render('comunidad/comunidad',{todoComunidad});
});

router.post('/agregar',async(req,res)=>{
    await comunidadController.agregar_comunidad(req);
    res.redirect('/comunidad/comunidad');
});

router.get('/eliminar/:comunidad',async(req,res)=>{
    await comunidadController.eliminar_comunidad(req);
    res.redirect('/comunidad/comunidad');
});


router.post('/modificar/:id_comunidad',async(req,res)=>{
    await comunidadController.modificar_comunidad(req);
    res.redirect('/comunidad/comunidad');
});

module.exports = router; 