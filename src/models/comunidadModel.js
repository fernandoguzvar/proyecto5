'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_comunidad(req){
        let query=('SELECT * FROM comunidad');

        const data= await pool.query(query)
        return data
    }

    async function agregar_comunidad(req){
        await pool.query('insert into comunidad set ?',[req.body]);
    }

    async function eliminar_comunidad(req){
        const {comunidad} = req.params;
        await pool.query('DELETE FROM  comunidad where  id_comunidad= ?',[comunidad]);
    }

    async function modificar_comunidad(req){
        const {id_comunidad} = req.params;
        await pool.query(`UPDATE comunidad set ? where id_comunidad=?`,[req.body,id_comunidad]);
    }


    return{
        listAll_comunidad,
        agregar_comunidad,
        eliminar_comunidad,
        modificar_comunidad,
    }
}