const expres = require('express');
const router = expres.Router();
const usuarioController = require('../controllers/usuarioController')


router.get('/usuario',async(req,res)=>{
    const todoUsuario= await usuarioController.listAll_usuario(req.body);
    res.render('usuario/usuario',{todoUsuario});
});

router.post('/agregar',async(req,res)=>{
    await usuarioController.agregar_usuario(req);
    res.redirect('/usuario/usuario');
});

router.get('/eliminar/:usuario',async(req,res)=>{
    await usuarioController.eliminar_usuario(req);
    res.redirect('/usuario/usuario');
});


router.post('/modificar/:id_usuario',async(req,res)=>{
    await usuarioController.modificar_usuario(req);
    res.redirect('/usuario/usuario');
});

module.exports = router; 