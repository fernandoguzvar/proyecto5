const expres = require('express');
const router = expres.Router();
const teamController = require('../controllers/teamController')


router.get('/team',async(req,res)=>{
    const todoTeam= await teamController.listAll_team(req.body);
    res.render('team/team',{todoTeam});
});

router.post('/agregar',async(req,res)=>{
    await teamController.agregar_team(req);
    res.redirect('/team/team');
});

router.get('/eliminar/:team',async(req,res)=>{
    await teamController.eliminar_team(req);
    res.redirect('/team/team');
});


router.post('/modificar/:id_team',async(req,res)=>{
    await teamController.modificar_team(req);
    res.redirect('/team/team');
});

module.exports = router; 