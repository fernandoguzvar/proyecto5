'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_redes(req){
        let query=('SELECT * FROM redes');

        const data= await pool.query(query)
        return data
    }

    async function agregar_redes(req){
        await pool.query('insert into redes set ?',[req.body]);
    }

    async function eliminar_redes(req){
        const {redes} = req.params;
        await pool.query('DELETE FROM  redes where  id_redes= ?',[redes]);
    }

    async function modificar_redes(req){
        const {id_redes} = req.params;
        await pool.query(`UPDATE redes set ? where id_redes=?`,[req.body,id_redes]);
    }


    return{
        listAll_redes,
        agregar_redes,
        eliminar_redes,
        modificar_redes,
    }
}