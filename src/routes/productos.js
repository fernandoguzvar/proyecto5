const expres = require('express');
const router = expres.Router();
const productoController = require('../controllers/productoController')


router.get('/producto',async(req,res)=>{
    const todoProducto= await productoController.listAll_producto(req.body);
    res.render('productos/productos',{todoProducto});
});

router.post('/agregar',async(req,res)=>{
    await productoController.agregar_producto(req);
    res.redirect('/producto/producto');
});

router.get('/eliminar/:producto',async(req,res)=>{
    await productoController.eliminar_producto(req);
    res.redirect('/producto/producto');
});


router.post('/modificar/:id_producto',async(req,res)=>{
    await productoController.modificar_producto(req);
    res.redirect('/producto/producto');
});

module.exports = router; 