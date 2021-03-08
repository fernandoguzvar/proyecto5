const expres = require('express');
const router = expres.Router();
const proveedorController = require('../controllers/proveedorController')


router.get('/proveedor',async(req,res)=>{
    const todoProveedor= await proveedorController.listAll_proveedor(req.body);
    res.render('proveedor/proveedor',{todoProveedor});
});

router.post('/agregar',async(req,res)=>{
    await proveedorController.agregar_proveedor(req);
    res.redirect('/proveedor/proveedor');
});

router.get('/eliminar/:proveedor',async(req,res)=>{
    await proveedorController.eliminar_proveedor(req);
    res.redirect('/proveedor/proveedor');
});


router.post('/modificar/:id_proveedor',async(req,res)=>{
    await proveedorController.modificar_proveedor(req);
    res.redirect('/proveedor/proveedor');
});

module.exports = router; 