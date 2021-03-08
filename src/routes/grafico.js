const expres = require('express');
const router = expres.Router();
const graficoController = require('../controllers/graficoController')


router.get('/grafico',async(req,res)=>{
    const todoGrafico= await graficoController.listAll_grafico(req.body);
    res.render('grafico/grafico',{todoGrafico});
});

router.post('/agregar',async(req,res)=>{
    await graficoController.agregar_grafico(req);
    res.redirect('/grafico/grafico');
});

router.get('/eliminar/:venta',async(req,res)=>{
    await graficoController.eliminar_grafico(req);
    res.redirect('/grafico/grafico');
});


router.post('/modificar/:id_venta',async(req,res)=>{
    await graficoController.modificar_grafico(req);
    res.redirect('/grafico/grafico');
});

module.exports = router; 