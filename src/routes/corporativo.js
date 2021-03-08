const expres = require('express');
const router = expres.Router();
const corporativoController = require('../controllers/corporativoController')


router.get('/corporativo',async(req,res)=>{
    const todoCorporativo= await corporativoController.listAll_corporativo(req.body);
    res.render('corporativo/corporativo',{todoCorporativo});
});

router.post('/agregar',async(req,res)=>{
    await corporativoController.agregar_corporativo(req);
    res.redirect('/corporativo/corporativo');
});

router.get('/eliminar/:corporativo',async(req,res)=>{
    await corporativoController.eliminar_corporativo(req);
    res.redirect('/corporativo/corporativo');
});


router.post('/modificar/:id_corporativo',async(req,res)=>{
    await corporativoController.modificar_corporativo(req);
    res.redirect('/corporativo/corporativo');
});

module.exports = router; 