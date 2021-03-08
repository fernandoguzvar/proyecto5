const expres = require('express');
const router = expres.Router();
const noticiaController = require('../controllers/noticiaController')


router.get('/noticia',async(req,res)=>{
    const todoNoticia= await noticiaController.listAll_noticia(req.body);
    res.render('noticia/noticia',{todoNoticia});
});

router.post('/agregar',async(req,res)=>{
    await noticiaController.agregar_noticia(req);
    res.redirect('/noticia/noticia');
});

router.get('/eliminar/:noticia',async(req,res)=>{
    await noticiaController.eliminar_noticia(req);
    res.redirect('/noticia/noticia');
});


router.post('/modificar/:id_noticia',async(req,res)=>{
    await noticiaController.modificar_noticia(req);
    res.redirect('/noticia/noticia');
});

module.exports = router; 