const expres = require('express');
const router = expres.Router();
const crudController = require('../controllers/crudController')


router.get('/crud',async(req,res)=>{
    const todoCrud= await crudController.listAll_crud(req.body);
    res.render('crud/crud',{todoCrud});
});

router.post('/agregar',async(req,res)=>{
    await crudController.agregar_crud(req);
    res.redirect('/crud/crud');
});

router.get('/eliminar/:crud',async(req,res)=>{
    await crudController.eliminar_crud(req);
    res.redirect('/crud/crud');
});


router.post('/modificar/:id_crud',async(req,res)=>{
    await crudController.modificar_crud(req);
    res.redirect('/crud/crud');
});

module.exports = router; 