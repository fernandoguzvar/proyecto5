'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_corporativo(req){
        let query=('SELECT * FROM corporativo');

        const data= await pool.query(query)
        return data
    }

    async function agregar_corporativo(req){
        await pool.query('insert into corporativo set ?',[req.body]);
    }

    async function eliminar_corporativo(req){
        const {corporativo} = req.params;
        await pool.query('DELETE FROM  corporativo where  id_corporativo= ?',[corporativo]);
    }

    async function modificar_corporativo(req){
        const {id_corporativo} = req.params;
        await pool.query(`UPDATE corporativo set ? where id_corporativo=?`,[req.body,id_corporativo]);
    }


    return{
        listAll_corporativo,
        agregar_corporativo,
        eliminar_corporativo,
        modificar_corporativo,
    }
}