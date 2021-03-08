const express=require('express');
const router=express.Router();

router.get('/add',(req,res)=>{
    res.send('oh yeah');
});

module.exports=router;