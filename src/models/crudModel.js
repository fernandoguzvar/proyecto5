'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_crud(req){
        let query=('SELECT * FROM crud');

        const data= await pool.query(query)
        return data
    }

    async function agregar_crud(req){
        await pool.query('insert into crud set ?',[req.body]);
    }

    async function eliminar_crud(req){
        const {crud} = req.params;
        await pool.query('DELETE FROM  crud where  id_crud= ?',[crud]);
    }

    async function modificar_crud(req){
        const {id_crud} = req.params;
        await pool.query(`UPDATE crud set ? where id_crud=?`,[req.body,id_crud]);
    }


    return{
        listAll_crud,
        agregar_crud,
        eliminar_crud,
        modificar_crud,
    }
}