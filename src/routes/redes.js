const expres = require('express');
const router = expres.Router();
const redesController = require('../controllers/redesController')


router.get('/redes',async(req,res)=>{
    const todoRedes= await redesController.listAll_redes(req.body);
    res.render('redes/redes',{todoRedes});
});

router.post('/agregar',async(req,res)=>{
    await redesController.agregar_redes(req);
    res.redirect('/redes/redes');
});

router.get('/eliminar/:redes',async(req,res)=>{
    await redesController.eliminar_redes(req);
    res.redirect('/redes/redes');
});


router.post('/modificar/:id_redes',async(req,res)=>{
    await redesController.modificar_redes(req);
    res.redirect('/redes/redes');
});

module.exports = router; 