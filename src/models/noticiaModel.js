'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_noticia(req){
        let query=('SELECT * FROM noticia');

        const data= await pool.query(query)
        return data
    }

    async function agregar_noticia(req){
        await pool.query('insert into noticia set ?',[req.body]);
    }

    async function eliminar_noticia(req){
        const {noticia} = req.params;
        await pool.query('DELETE FROM  noticia where  id_noticia= ?',[noticia]);
    }

    async function modificar_noticia(req){
        const {id_noticia} = req.params;
        await pool.query(`UPDATE noticia set ? where id_noticia=?`,[req.body,id_noticia]);
    }


    return{
        listAll_noticia,
        agregar_noticia,
        eliminar_noticia,
        modificar_noticia,
    }
}